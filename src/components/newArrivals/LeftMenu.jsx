

import { useDispatch } from "react-redux";

import { FiSearch } from "react-icons/fi";
import { uiSetCategory } from "../../redux/actions/ui";
import { getProductsByCategory } from "../../selectors/getProductsByCategory.js";

import {ValoracionStars} from '../valoracionStars/ValoracionStars.jsx';

export const LeftMenu = () => {

    const dispatch = useDispatch()

    function number_of_products_per_category(category) {
        return getProductsByCategory(category).length
    }

    const categories = ['For Babies', 'For Boys', 'For Girls', 'For Home', 'For Play']

    const best_sellers = [
        {
            image: 'assets/main/for-home-15-300x300.jpg',
            title: 'Rabbit Casket',
            stars: 5,
            price: 17
        },
        {
            image: 'assets/main/girls-6-300x300.jpg',
            title: 'Yellow Sweatshirt',
            stars: 4,
            price: 38
        },
        {
            image: 'assets/main/boys-3-1-300x300.jpg',
            title: 'Line Sweater',
            stars: 4,
            price: 46
        },
        {
            image: 'assets/main/boys-4-300x300.jpg',
            title: 'Grey Sweat',
            stars: 5,
            price: 80
        }
    ]

    return (
        <div className="left_menu">
            <div className="search_products">
                <input className='search_products_input' type="text" placeholder='Search products...' />
                <button className='search_products_button'><FiSearch className='search_products_button_icon' /></button>
            </div>

            <div className="categories">
                <h2>categories</h2>

                <div className="categories_container">
                    <ul>
                        {
                            categories.map((category, key) => {
                                return (
                                    <li key={key}>
                                        <button
                                            onClick={() => dispatch(uiSetCategory(category))}
                                            className='categories_button'>{category}</button>
                                        <p className='cantidad_productos'>({number_of_products_per_category(category)})</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className="best_sellers">
                <h2>Best Sellers</h2>

                <ul className="best_sellers_container">
                    {
                        best_sellers.map((product, key) => {
                            return (
                                <li key={key}>
                                    <img src={product.image} alt="best_seller_product" />
                                    <div className="best_sellers_info">
                                        <p>{product.title}</p>
                                        <ValoracionStars numbersOfStars={product.stars} />
                                        <p className="product_price">${product.price}.00</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>

            <div className="join_our_newsletter">
                <h3>Join Our <br /> Newsletter</h3>
                <input className='join_our_newsletter_input' type="text" placeholder='Your Email Address*' />
                <button className='join_our_newsletter_button'>Suscribe</button>
            </div>
        </div>
    )
}
