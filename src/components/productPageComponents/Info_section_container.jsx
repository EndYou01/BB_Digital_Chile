
import { useEffect, useState } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import ReactImageMagnify from 'react-image-magnify';

import { ValoracionStars } from '../valoracionStars/ValoracionStars.jsx';


export const Info_section_container = ({ product }) => {

    let images = Object.values(product.associated_images)

    const [activeImage, setActiveImage] = useState();
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        setActiveImage(images[0])
    }, [product]);


    return (
        <div className='container info_section_container'>

            <div className='image_section_container'>
                {
                    activeImage
                    &&
                    <div id="imageMagnifyer">
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: activeImage,
                            },
                            largeImage: {
                                src: activeImage,
                                width: 1200,
                                height: 1800,
                                className: 'large_image_container'
                            }
                        }} />
                        {
                            isLoading
                            &&
                            <div className="loading">
                                <p className="loading_text">
                                    Loading...
                                </p>
                            </div>
                        }
                    </div>
                }
                <div className='more_images_section'>
                    {images.map((image, index) => {
                        return (images.length > 1 && <img src={image} key={index} onClick={() => {

                            setTimeout(() => {
                                setIsLoading(false)
                                setActiveImage(images[index])
                            }, 1000);

                            setIsLoading(true)
                        }} />)
                    })}
                </div>
            </div>


            <div className="info_section separator">
                <p><b>${product.price}.00</b></p>

                <div className='separator'>
                    <ValoracionStars numbersOfStars={product.valoration} />
                </div>

                <p>{product.stock_quantity}</p>

                {
                    product.Cantidad_stock == 0
                        ? <p className='add_to_wishlist separator'><AiOutlineHeart />  <b>Add to Wishlist</b></p>
                        : <div className='pp_add_to_cart_section separator'>
                            <div className='pp_add_to_cart'>
                                <input type="number" className='pp_add_to_cart_input dashed-cell dashed-cell-pd20' placeholder='1' />
                                <button className='dashed-btn dashed-btn-primary'>Add to cart</button>
                            </div>
                            <p>The product is alredy in the wishlist!   <b>Browse Wishlist</b></p>
                        </div>
                }

                <div className="sku_category_tags dashed-cell dashed-cell-pd20 separator">
                    <div>
                        <p><b>SKU:</b>	<span>{product.Sku}</span></p>
                    </div>
                    <div>
                        <p><b>Category:</b>	<span>{product.category}</span></p>
                    </div>
                    <div>
                        <p><b>Tags:</b>	<span>{product.tags}</span></p>
                    </div>
                </div>

            </div>

        </div>
    )
}
