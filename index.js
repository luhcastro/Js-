let saludo = prompt('¡Hola! Ingresa tu nombre')
let bienvenida= alert('Bienvenid@ ' + saludo)
let numero = prompt('Ingresa el número de línea que deseas pasar a Claro')

class Portabilidad  {
    constructor (empresa, id,) {
        this.empresa= empresa
        this.id= id
        this.abonos = [
            {
             empresa:'personal',
                planes: [
                    {
                        gigas: 5,
                        precio: 3400,
                        descuento: 70
                    },
                    {
                        gigas: 8,
                        precio: 4900, 
                        descuento: 70
                    },
                    {
                        gigas: 15,
                        precio: 6300,
                        descuento: 70

                    },
                ],

            },

            {
             empresa:'movistar',
                planes: [
                    {
                        gigas: 5,
                        precio: 3400,
                        descuento: 85
                    },
                    {
                        gigas: 8,
                        precio: 4900, 
                        descuento: 85
                    },
                    {
                        gigas: 15,
                        precio: 6300,
                        descuento: 85

                    },
                ],

            },

        ]
    }

}

const companiaActual = []
const personal = new Portabilidad ('personal',1)
companiaActual.push(personal)
const movistar = new Portabilidad ('movistar',2)
companiaActual.push(movistar)

const seleccionEmpresa = parseInt(prompt('Ingresa tu empresa actual 1. Personal - 2.Movistar'))

const findEmpresa = companiaActual.find(portabilidad=>portabilidad.id === seleccionEmpresa)

const seleccionPlan = parseInt(
    prompt('Selecciona la cantidad de gigas que quieres en tu plan 5, 8 o 15'))

const abono = findEmpresa.abonos

const precioSegunPlan= []
 abono.forEach((abono) => {
    const planesArray = abono.planes
    const  planGigas = planesArray.find((plan) => plan.gigas === seleccionPlan)
    precioSegunPlan.push({
        nombre: abono.empresa,
        precio: planGigas.precio,

    })
})

console.log(precioSegunPlan)
//let arraystring = precioSegunPlan.join(' ') para trabajar luego

    
















