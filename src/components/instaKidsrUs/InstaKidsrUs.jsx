

import React from 'react'




const InstaKidsrUs = () => {

    const arrayOfImages = [
        'src/assets/main/87339849_530805007551424_292323017375800029_nlow.jpg',
        'src/assets/main/87413583_2660130777540405_5722961474466513534_nlow.jpg',
        'src/assets/main/85069033_185901059177965_6767010623440980864_nlow.jpg',
        'src/assets/main/84981049_620107085435507_4260875787090681190_nlow.jpg',
        'src/assets/main/85051426_2060664737412512_8458893884651247910_nlow.jpg'
    ]


    return (
        <section className='container'>

            <div className="instaKidsrUs">
                <h2 className="navigation_button_active">Instagram @Kidsrus</h2>

                <div className='instagram_images_container'>
                    {arrayOfImages.map((element, index) => {
                        return (
                            <img className='instagram_image' src={element} alt={element} key={index} />
                        )
                    })}
                </div>


            </div>
        </section>
    )
}

export default InstaKidsrUs
