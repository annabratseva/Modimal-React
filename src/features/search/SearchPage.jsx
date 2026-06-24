import { useState, useEffect } from "react"
import { useSearchParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import "./SearchPage.css"
import { useCardMeta } from "../../shared/context/CardMetaContext"
import ClothesCard from "../../shared/ui/clothesCards/clothesCard"
import { searchProducts } from "../../BLL/api/requests/womenDresses"
import FilterButton from "../../shared/ui/buttons/FilterButton"
import FilterTune from "../../assets/icons/FilterTune.svg"



const SearchPage = () => {

    const [searchParams] = useSearchParams()

    const query = searchParams.get("q") || ""

    const { initCardMeta, getCardMeta } = useCardMeta()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["search", query],
        queryFn: () => searchProducts(query),
        enabled: !!query
    })

    useEffect(() => {
        if (data?.products) {
            initCardMeta(data.products)
        }
    }, [data])

    return (
        <div className="search-p">
            <h1 className="search-p__items-count">{data?.products?.length ?? 0} Items</h1>

            {isLoading && <h1 className="response__loading">Loading...</h1>}
            {isError && <h1 className="response__error">{error?.message}</h1>}

            <div className="search-p__content">
                <div className="search-p__mobile-filter">
                    <img src={FilterTune} alt="TUNE" className="search-p__mobile-icon" />

                    <h1 className="search-p__mobile-title">Filter</h1>
                </div>

                <div className="search-p__filters">
                    <h1 className="search-p__title">Filters</h1>

                    <div className="search-p__buttons">
                        <FilterButton btnText={"Sort By"} />
                        <FilterButton btnText={"Size"} />
                        <FilterButton btnText={"Color"} />
                        <FilterButton btnText={"Collection"} />
                        <FilterButton btnText={"Fabric"} />
                    </div>
                </div>

                <div className="search-p__cards">
                    {data?.products?.map((product) => {
                        const meta = getCardMeta(product.id)
                        return (
                            <ClothesCard
                                key={product.id}
                                product={product}
                                colors={meta?.colors}
                                fallbackImage={product.thumbnail}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchPage