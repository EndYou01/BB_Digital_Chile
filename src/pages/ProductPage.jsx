import { useParams, NavLink, Navigate } from 'react-router-dom'
import { useDispatch } from "react-redux";

import { getProductByID } from '../selectors/getProductById';

import Info_section_container from '../components/productPageComponents/Info_section_container';
import Desc_AddInfo_Rev from '../components/productPageComponents/Desc_AddInfo_Rev';
import Related_Products from '../components/productPageComponents/Related_Products';
import { uiSetCategory } from '../redux/actions/ui';



const ProductPage = () => {

	const dispatch = useDispatch()

	const { productId } = useParams();

	const product = getProductByID(productId)

	if (!product) {
		return <Navigate to='/' />
	}

	return (

		<section className='productPage'>
			<div className='productPage_initSection'>
				<h1>{product.título}</h1>
				<p><b>Home</b> : <b><NavLink to='/home' onClick={(e)=>dispatch(uiSetCategory(e.target.innerHTML))}>{product.categoria}</NavLink></b> : <span>{product.título}</span></p>
			</div>


			<Info_section_container product={product}/>

			<Desc_AddInfo_Rev product={product}/>

			<Related_Products productCategory={product.categoria}/>

		</section>


	)
}

export default ProductPage
