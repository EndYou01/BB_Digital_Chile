import { useNavigate } from "react-router-dom"

import { AiOutlineHeart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { scrollToTop } from "../../functions/scrollToTop";

const ProductList = ({ products }) => {

    const navigate = useNavigate()


    const handleSelectProduct = (id) => {
        navigate(`../${id}`);
        scrollToTop();
    }

    return (
        <div className="product_list_Container">
            {products.map((product, key) => {
                return (
                    <div 
                        className="product_list_Card" 
                        key={key}
                        onClick={()=> handleSelectProduct(product.Sku)}
                        >
                        {product.Cantidad_stock == 0 && <p className="out_of_stock">Out Of Stock</p>}

                        <div
                            onMouseEnter={() => {
                                if (product.Imágenes_asociadas[1] != undefined) {
                                    document.getElementById(`${key}`).style.backgroundImage = `url(\"${product.Imágenes_asociadas[1]}\")`;
                                }
                            }}
                            onMouseLeave={() => {
                                document.getElementById(`${key}`).style.backgroundImage = `url(\"${product.Imágenes_asociadas[0]}\")`;
                            }}
                            style={{ backgroundImage: `url(\"${product.Imágenes_asociadas[0]}\")` }}
                            className="product_image"
                            id={(key + '')}
                        ></div>



                        <div className="add_to_cart">
                            <AiOutlineHeart />
                            {product.Cantidad_stock != 0 && <p>ADD TO CART</p>}
                            {product.Cantidad_stock != 0 && <FiSearch />}
                        </div>


                        <div className="product_info">
                            <p className="product_category">{product.categoria}</p>
                            <p className="product_title">{product.título}</p>
                            {product.Cantidad_stock != 0 && <p className="product_price">${product.Precio}</p>}
                        </div>
                    </div>
                )

            })}


        </div>
    )
}

export default ProductList
