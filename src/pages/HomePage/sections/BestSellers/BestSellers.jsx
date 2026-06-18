import "./BestSellers.css"
import { Link } from "react-router"
import { useEffect } from "react"

import { getDresses } from "../../../../BLL/api/requests/womenDresses"
import { useQuery } from "@tanstack/react-query"

import TitleHome from "../../../../shared/ui/titleHome/titleHome"
import ClothesCard from "../../../../shared/ui/clothesCards/clothesCard"
import { useCardMeta } from "../../../../shared/context/CardMetaContext"

const BestSellers = () => {
    const { initCardMeta, getCardMeta } = useCardMeta()

    const { data, isLoading, isError, error, isFetching } = useQuery({
        queryKey: ["womenDress"],
        queryFn: getDresses
    })

    useEffect(() => {
        if (data?.products) {
            initCardMeta(data.products.slice(0, 3))
        }
    }, [data])

    if (isLoading) {
        return <h1 className="response__loading">Loading...</h1>
    }

    return (
        <section className="best-sellers">
            <div className="best-sellers__title">
                <TitleHome title={"Best Sellers"} />
                <p className="best-sellers__view">
                    <Link to={"/new-in"} className="best__sellers__view-link">View All</Link>
                </p>
            </div>

            <div className="best-sellers__cards">
                {data?.products?.slice(0, 3).map((product) => {
                    const meta = getCardMeta(product.id)
                    return (
                        <ClothesCard
                            key={product.id}
                            product={product}
                            colors={meta?.colors}
                            fallbackImage={meta?.fallbackImage}
                        />
                    )
                })}
            </div>

            {isFetching && <h1 className="response__loading">Updating...</h1>}
            {isError && <h1 className="response__error">{error?.message}</h1>}
        </section>
    )
}

export default BestSellers