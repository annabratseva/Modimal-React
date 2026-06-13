import TitleHome from "../../../../shared/ui/titleHome/titleHome"
import CollectionImg1 from "../../../../assets/images/collection1.jpg"
import CollectionImg2 from "../../../../assets/images/collection2.jpg"
import CollectionImg3 from "../../../../assets/images/collection3.jpg"
import CollectionImg4 from "../../../../assets/images/collection4.jpg"
import WhiteButton from "../../../../shared/ui/buttons/WhiteButton"

import "./Collections.css"

const Collections = () => {
    return (
        <section className="collections">
            <div className="collections__title">
                <TitleHome title={"Collection"}/>
            </div>

            <div className="collections__pictures">

                <div className="collections__pic-container1">
                    <div className="collections__pic-inner-cont">
                        <img src={CollectionImg1} alt="PIC1" className="collections1__img" />

                        <WhiteButton linktext={"/"} text={"Boluses"} className={"collections__position1"}/>
                    </div>

                    <div className="collections__pic-inner-cont">
                        <img src={CollectionImg3} alt="PIC2" className="collections2__img" />

                        <WhiteButton linktext={"/"} text={"Dresses"} className={"collections__position2"}/>
                    </div>
                </div>

                <div className="collections__pic-container1">
                    <div className="collections__pic-inner-cont">
                        <img src={CollectionImg2} alt="PIC3" className="collections3__img" />

                        <WhiteButton linktext={"/"} text={"Pants"} className={"collections__position3"}/>
                    </div>

                    <div className="collections__pic-inner-cont">
                        <img src={CollectionImg4} alt="PIC4" className="collections4__img" />

                        <WhiteButton linktext={"/"} text={"Outwear"} className={"collections__position4"}/>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Collections