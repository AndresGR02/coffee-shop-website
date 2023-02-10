export function getProductInfo(pName) {

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


