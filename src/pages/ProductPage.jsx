import { useParams, NavLink, Navigate } from 'react-router-dom'

import { getProductByID } from '../selectors/getProductById';

import Info_section_container from '../components/productPageComponents/Info_section_container';
import Desc_AddInfo_Rev from '../components/productPageComponents/Desc_AddInfo_Rev';



const ProductPage = () => {


	const { productId } = useParams();

	const product = getProductByID(productId)

	if (!product) {
		return <Navigate to='/' />
	}

	return (

		<section className='productPage'>
			<div className='productPage_initSection'>
				<h1>{product.título}</h1>
				<p><b>Home</b> : <b><NavLink to='/home'>{product.categoria}</NavLink></b> : <span>{product.título}</span></p>
			</div>


			<Info_section_container product={product}/>

			<Desc_AddInfo_Rev product={product}/>

		</section>


	)
}

export default ProductPage
