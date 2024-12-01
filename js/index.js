const precioBase = 700000
const precioProducto   = document.querySelector('#js-precioProducto')
precioProducto.innerHTML=precioBase.toLocaleString()

const cantidad      = document.querySelector('#js-cantidad')
const total         = document.querySelector('#js-valorTotal')

const menos = document.querySelector('#js-btnMenos')
const mas = document.querySelector('#js-btnMas')

mas.addEventListener('click', () => {
    console.log('CLICK EN mas!')
    cantidad.innerHTML++
    total.innerHTML = (cantidad.innerHTML * precioBase).toLocaleString()
})

menos.addEventListener('click', () => {
    console.log('CLICK EN menos!')
    if(cantidad.innerHTML > 0){
        cantidad.innerHTML--
        total.innerHTML = (cantidad.innerHTML * precioBase).toLocaleString()
    }
})