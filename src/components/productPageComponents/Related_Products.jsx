
import {ProductList_Card} from "../newArrivals/product_List/ProductList_Card.jsx"

import { getProductsByCategory } from "../../selectors/getProductsByCategory.js"

export const Related_Products = ({ productCategory }) => {

    let products = getProductsByCategory(productCategory).splice(0, 4)

    return (
        <div className="related_products container">
            <h2 className="navigation_button_active">Related Products</h2>

            <div className="related_products_cards_container">

                <ProductList_Card products={products} add_to_cart={false} valoracionStars={true}/>

            </div>

        </div>
    )
}
