

import React from 'react'
import LeftMenu from './LeftMenu'
import ProductList from '../productList/ProductList'
import { data } from '../../../data/data'


const NewArrivals = () => {

    let products = []

    data.map( (e,i) => {
        if(i<9){
            [products.push(e)]
        }            
    })


    return (
        <section className='container'>
            <div className='newArrivals'>
                <h2 className='navigation_button_active'>NEW ARRIVALS</h2>


                <div className='newArrivls_section_container'>

                    <LeftMenu/>

                    {/* ------------------------------------- */}

                    <ProductList products={products}/>


                </div>


            </div>
        </section>
    )
}

export default NewArrivals
