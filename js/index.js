class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre;
        this.precio  = parseFloat(precio);
    }
}

const productos = [];
productos.push(new Producto("Almohada", "100"));
productos.push(new Producto("Toalla Turbante", "200"));
productos.push(new Producto("Traba Puerta", "300"));
    
console.log(productos)

function descuento(parametro1, parametro2) {
    resultadoDescuento = parametro1 * parametro2
    return(resultadoDescuento)
}
function cantidadTotal(parametro1, parametro2) {
    precioTotal = parametro1 * parametro2
    return(precioTotal)
}

    let producto = parseInt(prompt("Ingrese el numero de la opcion que desea \n 1) Almohada $100 \n 2) Toalla Turbante $200 \n 3) Traba Puerta $300 \n Ingrese 0 para cancelar la operacion"))

    let cantidad = parseInt(prompt("Cuantos quiere?"))

    while(producto != 0){
        switch(producto){
            case 1:
                
                cantidadTotal(cantidad, 100)
                console.log(precioTotal)

                descuento(precioTotal, 0.2)
                break;
            case 2:
                cantidadTotal(cantidad, 200)
                console.log(precioTotal)

                descuento(precioTotal, 0.2)
                break;
            case 3:
                cantidadTotal(cantidad, 300)
                console.log(precioTotal)

                descuento(precioTotal, 0.2)
                break;
            default:
                alert("Eleccion no valida")
                break;    

        }
        alert("Usted eligio:" + "\n" + "Producto: " + producto + "\n" + "Cantidad: " + cantidad + "\n" + "Total: " + precioTotal + "\n" + "Descuento: " + resultadoDescuento)
        break;
    }