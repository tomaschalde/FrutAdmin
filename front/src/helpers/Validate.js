import {regexStock, regexPrice} from "./Regexs";

export const validateSale = (input) => {

    let errors = {};

    if(!input.name) errors = {...errors, name: "El nombre es obligatorio"};

    if(!input.nameProduct) errors = {...errors, nameProduct: "El nombre del producto es obligatorio"};

    if(!regexStock.test(input.quantity)) errors = {...errors, quantity: "La cantidad ingresada no es válida"};

    if(!regexPrice.test(input.totalPrice)) errors = {...errors, totalPrice: "La cantidad ingresada no e válida"};


    //Validacion fecha
    const date = input.date.split("-")
    const dateActual = new Date().toLocaleDateString().split("/").reverse()
    
    //Si el año recibido es menor al año actual
    if(Number(date[0]) < Number(dateActual[0]) )  
        errors = {...errors, date: "Seleccione un año válido"};

    //Si el mes recibido es menor al mes actual
    if(Number(date[0]) === Number(dateActual[0]) && Number(date[1]) < Number(dateActual[1]))
        errors = {...errors, date: "Seleccione un mes válido"};

    //Si el mes recibido es igual al mes actual y el dia recibido es menor o igual al dia actual
    if(Number(date[1]) === Number(dateActual[1]) && Number(date[2]) <= Number(dateActual[2])) 
        errors = {...errors, date: "Seleccione un día válido"};

    const dayWeek = new Date(input.date).getDay();
    
    if(dayWeek === 6 || dayWeek === 5)
        errors = {...errors, date: "Seleccione un día válido"};
    

    return errors;
}

export const validateProduct = (input) => {
    let errors = {}

    if(!input.name) errors = {...errors, name: "El nombre es obligatorio"};


    if(!regexStock.test(input.stock)) errors = {...errors, stock: "La cantidad ingresada no es válida"};

    if(!regexPrice.test(input.price)) errors = {...errors, price: "La cantidad ingresada no e válida"};

    //Validacion fecha
    const date = input.date.split("-")
    const dateActual = new Date().toLocaleDateString().split("/").reverse()
    
    //Si el año recibido es menor al año actual
    if(Number(date[0]) < Number(dateActual[0]) )  
        errors = {...errors, date: "Seleccione un año válido"};

    //Si el mes recibido es menor al mes actual
    if(Number(date[0]) === Number(dateActual[0]) && Number(date[1]) < Number(dateActual[1]))
        errors = {...errors, date: "Seleccione un mes válido"};

    //Si el mes recibido es igual al mes actual y el dia recibido es menor o igual al dia actual
    if(Number(date[1]) === Number(dateActual[1]) && Number(date[2]) <= Number(dateActual[2])) 
        errors = {...errors, date: "Seleccione un día válido"};

    const dayWeek = new Date(input.date).getDay();
    
    if(dayWeek === 6 || dayWeek === 5)
        errors = {...errors, date: "Seleccione un día válido"};
      

    return errors
}