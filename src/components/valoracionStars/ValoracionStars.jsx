

import { AiFillStar } from "react-icons/ai";

const ValoracionStars = ({ numbersOfStars }) => {

    let result = []

    let i = 0

    while (i < numbersOfStars && result.length < 5) {
        result.push(<AiFillStar className="star" />)
        i++
    }

    while (result.length < 5) {
        result.push(<AiFillStar className="starDark" />)
    }

    return (
        <div className="stars_colection">
            {result.map((start, index) => {
                return (
                    <span key={index}>
                        {start}
                    </span>
                )
            })}
        </div>
    )
}

export default ValoracionStars
