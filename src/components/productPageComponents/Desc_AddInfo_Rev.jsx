import { useState } from "react"
import ValoracionStars from "../valoracionStars/ValoracionStars";

import { Bounce } from "react-awesome-reveal";


const Desc_AddInfo_Rev = ({ product }) => {

    const [activeSection, setActiveSection] = useState('Description');

    return (

        <div className="container desc_addInfo_rev">

            <div className="titles_section">
                <h2 onClick={() => setActiveSection('Description')} className={activeSection == 'Description' ? 'navigation_button_active' : ''}>Description</h2>
                {
                    product.Cantidad_stock != 0 &&
                    <h2 onClick={() => setActiveSection('Additional_Information')} className={activeSection == 'Additional_Information' ? 'navigation_button_active' : ''}>Additional Information</h2>
                }
                <h2 onClick={() => setActiveSection('Reviews')} className={activeSection == 'Reviews' ? 'navigation_button_active' : ''}>Reviews(1)</h2>
            </div>

            <div className="separator">
                {
                    activeSection == 'Description'
                    && <Bounce direction="up" triggerOnce={true}><p className="description">{product.Descripción}</p></Bounce>
                }
                {
                    activeSection == 'Additional_Information'
                    &&
                    <Bounce direction="up" triggerOnce={true}>
                        <div className="additional_information">
                            <div>
                                <p><b>Color:</b>	<span>{product.Información_adicional.color}</span></p>
                            </div>
                            <div>
                                <p><b>Material:</b>	<span>{product.Información_adicional.material}</span></p>
                            </div>
                            <div>
                                <p><b>Age:</b>	<span>{product.Información_adicional.age}</span></p>
                            </div>
                        </div>
                    </Bounce>
                }
                {
                    activeSection == 'Reviews'
                    &&

                    <Bounce direction="up" triggerOnce={true}>
                        <div className="reviews_section">
                            <p>1 review for {product.título}</p>

                            <div className="dashed_cell reviews separator">
                                <div>
                                    <img src="src\assets\main\bb_logo.png" alt="" />
                                </div>
                                <div className="reviews_info">
                                    <p>cmsmasters       <span><b>December 5, 2018</b></span></p>
                                    <ValoracionStars numbersOfStars={product.Valoración} />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque temporibus veniam dolor? Tenetur quaerat distinctio a, iure voluptates est reiciendis illo ratione cupiditate iste labore voluptatum autem dolor in.</p>

                                    <p>Rated {product.Valoración} of 5</p>
                                </div>
                            </div>

                            <h3 className="center_gray">Add a review</h3>
                            <div className="dashed_cell">

                                <p className="center_gray">Your email address will not be published. Required fields are marked *</p>

                                <div className="separate">
                                    <p><b>Your Rating *</b></p>

                                    <ValoracionStars numbersOfStars={0} />
                                </div>

                                <input type="text" className="dashed_cell your_review" placeholder="Your Review" />

                                <div className="name_email_subtmi_section separator">
                                    <div className="name_email">
                                        <div>
                                            <p><b>Name*</b></p>
                                            <input type="text" id="name" />
                                        </div>
                                        <div>
                                            <p><b>Email*</b></p>
                                            <input type="text" id="email" />
                                        </div>
                                    </div>

                                    <button>Submit</button>
                                </div>

                            </div>
                        </div>
                    </Bounce>

                }
            </div>


        </div>
    )
}

export default Desc_AddInfo_Rev
