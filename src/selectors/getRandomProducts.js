import { data } from '../data/data.js'


export const getRandomProducts = () => {
    let products = []
    let showedIndexs = []

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    for (let i = 0; i < 9; i++) {

        let pass = true

        while (pass) {
            let index = getRandomInt(data.length)
            if (!showedIndexs.includes(index)) {
                products.push(data[index])
                showedIndexs.push(index)
                pass = false
            }
        }

    }

    return products
}