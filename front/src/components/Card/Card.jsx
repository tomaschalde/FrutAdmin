import styles from "./Card.module.css"

// eslint-disable-next-line react/prop-types, no-unused-vars
const Card = ({description, reportType}) => {
    return (
        <div className={styles.card}>
          <p>{description}</p>
          <button className={styles.customButton}>Generar Reporte</button>
        </div>
      );
}

export default Card