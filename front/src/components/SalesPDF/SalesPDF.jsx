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

const SalesPDF = ({ name, stock, price, date}) => (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Producto: {name}</Text>
        <Text>Stock: {stock}</Text>
        <Text>Precio: {price}</Text>
        <Text>Fecha: {price}</Text>
      </View>
    </Page>
  </Document>
);

const SalesPDFViewer = ({ name, stock, price, date }) => (
  <PDFViewer style={{ width: '100%', height: '100vh' }}>
    <SalesPDF name ={name} stock={stock} price={price} date={date} />
  </PDFViewer>
);

export default SalesPDFViewer;
