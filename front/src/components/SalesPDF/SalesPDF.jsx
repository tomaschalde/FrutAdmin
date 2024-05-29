import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});



const SalesPDF = ({ data, typeReport }) => (
  <Document>
    {
    data.map((dato,index) => (
      <Page size="A4" style={styles.page} key={`${typeReport}-${index}`}>
        <View style={styles.section}>
        {typeReport === 'sales-summary?periodo=day' && (

          <React.Fragment>
            <Text>RESUMEN VENTAS DIA DE HOY {dato.date}</Text>
            <Text>Cliente: {dato.client}</Text>
            <Text>Producto: {dato.details.name}</Text>
            <Text>Cantidad: {dato.details.quantity}</Text>
            <Text>Precio Total: {dato.details.totalPrice}</Text>
            <Text>______________________________________________________________________________</Text>
          </React.Fragment>

        )}

        {typeReport === 'sales-summary?periodo=week' && (

        <React.Fragment>
          <Text>RESUMEN VENTAS POR SEMANA</Text>
          <Text>Semana: {dato.week}</Text>
          {dato.sales.map((sale, i) => (
                <React.Fragment key={`sale-${i}`}>
                  <Text>Producto: {sale.name}</Text>
                  <Text>Cantidad: {sale.quantity}</Text>
                  <Text>Precio Total: {sale.totalPrice}</Text>
                  <Text>-------------------------------------</Text>
                </React.Fragment>
          ))}
          <Text>______________________________________________________________________________</Text>
        </React.Fragment>

        )}
        {typeReport === 'sales-summary?periodo=month' && (

        <React.Fragment>
          <Text>RESUMEN VENTAS POR MES </Text>
          <Text>Mes: {dato.month}</Text>
          {dato.sales.map((sale, i) => (
                <React.Fragment key={`sale-${i}`}>
                  <Text>Producto: {sale.name}</Text>
                  <Text>Cantidad: {sale.quantity}</Text>
                  <Text>Precio Total: {sale.totalPrice}</Text>
                  <Text>-------------------------------------</Text>
                </React.Fragment>
          ))}
          <Text>______________________________________________________________________________</Text>
        </React.Fragment>

        )}

        {typeReport === "top-sales" && (

          <React.Fragment>
            <Text>5 PRODUCTOS MAS VENDIDOS</Text>
            <Text>Producto: {dato.name}</Text>
            <Text>Cantidad: {dato.quantity}</Text>
            <Text>______________________________________________________________________________</Text>
          </React.Fragment>

        )}
        
        {typeReport === "low-stock" && (

        <React.Fragment>
          <Text>PRODUCTOS CON BAJO STOCK</Text>
          <Text>Producto: {dato.name}</Text>
          <Text>Stock: {dato.stock}</Text>
          <Text>Precio: {dato.price}</Text>
          <Text>______________________________________________________________________________</Text>
        </React.Fragment>

        )}

        {typeReport === "total-revenue" && (
        <React.Fragment>
          <Text>GANANCIAS TOTALES</Text>
          <Text>Productos vendidos</Text>
          {dato.productsSold.map((product, i) => (
                <React.Fragment key={`product-${i}`}>
                  <Text>{product}</Text>
                </React.Fragment>
          ))}
          <Text>-------------------------------------</Text>
          <Text>Ganancia total: {dato.total}</Text>
          <Text>______________________________________________________________________________</Text>
        </React.Fragment>

        )}

        </View>
      </Page>
    ))}
  </Document>
);

// const SalesPDFViewer = ({ name, stock, price, date }) => (
//   <PDFViewer style={{ width: '100%', height: '100vh' }}>
//     <SalesPDF name ={name} stock={stock} price={price} date={date} />
//   </PDFViewer>


export default SalesPDF;
