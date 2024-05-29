import { useState } from "react";
import styles from "./Product.module.css"
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Product = ({data, onDelete}) => {

    // eslint-disable-next-line react/prop-types
    const {id,name,stock,price,date} = data


    const [isVisible, setIsVisible] = useState(true)

    const handleDeleteProduct = () => {

        const deleteP = async () => {
            try {
                const confirmation = window.confirm ('¿Estás seguro que deseas eliminar el producto?')

                if(confirmation){
                    await axios.delete(`http://localhost:3000/inventory/${id}`,)
                    onDelete(id)
                    alert("El producto se eliminó con éxito ",)
                    setIsVisible(false);
                }
                else{
                    alert("El producto continua guardado")
                }

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