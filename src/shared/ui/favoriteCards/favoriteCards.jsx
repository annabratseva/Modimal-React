import { removeFromFavorite } from "../../../BLL/reducers/FavoriteReducer";
import "../clothesCards/clothesCard.css"
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { FavoriteIcon } from "../../../assets/svg-icons-code/svgCode"
import { FavoriteClicked } from "../../../assets/svg-icons-code/svgCode";


const FavoriteCards = ({ id, title, description, price, image, colors }) => {
    
    const dispatch = useDispatch()

    return (
        <div className="card">
            <div className="card__image">
                <img
                    src={image}
                    alt={title}
                    className="card__img"
                />
                <button
                    className="card__button"
                    onClick={() => dispatch(removeFromFavorite(id))}
                >
                    <FavoriteClicked className="card__icon" />
                </button>
            </div>

            <div className="card__text">
                <h1 className="card__title">{title}</h1>
                <div className="card__inner-text">
                    <p className="card__subtitle">{description?.slice(0, 30)}</p>
                    <p className="card__price">${price}</p>
                </div>

                <div className="card__round">
                    {colors?.map(color => (
                        <span
                            key={color}
                            style={{
                                backgroundColor: color,
                                width: "24px",
                                height: "24px",
                                borderRadius: "24px",
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FavoriteCards