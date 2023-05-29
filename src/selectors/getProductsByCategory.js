import { data } from "../../data/data.js";


export const getProductsByCategory = (category) => {

    const validCategory = ['For Babies', 'For Boys', 'For Girls', 'For Home', 'For Play'];

    if (!validCategory.includes(category)) {
        throw new Error(`Category "${category}" no es correcto`)
    }

    return data.filter(prod => prod.categoria === category)
}