import { useNavigate } from "react-router"
import { getProductsByCategory } from "../../selectors/getProductsByCategory"
import ValoracionStars from "../valoracionStars/ValoracionStars"
import { scrollToTop } from "../../functions/scrollToTop"



const Related_Products = ({ productCategory }) => {

    let products = getProductsByCategory(productCategory).splice(0, 4)

    const navigate = useNavigate()

    const handleSelectProduct = (id) => {
        navigate(`../${id}`);
        scrollToTop();
    }

    return (
        <div className="related_products container">
            <h2 className="navigation_button_active">Related Products</h2>

            <div className="related_products_cards_container">

                {
                    products.map((product, key) => {

                        return (
                            <div
                                className="product_list_Card"
                                key={key}
                                onClick={() => handleSelectProduct(product.Sku)}
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

                                <div className="product_info">
                                    <p className="product_category">{product.categoria}</p>
                                    <p className="product_title">{product.título}</p>
                                    {product.Cantidad_stock != 0 && <p className="product_price">${product.Precio}</p>}
                                    <ValoracionStars numbersOfStars={product.Valoración} className='product_info_valoracionStar' />
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Related_Products
