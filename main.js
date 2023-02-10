import "toastify-js/src/toastify.css"
import './style.css'
import {getProductInfo} from './utils.js'
import Toastify from 'toastify-js'


const buyModal = document.getElementById('buyModal')
const buyModalBody = document.getElementById('buyModalBody')
const buyModalTitle = document.getElementById('buyModalTitle')
const buyPContainer = document.getElementById('buyPContainer')
const buyRightButton = document.getElementById('buyRightButton')
const buyLeftButton = document.getElementById('buyLeftButton')
const buyQuantity = document.getElementById('buyQuantity')
const addCartBtn = document.getElementById('addCartBtn')
const addBuyPrice = document.getElementById('buyPrice')
const cartProducts = document.getElementById('cartProducts')

let buyQuantityCount = 0
let buyTotalPrice = 0
let lastProductSelected = ''

let cart = {
    donut: 0,
    coco: 0,
    carrot: 0,
    cocoa: 0,
    coffee: 0,
    churros: 0,
}

document.addEventListener('DOMContentLoaded', e => {
    if(document.URL === 'http://localhost:5173/cart.html') {
        let totalPrice = 0

        let currentCart = JSON.parse(localStorage.getItem('cart'))
        
        for(let key in currentCart) {
            if(currentCart[key] != 0) {
                let rowDiv = document.createElement('div')
                rowDiv.className = 'row mb-2s'
            
                let col1 = document.createElement('div')
                col1.className = 'col'
                col1.innerText = new getProductInfo(key).title
            
                let col2 = document.createElement('div')
                col2.className = 'col'
                col2.innerText = currentCart[key]
            
                let col3 = document.createElement('div')
                col3.className = 'col'
                col3.innerText = '$' + Math.round(new getProductInfo(key).price * currentCart[key] * 100) / 100
                totalPrice +=  new getProductInfo(key).price * currentCart[key]

                rowDiv.append(col1)
                rowDiv.append(col2)
                rowDiv.append(col3)
                cartProducts.append(rowDiv)
            }
        }
        let rowDiv = document.createElement('div')
        rowDiv.className = 'row mb-2s'
    
        let col1 = document.createElement('div')
        col1.className = 'col'
    
        let col2 = document.createElement('div')
        col2.className = 'col'
    
        let col3 = document.createElement('div')
        col3.className = 'col'
        col3.innerText = 'TOTAL $' + Math.round(totalPrice*100)/100

        rowDiv.append(col1)
        rowDiv.append(col2)
        rowDiv.append(col3)
        cartProducts.append(rowDiv)
    }
})

buyModal.addEventListener('show.bs.modal', e => {

    buyQuantityCount = 0
    buyQuantity.innerText = buyQuantityCount
    lastProductSelected = e.relatedTarget.id

    buyTotalPrice = 0

    let title = ''

    let pInfo = new getProductInfo(e.relatedTarget.id)
    
    buyModalTitle.innerText = 'BUYING ' + pInfo.title
    buyPContainer.innerText = 'How many ' + pInfo.title.toLowerCase() + ' would you like to buy?'
    addBuyPrice.innerText = 'Total $0'
})

buyLeftButton.addEventListener('click', e => {
    
    if(buyQuantityCount != 0) {
        buyQuantityCount -=1
        buyQuantity.innerText = buyQuantityCount

        let pInfo = getProductInfo(lastProductSelected)

        buyTotalPrice -= pInfo.price
        buyTotalPrice = Math.round(buyTotalPrice * 100) / 100
        addBuyPrice.innerText = 'Total $' + buyTotalPrice 
    }
})

buyRightButton.addEventListener('click', e => {
    if(buyQuantityCount != 100) {
        buyQuantityCount +=1
        buyQuantity.innerText = buyQuantityCount

        let pInfo = getProductInfo(lastProductSelected)

        buyTotalPrice += pInfo.price
        buyTotalPrice = Math.round(buyTotalPrice * 100) / 100
        addBuyPrice.innerText = 'Total $' + buyTotalPrice 
    }
        
})

addCartBtn.addEventListener('click', e => {
    switch(lastProductSelected) {
        case 'donut': 
            cart.donut += buyQuantityCount
        break;
        case 'coco': 
            cart.coco += buyQuantityCount
        break;
        case 'carrot': 
            cart.carrot += buyQuantityCount
        break;
        case 'cocoa':
            cart.cocoa += buyQuantityCount
        break;
        case 'coffee': 
            cart.coffee += buyQuantityCount
        break;
        case 'churros': 
            cart.churros += buyQuantityCount
        break;
    }

    localStorage.setItem('cart', JSON.stringify(cart))

    Toastify({
        text: "Added to cart",
        gravity: "bottom",
        style: {
            background: "rgb(156, 156, 156)",
        }
    }).showToast()
})

