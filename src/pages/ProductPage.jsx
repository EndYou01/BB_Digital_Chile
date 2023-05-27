import { useParams, NavLink } from 'react-router-dom'

import ValoracionStars from '../components/valoracionStars/ValoracionStars';

import { getProductByID } from '../selectors/getProductById';

import { AiOutlineHeart } from "react-icons/ai";


const ProductPage = () => {


	const { productId } = useParams();

	const product = getProductByID(productId)

	if (!product) {
		return <Navigate to='/' />
	}

	let images = Object.values(product.Imágenes_asociadas)

	return (

		<section className='productPage'>
			<div className='productPage_initSection'>
				<h1>{product.título}</h1>
				<p><b>Home</b> : <b><NavLink to='/home'>{product.categoria}</NavLink></b> : <span>{product.título}</span></p>
			</div>


			<div className='container info_section_container'>

				<div className='image_section_container'>
					<img src={product.Imágenes_asociadas[0]} />

					<div className='more_images_section'>
						{images.map((image, index) => {
							return (images.length > 1 && <img src={image} key={index} />)
						})}
					</div>
				</div>

				<div className="info_section">
					<p><b>${product.Precio}.00</b></p>

					<div className='valoracionStars'>
						<ValoracionStars numbersOfStars={product.Valoración} />
					</div>

					<p>{product.Descripción}</p>

					{
						product.Cantidad_stock == 0
							? <p className='add_to_wishlist'><AiOutlineHeart /> <b>Add to Wishlist</b></p>
							: <div className='pp_add_to_cart_section'>
								<div className='pp_add_to_cart'>
									<input type="number" className='pp_add_to_cart_input' placeholder='1' />
									<button className='pp_add_to_cart_button'>Add to cart</button>
								</div>
								<p>The product is alredy in the wishlist!   <b>Browse Wishlist</b></p>
							</div>
					}

					<div className="sku_category_tags">
						<div>
							<p><b>SKU:</b>	<span>{product.Sku}</span></p>
						</div>
						<div>
							<p><b>Category:</b>	<span>{product.categoria}</span></p>
						</div>
						<div>
							<p><b>Tags:</b>	<span>{product.Tags}</span></p>
						</div>
					</div>



				</div>



			</div>

		</section>


	)
}

export default ProductPage
