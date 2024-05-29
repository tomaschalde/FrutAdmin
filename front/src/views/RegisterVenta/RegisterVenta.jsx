import { useState, useEffect } from "react"
import { labelsRegister } from "../../helpers/labels"
import styles from "./Register.module.css"
import axios from "axios"
import { validateSale } from "../../helpers/Validate"


const RegisterVenta = () => {

    const initialState = {
        name: "",
        date: "",
        nameProduct:"",
        quantity:0,
        totalPrice:0

    }

    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const handleInputChange = (event) => {
        const {name,value} = event.target;

        setForm ({
            ...form,
            [name]: value
        })
    }

    useEffect( () => { 
        setErrors(validateSale(form));
    }, [form])

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const create = async () => {
            try {


                // eslint-disable-next-line no-unused-vars
                const response = await axios.post(`http://localhost:3000/sales`, {
                    name: form.name,
                    date: form.date,
                    nameProduct: form.nameProduct,
                    quantity: form.quantity,
                    totalPrice: form.totalPrice
                })

                
                alert("La venta se registró con éxito ")
                setForm(initialState);

            } catch (error) {
                console.log("Error al registrar venta" , error.message)
                alert("No se pudo registrar la venta")
            }

        }

        create()
    }

    
    return (
        <div className = {styles.formContainer}>

            
            <form onSubmit = {handleOnSubmit}>

                <h2>REGISTRAR VENTA</h2>

                {
                    labelsRegister.map( ({name,label,type}) => {
                        return (
                            <div key = {name}>
                                <label>{label}</label>
                                <input type={type} onChange = {handleInputChange} name = {name} value={form[name]}/>
                                {errors[name] && <span key= {name} className={styles.errorMessage}> {errors [name]} </span>}
                            </div>
                        )
                    })

                }
                
                <button disabled = {errors.name || errors.date || errors.nameProduct|| errors.quantity || errors.totalPrice} type="submit">Registrar venta</button>
            </form>

            
        </div>
    )
}

export default RegisterVenta