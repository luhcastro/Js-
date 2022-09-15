const abonos = []
const carrito = []
const select = document.getElementById('lista')

class Plan{
    constructor(id, gigas, precio,){
        this.id = id
        this.gigas = gigas
        this.precio = precio

    } 
}


let abono1 = new Plan(1, 3, 2000)
let abono2 = new Plan(2, 5, 2500)
let abono3 = new Plan(3, 8, 3000)


abonos.push(abono1,abono2, abono3)

console.log(abonos)
console.log(select)

abonos.forEach((abono)=> {
    const option = document.createElement('option')
    option.innerText = `${abono.gigas}: $${abono.precio}`
    select.append(option)
})

    
















