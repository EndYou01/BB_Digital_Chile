import { useParams, Navigate } from 'react-router-dom'
import { getProductByID } from '../selectors/getProductById';


const ProductPage = () => {

	const {productId} = useParams();

	const product = getProductByID(productId)

	if(!product){
        return <Navigate to='/'/>
    }

	return (
		<div>
			<h1>{product.título}</h1>
		</div>
	)
}

export default ProductPage
