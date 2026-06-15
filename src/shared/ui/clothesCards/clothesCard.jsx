import { FavoriteIcon } from "../../../assets/svg-icons-code/svgCode"
import "./clothesCard.css"



const ClothesCard = ({ product, colors, fallbackImage }) => {
    return (
        <div className="card">
            <div className="card__image">
                <img
                    src={product.image || fallbackImage}
                    alt={product.title}
                    className="card__img"
                    onError={(e) => {
                        e.target.src = fallbackImage;
                    }}
                />
                <button className="card__button"><FavoriteIcon className={"card__icon"}/></button>
                
            </div>

            <div className="card__text">
                <h1 className="card__title">{product.title}</h1>
                <div className="card__inner-text">
                    <p className="card__subtitle">{product.description.slice(0, 30)}</p>
                    <p className="card__price">${product.price}</p>
                </div>

                <div className="card__round">
                    {colors.map(color => (
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

export default ClothesCard