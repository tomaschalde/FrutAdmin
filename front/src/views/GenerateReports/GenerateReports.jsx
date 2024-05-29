import axios from "axios";
import styles from "./GenerateReports.module.css"
import SalesPDFViewer from "../../components/SalesPDF/SalesPDF";
import { saveAs } from 'file-saver';

import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
const GenerateReports = () => {

    const handleGenerateReport = async (reportType) => {
        try {
          // Realizar petición GET a la base de datos para obtener los datos del reporte
          const response = await axios.get(`http://localhost:3000/inventory`);
          const reportData = response.data
          if(!reportData) throw new Error ("NO EXISTE EL ELEMENTO")
          // Generar el PDF con los datos obtenidos
          const pdfBlob = await generatePDF(reportData);
          console.log(pdfBlob)
    
          // Guardar el PDF
          saveAs(pdfBlob, `${reportType}_report.pdf`);
        } catch (error) {
          console.error("Error al generar el reporte:", error);
        }
      };
    
      const generatePDF = async (reportData) => {
        return reportData.map(product => {
            <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text>Producto: {product.name}</Text>
                <Text>Stock: {product.stock}</Text>
                <Text>Precio: {product.price}</Text>
                <Text>Fecha: {product.date}</Text>
              </View>
            </Page>
          </Document>
        })

      };
    // eslint-disable-next-line react/prop-types
    function Card({ description, reportType }) {
        return (
          <div className={styles.card}>
            <p>{description}</p>
            <button className={styles.customButton} onClick={() => handleGenerateReport({reportType})}>Generar Reporte</button>
          </div>
        );
      }

      return (
        <>

            <div className={styles.App}>
            <h1>REPORTES</h1>
            <div className={styles.cardContainer}>
            <Card description="Resumen de ventas por día, semana o mes" reportType="sales_summary"/>
            <Card description="Productos más vendidos" reportType="sales_summary"/>
            <Card description="Productos con bajo stock" reportType="sales_summary"/>
            <Card description="Ingresos totales por ventas" reportType="sales_summary"/>
            </div>
            </div>


        </>

      )

}

export default GenerateReports