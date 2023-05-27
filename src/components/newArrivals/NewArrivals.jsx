import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import LeftMenu from './LeftMenu'
import ProductList from '../productList/ProductList'

import { getRandomProducts } from '../../selectors/getRandomProducts'
import { getProductsByCategory } from '../../selectors/getProductsByCategory'

const NewArrivals = () => {

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

export default NewArrivals
