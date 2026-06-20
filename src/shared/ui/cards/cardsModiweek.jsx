import { LikeIconModiWeek } from "../../../assets/svg-icons-code/svgCode"
import "./cardsModiweek.css"

const CardsModiweek = ({image, cardTitle}) => {
    return (
        <div className="card__container">
            <div className="card__inner-container">
                <img src={image} alt="CARD IMAGE" className="card__img2" />
            </div>

            <h1 className="card__title">{cardTitle}</h1>
        </div>
    )
}

export default CardsModiweek