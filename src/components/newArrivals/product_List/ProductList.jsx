

import {ProductList_Card} from "./ProductList_Card.jsx";

export const ProductList = ({ products }) => {

    return (
        <div className="product_list_Container">

            <ProductList_Card products={products} add_to_cart={true} valoracionStars={false}/>

        </div>
    )
}

