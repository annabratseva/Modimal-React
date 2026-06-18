import { useDispatch, useSelector } from "react-redux"
import "./FavoritePage.css"
import { getOneDress } from "../../BLL/api/requests/womenDresses"
import { useQuery } from "@tanstack/react-query"
import FavoriteCards from "../../shared/ui/favoriteCards/favoriteCards"

const FavoritePage = () => {
    const favorites = useSelector((state) => state.favorite.favorite)

    return (
        <div className="wish-list">
            <h1 className="wish-list__title">My Wish List</h1>
            <p className="wish-list__items">{favorites.length} items</p>

            <div className="wish-list__content">
                {favorites.map((product) => (
                    <FavoriteCards
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                        colors={product.colors}
                    />
                ))}
            </div>
        </div>
    )
}

export default FavoritePage