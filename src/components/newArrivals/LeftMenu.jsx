

import { useDispatch } from "react-redux";

import ValoracionStars from '../valoracionStars/ValoracionStars.jsx';

import { FiSearch } from "react-icons/fi";
import { uiSetCategory } from "../../redux/actions/ui";

const LeftMenu = () => {

    const dispatch = useDispatch()

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
                        <li>
                            <button 
                                onClick={() => dispatch(uiSetCategory('For Babies'))}
                                className='categories_button'>For Babies</button>
                            <p className='cantidad_productos'>(11)</p>
                        </li>
                        <li>
                            <button 
                                onClick={() => dispatch(uiSetCategory('For Boys'))}
                                className='categories_button'>For Boys</button>
                            <p className='cantidad_productos'>(19)</p>
                        </li>
                        <li>
                            <button 
                                onClick={() => dispatch(uiSetCategory('For Girls'))}
                                className='categories_button'>For Girls</button>
                            <p className='cantidad_productos'>(14)</p>
                        </li>
                        <li>
                            <button 
                                onClick={() => dispatch(uiSetCategory('For Home'))}
                                className='categories_button'>For Home</button>
                            <p className='cantidad_productos'>(20)</p>
                        </li>
                        <li>
                            <button 
                                onClick={() => dispatch(uiSetCategory('For Play'))}
                                className='categories_button'>For Play</button>
                            <p className='cantidad_productos'>(8)</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="best_sellers">
                <h2>Best Sellers</h2>

                <ul className="best_sellers_container">
                    <li>
                        <img src="src\assets\main\for-home-15-300x300.jpg" alt="" />
                        <div className="best_sellers_info">
                            <p>Rabbit Casket</p>
                            <ValoracionStars numbersOfStars={5} />
                            <p className="product_price">$17.00</p>
                        </div>
                    </li>
                    <li>
                        <img src="src\assets\main\girls-6-300x300.jpg" alt="" />
                        <div className="best_sellers_info">
                            <p>Yellow Sweatshirt</p>
                            <ValoracionStars numbersOfStars={4} />
                            <p className="product_price">$38.00</p>
                        </div>
                    </li>
                    <li>
                        <img src="src\assets\main\boys-3-1-300x300.jpg" alt="" />
                        <div className="best_sellers_info">
                            <p>Line Sweater</p>
                            <ValoracionStars numbersOfStars={4} />
                            <p className="product_price">$46.00</p>
                        </div>
                    </li>
                    <li>
                        <img src="src\assets\main\boys-4-300x300.jpg" alt="" />
                        <div className="best_sellers_info">
                            <p>Grey Sweat</p>
                            <ValoracionStars numbersOfStars={4} />
                            <p className="product_price">$80.00</p>
                        </div>
                    </li>
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

export default LeftMenu
