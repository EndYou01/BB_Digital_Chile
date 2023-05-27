

import React from 'react'
import { useDispatch } from 'react-redux'
import { uiSetCategory } from '../../redux/actions/ui'

const InitialSection = () => {

    const dispatch = useDispatch()

    return (
        <section className='container'>

            <div className='initialSection'>

                <div className='top_section'>
                    <div className="jumpsuit_image">
                        <img src="src\assets\main\slider-1.jpg" alt="jumpsuit_image" />
                        <div>
                            <h1>Jumpsuits</h1>
                            <p>Confortable clothes for your litle baby</p>
                            <button className='discover_button'>Discover</button>
                        </div>
                    </div>

                    <div className="girlPower_section">
                        <img src="src\assets\main\girls-power.jpg" alt="girl power image" />
                        <h2>Gilr Power</h2>
                        <p>For a colorfull summer</p>
                    </div>
                </div>


                <div className='category_section'>
                    <ul>
                        <li className='category_item'>
                            <img src="src\assets\main\baby.png" />
                            <button
                                onClick={() => dispatch(uiSetCategory('For Babies'))}
                                className='category_name'>
                                Baby & Toddler</button>
                        </li>
                        <li className='category_item'>
                            <img src="src\assets\main\girl.png" />
                            <button
                                onClick={() => dispatch(uiSetCategory('For Girls'))}
                                className='category_name'>
                                For Girls</button>
                        </li>
                        <li className='category_item'>
                            <img src="src\assets\main\boy.png" />
                            <button
                                onClick={() => dispatch(uiSetCategory('For Boys'))}
                                className='category_name'>
                                For Boys</button>
                        </li>
                        <li className='category_item'>
                            <img src="src\assets\main\toys.png" />
                            <button
                                onClick={() => dispatch(uiSetCategory('For Home'))}
                                className='category_name'>
                                Home & Toys</button>
                        </li>
                    </ul>

                </div>

            </div>

        </section>
    )
}

export default InitialSection
