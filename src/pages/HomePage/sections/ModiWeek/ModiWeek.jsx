import TitleHome from "../../../../shared/ui/titleHome/titleHome"
import Modiweek1 from "../../../../assets/images/modiweek1.png"
import Modiweek2 from "../../../../assets/images/modiweek2.png"
import Modiweek3 from "../../../../assets/images/modiweek3.png"
import Modiweek4 from "../../../../assets/images/modiweek4.png"
import CardsModiweek from "../../../../shared/ui/cards/cardsModiweek"

import "./Modiweek.css"


const ModiWeek = () => {
    return (
        <section className="modiweek">
            <div className="modiweek__title">
                <TitleHome title={"Modiweek"}/>
            </div>

            <div className="modiweek__cards">
                <CardsModiweek image={Modiweek1} cardTitle={"Sunday"}/>
                <CardsModiweek image={Modiweek2} cardTitle={"Monday"}/>
                <CardsModiweek image={Modiweek3} cardTitle={"Tuesday"}/>
                <CardsModiweek image={Modiweek4} cardTitle={"Wednesday"}/>
            </div>
        </section>
    )
}

export default ModiWeek