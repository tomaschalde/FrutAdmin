// import { useDispatch } from "react-redux"
import { useState } from "react";
import styles from "./Product.module.css"
import axios from "axios";

const Product = ({data, onDelete}) => {

    const {id,name,stock,price,date} = data


    const [isVisible, setIsVisible] = useState(true)

    const handleDeleteProduct = () => {

        const deleteP = async () => {
            try {
                console.log(id)
                await axios.delete(`http://localhost:3000/inventory/${id}`,)
                onDelete(id)
                alert("El producto se eliminó con éxito ",)
                setIsVisible(false);
            } catch (error) {
                console.log("Error al eliminar producto" , error.message)
                alert("No se pudo eliminar el producto")
            }
        }

        deleteP()
        
      };

    return isVisible ? (
        <div className={styles.containerTurn}>
            
            <label className= {styles.label}>Nombre producto</label>
            <span className= {styles.span}>{name}</span>

            <label className= {styles.label}>Stock</label>
            <span className= {styles.span}>{stock}</span>
            
            <label className= {styles.label}>Precio por unidad</label>
            <span className= {styles.span}>{price}</span>

            <label className= {styles.label}>Fecha</label>
            <span className= {styles.spanStatus}>{date}</span>

            <button className={styles.btn} onClick={handleDeleteProduct}>Borrar Producto</button>

        </div>
    ) : null
}

export default Product