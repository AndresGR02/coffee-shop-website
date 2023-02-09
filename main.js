import './style.css'

const buyModal = document.getElementById('buyModal')
const buyModalBody = document.getElementById('buyModalBody')
const buyModalTitle = document.getElementById('buyModalTitle')

buyModal.addEventListener('show.bs.modal', e => {

    let price = 0
    let title = ''
    switch(e.relatedTarget.id) {
        case 'donut': 
            price = 5.99
            title = 'RETRO DONUTS'
        break;
        case 'coco': 
            price = 3
            title = 'BEACH TIME'
        break;
        case 'carrot': 
            price = 9
            title = 'BUNNYS FAVORITE'
        break;
        case 'cocoa': 
            price = 1
            title = 'HOT COCOA'
        break;
        case 'coffee': 
            price = 2
            title = 'COSTA RICAN COFFEE'
        break;
        case 'churros': 
            price = 6.99
            title = 'CHURROS'
        break;
    }

    buyModalTitle.innerText = 'BUYING ' + title
    buyModalBody.innerText = price
    
})