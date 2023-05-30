

import { useDispatch } from 'react-redux'

import { uiSetCategory } from '../../redux/actions/ui.js'

export const InitialSection = () => {

    const dispatch = useDispatch()

    const category_items = [
        {
            image: 'assets/main/baby.png',
            category: 'For Babies',
            text: 'Baby & Toddler'
        },
        {
            image: 'assets/main/girl.png',
            category: 'For Girls',
            text: 'For Girls'
        },
        {
            image: 'assets/main/boy.png',
            category: 'For Boys',
            text: 'For Boys'
        },
        {
            image: 'assets/main/toys.png',
            category: 'For Home',
            text: 'Home & Toys'
        }
    ]

    return (
        <section className='container'>

            <div className='initialSection'>

                <div className='top_section'>
                    <div className="jumpsuit_image">
                        <img src="assets/main/slider-1.jpg" alt="jumpsuit_image" />
                        <div>
                            <h1>Jumpsuits</h1>
                            <p>Confortable clothes for your litle baby</p>
                            <button className='dashed-btn dashed-btn-secundary'>Discover</button>
                        </div>
                    </div>

                    <div className="girlPower_section">
                        <img src="assets/main/girls-power.jpg" alt="girl power image" />
                        <h2>Gilr Power</h2>
                        <p>For a colorfull summer</p>
                    </div>
                </div>

                <div className='category_section'>
                    <ul className='dashed-cell dashed-cell-pd40'>
                        {
                            category_items.map((category_element, key) => {
                                return (
                                    <li className='category_item' key={key}>
                                        <img src={category_element.image} />
                                        <button
                                            onClick={() => dispatch(uiSetCategory(category_element.category))}
                                            className='category_name'
                                        >
                                            {category_element.text}
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

