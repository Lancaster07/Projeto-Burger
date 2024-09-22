const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')


function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price.toFixed(2)}</p>
        </li>        
`
    })

    list.innerHTML = myLi

}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,

    }))

    showAll(newPrices)

}

function sumAllItems() {
    const totalValues = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
        <li>
            <p> A Soma total dos produtos é no valor de R$ ${totalValues.toFixed(2)}</p>
        </li>        
    `
}

function filterAllItems(){
    const filtJustVegans = menuOptions.filter( (product) => product.vegan)

    showAll(filtJustVegans)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonSumAll.addEventListener('click', sumAllItems)
buttonFilterAll.addEventListener('click', filterAllItems)