import "./BestSellers.css"
import { Link } from "react-router"

import { getDresses } from "../../../../BLL/api/requests/womenDresses"
import { useQuery } from "@tanstack/react-query"
import { getDressThunk } from "../../../../BLL/api/thunk/getDresses"

import TitleHome from "../../../../shared/ui/titleHome/titleHome"
import ClothesCard from "../../../../shared/ui/clothesCards/clothesCard"

const BestSellers = () => {

    const {data, isLoading, isError, error, isFetching} = useQuery({
        queryKey: ["womenDress"],
        queryFn: getDresses
    })

    if (isLoading){
        return (
        <h1 className="response__loading">Loading...</h1>
        )
    }

    const colorSets = [
        ["#000", "#7dc3eb", "#748C70"],
        ["#909225", "#19418e", "#000"],
        ["#d0a5ea", "#909225", "#748C70"]
    ];

    const fallbackImages = [
        "/images/imageCloth1.png",
        "/images/imageCloth2.png",
        "/images/imageCloth3.png",
    ];


    return (
        <section className="best-sellers">
            <div className="best-sellers__title">
                <TitleHome title={"Best Sellers"}/>

                <p className="best-sellers__view">
                    <Link to={"/new-in"} className="best__sellers__view-link">View All</Link>
                </p>
            </div>

            <div className="best-sellers__cards">
                {data?.products?.slice(0, 3).map((product, index) => (
                    <ClothesCard
                        key={product.id}
                        product={product}
                        colors={colorSets[index]}
                        fallbackImage={fallbackImages[index]}
                    />
                ))}
                
            </div>

            {isFetching && <h1 className="response__loading">Updating...</h1>}

            {isError && <h1 className="response__error">{error?.message}</h1>}
        </section>
    )
}

export default BestSellers