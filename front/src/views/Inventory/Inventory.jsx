import { useDispatch, useSelector } from "react-redux"
import styles from "./Inventory.module.css"
import { useEffect} from "react";
import axios from "axios";
import { setInventory} from "../../redux/reducer";
import Product from "../../components/Product/Product";

const Inventory = () => {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/inventory')
                const products = response.data
                dispatch(setInventory(products))
                
            } catch (error) {
                console.log("Error al obtener los datos", error.message)
            }
        }

        fetchData()
    }, [])


    const handleDeleteProduct = (id) => {
        dispatch(setInventory(products.filter(product => product.id !== id)));
    };

    return (
                <div className= {styles.containerMyTurns}>
                    <h1 className={styles.title}>INVENTARIO</h1>
                    {
                        !products?.length > 0 ? <h3>No hay productos en el inventario</h3> :
                            (
                                <div className={styles.containerTurns}>
                                {
                                    products?.map((product) => {
                                        console.log(product)
                                        return <Product key = {product.id} data = {product} onDelete={handleDeleteProduct}/>
                                    })
                                }
                                </div>
                            )
                    }
                </div> 
    )
}

export default Inventory