import WhiteButton from "../../shared/ui/buttons/WhiteButton"
import "./HomePage.css"
import { Link } from "react-router"
import FollowBanner from "./sections/FollowUs/FollowUs"
import SustainBanner from "./sections/BannerStability/Banner"
import Collections from "./sections/Collections/Collections"
import ModiWeek from "./sections/ModiWeek/ModiWeek"
import BestSellers from "./sections/BestSellers/BestSellers"




const HomePage = () => {
    return (
        <>
            <section className="hero-block">
                <div className="hero-block__container">
                    <h1 className="hero-block__title">
                        Elegance in simplicity, <br /> Earth’s harmony
                    </h1>

                    <WhiteButton linktext={"/new-in"} text={"New In"} className2={"mobile-button"}/>
                </div>
            </section>

            <BestSellers />

            <Collections />

            <ModiWeek />

            <SustainBanner />

            <FollowBanner />

            
        </>
    )
}

export default HomePage