let nombre = prompt('Ingresa tu nombre')

let saludo = alert('¡Bienvenid@ ' + nombre + "!" )

let numero= parseInt(prompt(' Ingresa el número que deseas pasar a Claro'))

let empresa = parseInt(prompt(' Selecciona a que compañía pertenece el número ingresado: 1. Personal - 2. Movistar'))

let abono = parseInt(prompt('Selecciona el abono que deseas contratar: 1. Plan de 1GB - 2. Plan de 3GB - 3. Plan de 5GB - 4. Plan de 8GB - 5. Plan de 15GB'))

let precioSinDescuento= 0

let agregarLinea = true

let decision 

while (agregarLinea=== true) {
    if (abono===1) {
        precioSinDescuento = precioSinDescuento +  2000
    } else if (abono===2) {
        precioSinDescuento = precioSinDescuento +  2500  
    }else if (abono===3) {
        precioSinDescuento = precioSinDescuento +  3400
    } else if (abono===4) {
        precioSinDescuento = precioSinDescuento + 3600
    } else if (abono===5){
        precioSinDescuento = precioSinDescuento + 4300
    } else {
     abono = parseInt(prompt('Selecciona una opción correcta :1. Plan de 1GB - 2. Plan de 3GB - 3. Plan de 5GB - 4. Plan de 8GB - 5. Plan de 15GB'))
     continue
    }

    decision = parseInt(prompt('Deseas pasar otro número? 1. Si - 2.No'))
    if (decision===1) {
        numero= parseInt(prompt(' Ingresa el número que deseas pasar a Claro'))
        empresa = parseInt(prompt(' Selecciona tu compañía actual: 1. Personal - 2. Movistar'))
        abono = parseInt(prompt('Selecciona el abono que deseas contratar: 1. Plan de 1GB - 2. Plan de 3GB - 3. Plan de 5GB - 4. Plan de 8GB - 5. Plan de 15GB'))
    } else if (decision===2) {
        agregarLinea = false
    }
}


alert ('Tu abono sin descuento es de '+precioSinDescuento)

function calcularPrecioConDescuento (valor) {
    let descuento = 0
    if (empresa ===1) {
        descuento = 70

    } else if (empresa ===2) {
            descuento = 85
    } 

    let valorDescuento = valor * (descuento/100)
    valor = valor - valorDescuento
    return valor
}

let valorDescuento = calcularPrecioConDescuento(precioSinDescuento)

alert ('El precio final a pagar en tu factura es de '+valorDescuento)












