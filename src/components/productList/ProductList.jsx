


const ProductList = ({ products }) => {

    return (
        <div className="product_list_Container">
            {products.map((product, key) => {

                return (
                    <div className="product_list_Card" key={key}>
                        {product.Cantidad_stock == 0 && <p className="out_of_stock">Out Of Stock</p>}
                        <img src={product.Imágenes_asociadas[0]} alt="product image" />
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
