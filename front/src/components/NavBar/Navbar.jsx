import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className= {styles.navbar}>

            <div className={styles.containerLogo}>
                <img src="https://img.freepik.com/vector-premium/logotipo-mercado-frutas-logotipo-alimentos-frescos-frutas_663736-278.jpg" alt="Consultorio.img" />
            </div>

            <div className={styles.containerOptions}>
                <ul>
                    <li><Link to ="/" >Inventario</Link></li>
                    <li><Link to = "/inventory">Cargar Producto</Link></li>
                    <li><Link to = "/sales">Registrar Venta</Link></li>
                    <li><Link to = "/reports">Reportes</Link></li>

                </ul>
            </div>

        </nav>
    )
}

export default Navbar


