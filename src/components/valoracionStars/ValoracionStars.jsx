

import { AiFillStar } from "react-icons/ai";

const ValoracionStars = ({ numbersOfStars }) => {

    let filledStars = Array(Math.min(numbersOfStars, 5)).fill(
        <AiFillStar className="star" />
    )

    while (filledStars.length < 5) {
        filledStars.push(
            <AiFillStar className="starDark" />
        )
    }

    return (
        <div className="stars_colection">
            {filledStars.map((start, key) => {
                return (
                    <span key={key}>
                        {start}
                    </span>
                )
            })}
        </div>
    )
}

export default ValoracionStars
