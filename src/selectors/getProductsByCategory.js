import { data } from "../data/data.js";


export const getProductsByCategory = (cat) => {

    const validCategory = ['For Babies', 'For Boys', 'For Girls', 'For Home', 'For Play'];

    if (!validCategory.includes(cat)) {
        throw new Error(`Category "${cat}" no es correcto`)
    }

    return data.filter(prod => prod.category === cat)
}