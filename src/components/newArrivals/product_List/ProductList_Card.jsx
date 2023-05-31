
import { useNavigate } from "react-router"

import { AiOutlineHeart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

import { scrollToTop } from "../../../functions/scrollToTop.js";

import {ValoracionStars} from "../../valoracionStars/ValoracionStars.jsx";

export const ProductList_Card = ({ products, add_to_cart, valoracionStars }) => {


    const navigate = useNavigate()


    const handleSelectProduct = (id) => {
        navigate(`../${id}`);
        scrollToTop();
    }

    return (
        <>
            {products.map((product, key) => {
                return (
                    <div
                        className="product_list_Card animate__animated animate__bounce"
                        key={key}
                        onClick={() => handleSelectProduct(product.Sku)}
                    >
                        {product.stock_quantity == 0 && <p className="out_of_stock">Out Of Stock</p>}

                        <div
                            onMouseEnter={() => {
                                if (product.associated_images[1] != undefined) {
                                    document.getElementById(`${key}`).style.backgroundImage = `url(\"${product.associated_images[1]}\")`;
                                }
                            }}
                            onMouseLeave={() => {
                                document.getElementById(`${key}`).style.backgroundImage = `url(\"${product.associated_images[0]}\")`;
                            }}
                            style={{ backgroundImage: `url(\"${product.associated_images[0]}\")` }}
                            className="product_image"
                            id={(key + '')}
                        ></div>

                        {
                            add_to_cart
                            &&
                            <div className="add_to_cart">
                                <AiOutlineHeart />
                                {product.stock_quantity != 0 && <p>ADD TO CART</p>}
                                {product.stock_quantity != 0 && <FiSearch />}
                            </div>
                        }

                        <div className="product_info">
                            <p className="product_category">{product.category}</p>
                            <p className="product_title">{product.title}</p>
                            {product.stock_quantity != 0 && <p className="product_price">${product.price}</p>}
                            {
                                valoracionStars
                                &&
                                <ValoracionStars numbersOfStars={product.valoration} className='product_info_valoracionStar' />
                            }
                        </div>
                    </div>
                )

            })}
        </>

    )
}
