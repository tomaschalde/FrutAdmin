
import styles from "./GenerateReports.module.css"

import Card from "../../components/Card/Card";
const GenerateReports = () => {

      return (
        <>

            <div className={styles.App}>
            <h1>REPORTES</h1>
            <div className={styles.cardContainer}>
            <Card description="Resumen de ventas del día" reportType="sales-summary?periodo=day" />
            <Card description="Resumen de ventas por semana" reportType="sales-summary?periodo=week" />
            <Card description="Resumen de ventas por mes" reportType="sales-summary?periodo=month" />
            <Card description="Productos más vendidos" reportType="top-sales"/>
            <Card description="Productos con bajo stock" reportType="low-stock"/>
            <Card description="Ingresos totales por ventas" reportType="total-revenue"/>
            </div>
            </div>


        </>

      )

}

export default GenerateReports