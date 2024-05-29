/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import styles from "./Card.module.css"
import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import SalesPDF from "../SalesPDF/SalesPDF";


const Card = ({description, reportType}) => {

  const [reportData, setReportData] = useState(null);

    const generatePDF = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/reports/${reportType}`)  
        const reportData = response.data;
        setReportData(reportData)
        console.log(reportData)
        alert('SE GENERA UN PDF')

      } catch (error) {
        alert('ERROR')
      }
    }

    return (
        <div className={styles.card}>
          <p>{description}</p>
          <button className={styles.customButton} onClick = {generatePDF}>Generar Reporte</button>


          {
            
            reportData &&(
              <PDFDownloadLink document={<SalesPDF data={reportData} typeReport={reportType}/>} fileName="reporte.pdf">
                          {({ blob, url, loading, error }) =>
                            loading ? 'Generando PDF...' : 'Descargar PDF'
                          }
              </PDFDownloadLink>
            )
          }
        </div>
      );
}

export default Card