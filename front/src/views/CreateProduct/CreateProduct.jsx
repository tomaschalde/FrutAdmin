import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { labelsProduct } from "../../helpers/labels"
import styles from "./CreateProduct.module.css"
import axios from "axios";

const CreateProduct = () => {

    const navigate = useNavigate()

    const initialState = {
        name: "",
        stock:0,
        price:0,
        date: "",
    }

    const [form, setForm] = useState(initialState);
    // const [errors, setErrors] = useState(initialState);

    const handleInputChange = (event) => {
        const {name,value} = event.target;

        setForm ({
            ...form,
            [name]: value
        })
    }

    // useEffect( () => { 
    //     setErrors();
    // }, [form])

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const create = async () => {
            try {

                // eslint-disable-next-line no-unused-vars
                const response = await axios.post(`http://localhost:3000/inventory`, {
                    name:form.name, 
                    stock: form.stock, 
                    price: form.price,
                    date: form.date,
                })

                
                alert("El producto se cargó con éxito ")
                navigate("/");
                setForm(initialState);

            } catch (error) {
                console.log("Error al cargar producto" , error.message)
                alert("No se pudo cargar el producto")
            }

        }

        create()
    }

    return (
        <>
            <div className={styles.formContainer}>
            <form onSubmit={handleOnSubmit}>
            {
                labelsProduct.map( ({name,label,type}) => {
                    return (
                        <div key = {name}>
                            <label>{label}</label>
                            <input type={type} onChange = {handleInputChange} name = {name} value={form[name]}/>
                            {/* {errors[name] && <span key= {name} className={styles.errorMessage}> {errors [name]} </span>} */}
                        </div>
                    )
                })

            }

            <button  type = "submit">Cargar Producto</button>

            </form>
        </div>
        </>
    )
}

export default CreateProduct