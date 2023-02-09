import './style.css'

const buyModal = document.getElementById('buyModal')
const buyModalBody = document.getElementById('buyModalBody')
const buyModalTitle = document.getElementById('buyModalTitle')
const buyPContainer = document.getElementById('buyPContainer')
const buyRightButton = document.getElementById('buyRightButton')
const buyLeftButton = document.getElementById('buyLeftButton')
const buyQuantity = document.getElementById('buyQuantity')
const addCartBtn = document.getElementById('addCartBtn')
const addBuyPrice = document.getElementById('buyPrice')

let buyQuantityCount = 0
let buyTotalPrice = 0
let lastProductSelected = ''

buyModal.addEventListener('show.bs.modal', e => {

    buyQuantityCount = 0
    buyQuantity.innerText = buyQuantityCount
    lastProductSelected = e.relatedTarget.id

    buyTotalPrice = 0

    let title = ''

    let pInfo = getProductInfo(e.relatedTarget.id)
    
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
    console.log('g')
})

function getProductInfo(pName) {

    let pInfo 

    switch(pName) {
        case 'donut': 
            pInfo = {
                price: 5.99,
                title: 'RETRO DONUTS',
            }
        break;
        case 'coco': 
            pInfo = {
                price: 3,
                title: 'BEACH TIME',
            }
        break;
        case 'carrot': 
            pInfo = {
                price: 9,
                title: 'BUNNYS FAVORITE',
            }
        break;
        case 'cocoa':
            pInfo = {
                price: 1,
                title: 'HOT COCOA',
            }

        break;
        case 'coffee': 
            pInfo = {
                price: 2,
                title: 'COSTA RICAN COFFEE',
            }
        break;
        case 'churros': 
            pInfo = {
                price: 6.99,
                title: 'CHURROS',
            }
        break;
    }

    return pInfo
}