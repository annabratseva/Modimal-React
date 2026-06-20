import { useDispatch, useSelector } from "react-redux"
import { FavoriteIcon } from "../../../assets/svg-icons-code/svgCode"
import "./clothesCard.css"
import { addToFavorite, removeFromFavorite } from "../../../BLL/reducers/FavoriteReducer"
import { FavoriteClicked } from "../../../assets/svg-icons-code/svgCode"
import { useState } from "react"

const ClothesCard = ({ product, colors, fallbackImage }) => {
    const dispatch = useDispatch()
    const isFavorite = useSelector(state =>
        state.favorite.favorite.some(p => p.id === product.id)
    )

    const handleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFromFavorite(product.id))
        } else {
            dispatch(addToFavorite({
                ...product,
                image: fallbackImage,
                colors: colors
            }))
        }
    }

    return (
        <div className="card">
            <div className="card__image">
                <img src={fallbackImage} alt={product.title} className="card__img" />
                <button className="card__button" onClick={handleFavorite}>
                    {isFavorite
                        ? <FavoriteClicked className="card__icon" />
                        : <FavoriteIcon className="card__icon" />
                    }
                </button>
            </div>

            <div className="card__text">
                <h1 className="card__title">{product.title}</h1>
                <div className="card__inner-text">
                    <p className="card__subtitle">{product.description?.slice(0, 30)}</p>
                    <p className="card__price">${product.price}</p>
                </div>

                <div className="card__round">
                    {colors?.map(color => (
                        <span
                            key={color}
                            style={{
                                backgroundColor: color
                            }}
                            className="card__round-style"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ClothesCard