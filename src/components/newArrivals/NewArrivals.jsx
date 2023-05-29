import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import {LeftMenu} from './LeftMenu.jsx'
import {ProductList} from './product_List/ProductList.jsx'

import { getRandomProducts } from '../../selectors/getRandomProducts.js'
import { getProductsByCategory } from '../../selectors/getProductsByCategory.js'

export const NewArrivals = () => {

    const [products, setProducts] = useState([]);
    const { category } = useSelector(state => state.ui)

    useEffect(() => {
        setProducts(getRandomProducts())
    }, []);


    useEffect(() => {
        if (category != '') {
            setProducts(getProductsByCategory(category))
        }
    }, [category]);

    return (
        <section className='container'>
            <div className='newArrivals'>
                <h2 className='navigation_button_active'>NEW ARRIVALS</h2>

                <div className='newArrivls_section_container'>

                    <LeftMenu />

                    {/* ------------------------------------- */}

                    <ProductList products={products} />

                </div>
            </div>
        </section>
    )
}
