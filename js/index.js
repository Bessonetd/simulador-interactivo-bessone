function descuento(parametro1, parametro2, parametro3) {
    resultado = (parametro1 * parametro2) / parametro3
    return(resultado)
}

while(true){

    let producto = prompt("Que producto desea? \n Almohada $100 \n Toalla Turbante $200 \n Traba Puerta $300")

    let cantidad = parseInt(prompt("Cuantos quiere?"))

    if (producto.toLowerCase() == "almohada") {
        let resu1 = cantidad * 100
        console.log(resu1)
        descuento(resu1, 20, 100)
        alert("Usted eligio:" + "\n" + "Producto: " + producto + "\n" + "Cantidad: " + cantidad + "\n" + "Total: " + resu1 + "\n" + "Descuento: " + resultado)
        break
    } 
    else if (producto.toLowerCase() == "toalla turbante"){
        let resu2 = cantidad * 200
        console.log(resu2)
        descuento(resu2, 20, 100)
        alert("Usted eligio:" + "\n" + "Producto: " + producto + "\n" + "Cantidad: " + cantidad + "\n" + "Total: " + resu2 + "\n" + "Descuento: " + resultado)
        break
    }
    else if (producto.toLowerCase() == "traba puerta"){
        let resu3 = cantidad * 300
        console.log(resu3)
        descuento(resu3, 20, 100)
        alert("Usted eligio:" + "\n" + "Producto: " + producto + "\n" + "Cantidad: " + cantidad + "\n" + "Total: " + resu3 + "\n" + "Descuento: " + resultado)
        break
    }
    else{
        alert("Eleccion no valida")
    }
}