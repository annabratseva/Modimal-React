import WhiteButton from "../../../../shared/ui/buttons/WhiteButton"
import "./Banner.css"

const SustainBanner = () => {
    return (
        <section className="sus-banner">
            <h1 className="sus-banner__title">Stylish sustainability in clothing promotes eco-friendly choices for a greater future</h1>

            <WhiteButton linktext={"/sustainability"} text={"Sustainability"}/>
        </section>
    )
}

export default SustainBanner