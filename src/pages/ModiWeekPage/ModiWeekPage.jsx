import "./ModiWeekPage.css"
import "../HomePage/sections/ModiWeek/ModiWeek.css"
import LinkTitles from "../../shared/ui/linkTitles/linkTitles"
import TitleHome from "../../shared/ui/titleHome/titleHome"
import CardsModiweek from "../../shared/ui/cards/cardsModiweek"

import Modiweek1 from "../../assets/images/modiweek1.png"
import Modiweek2 from "../../assets/images/modiweek2.png"
import Modiweek3 from "../../assets/images/modiweek3.png"
import Modiweek4 from "../../assets/images/modiweek4.png"

import ModiweekMain from "../../assets/images/modiweekMenu1.jpg"

const ModiWeekPage = () => {

    

    return (
        <section className="modiweek-page">
            <LinkTitles textFirst={"modiweek"} textSecond={"none"} className={"none"} className2={"invisible-text"} />

            <div className="modiweek-page__title">
                <TitleHome title={"Saturday"} />
            </div>

            <div className="modiweek-page__main-content">
                <img src={ModiweekMain} alt="MAIN BANNER" className="modiweek-page__img" />

                <div className="modiweek-page__main-text">
                    <h1 className="modiweek-page__title">Shop the look</h1>
                    <p className="modiweek-page__subtitle">2 items</p>

                    <div className="modiweek-page__main-cards">
                        
                    </div>
                </div>
            </div>


            <div className="modiweek__cards">
                <CardsModiweek image={Modiweek1} cardTitle={"Sunday"} />
                <CardsModiweek image={Modiweek2} cardTitle={"Monday"} />
                <div className="modiweek__other">
                    <CardsModiweek image={Modiweek3} cardTitle={"Tuesday"} />
                    <CardsModiweek image={Modiweek4} cardTitle={"Wednesday"} />
                </div>
            </div>
        </section>
    )
}

export default ModiWeekPage