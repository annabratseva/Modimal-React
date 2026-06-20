import WhiteButton from "../../../../shared/ui/buttons/WhiteButton"
import "./Banner.css"
import sustainMobile from "../../../../assets/images/sustainMobile.jpg"

const SustainBanner = () => {
    return (
        <section className="sus-banner">

            <img src={sustainMobile} alt="SUSTAIN MOBILE" className="sus-banner__img" />
            
            <h1 className="sus-banner__title">Stylish sustainability in clothing promotes eco-friendly choices for a greater future</h1>

            <WhiteButton linktext={"/sustainability"} text={"Sustainability"} className2={"mobile-button"} className={"mobile-button-wider"}/>
        </section>
    )
}

export default SustainBanner