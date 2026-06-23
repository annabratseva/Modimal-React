import SustainCards from "../../shared/ui/cards/sustainCards"
import LinkTitles from "../../shared/ui/linkTitles/linkTitles"
import "./SustainabilityPage.css"

import SustainPicCard1 from "../../assets/images/sustainPage2.jpg"
import SustainPicCard2 from "../../assets/images/sustainPage3.jpg"
import SustainPicCard3 from "../../assets/images/sustainPage4.jpg"
import SustainPicCard4 from "../../assets/images/sustainPage5.jpg"
import SustainLast from "../../assets/images/sustainPage6.jpg"
import GreenSustain from "../../shared/ui/buttons/GreenSustain"

const SustainPage = () => {
    return (
        <section className="sustain-page">
            <LinkTitles className={"none-style"} textFirst={"Sustainability"} textSecond={"Mission"} />

            <div className="sustain-page__main-img">
                <h1 className="sustain-page__white-title">Elegance in simplicity, Earth’s harmony</h1>
            </div>

            <div className="sustain-page__main-text">
                <h1 className="sustain-page__title">sustainability at modimal</h1>

                <p className="sustain-page__subtitle sustain-page__subtitle--distance">At Modimal, sustainability is at the heart of everything we do. Our brand identity, characterized by its simplicity and elegance, is a reflection of our commitment to a more sustainable future.</p>

                <div className="sustain-page__cards">
                    <h1 className="sustain-page__title sustain-page__title--smaller">Our Mission, The Modimal six:</h1>

                    <div className="sustain-page__inner-cards">
                        <div className="sustain-page__first-row">
                            <SustainCards titleText={"Minimalism"} subtitleText={"we believe less is more. Our thoughtfully design pieces embrace minimalism ensuring that garment becomes a versatile and timeless addition to your wardrobe. by choosing quality over quantity, we encourage conscious consumption. "} />

                            <SustainCards titleText={"Ethical"} subtitleText={"Every stitch tells a story. Our garments are meticulously crafted by skilled artisans who share our values of ethical and fair labor practices. This dedication to craftsmanship not only ensures exceptional quality but also supports a network of talented individuals."} />

                            <SustainCards titleText={"Eco - Freindly Materials"} subtitleText={"We are dedicated to reducing our environmental impact. Our clothing is made using sustainable materials, carefully sourced to minimize harm to the planet. From organic fabrics to innovative recycled materials, we aim to leave a lighter footprint."} />
                        </div>

                        <div className="sustain-page__first-row">
                            <SustainCards titleText={"Circular"} subtitleText={" Embracing the circular economy, we design with longevity in mind. Our pieces are intended to be treasured for years, encouraging a shift away from disposable fashion. When you invest in our clothing, you're investing in a more sustainable future. "} />

                            <SustainCards titleText={"Transparency"} subtitleText={" We value openness and transparency. We're on a journey to continuously improve our practices, and we're committed to sharing our progress with you. From sourcing to production, we want you to know the story behind each piece you wear. we are updating all  information very six months."} />

                            <SustainCards titleText={"Community And Empowerment"} subtitleText={" Our brand is a part of a community that shares a vision for a better world. Through collaborations and initiatives, we aim to inspire and empower individuals to make conscious choices and contribute to positive change."} />
                        </div>



                    </div>
                </div>

                <p className="sustain-page__subtitle">Guided by our core missions, we intertwine sustainability into every thread of our brand, from thoughtfully sourced materials and innovative manufacturing process to nurturing product longevity and embracing eco-friendly packaging – all harmonizing to create a more meaningful and responsible approach to fashion.</p>

            </div>

            <div className="sustain-page__img-cards">
                <div className="sustain-page__img-first">
                    <div className="sustain-page__img-cont-small">
                        <img src={SustainPicCard1} alt="CARD1" className="sustain-page__card-pic" />

                        <GreenSustain text={"processing"} />
                    </div>

                    <div className="sustain-page__img-cont-big">
                        <img src={SustainPicCard2} alt="CARD2" className="sustain-page__card-pic" />

                        <GreenSustain text={"materials"} />
                    </div>
                </div>

                <div className="sustain-page__img-first sustain-page__img-first--reversed">
                    <div className="sustain-page__img-cont-big">
                        <img src={SustainPicCard4} alt="CARD4" className="sustain-page__card-pic" />

                        <GreenSustain text={"Product Caring"} />
                    </div>

                    <div className="sustain-page__img-cont-small">
                        <img src={SustainPicCard3} alt="CARD3" className="sustain-page__card-pic" />

                        <GreenSustain text={"Packaging"} />
                    </div>
                </div>
            </div>

            <p className="sustain-page__subtitle sustain-page__subtitle--sized">"With every step, our quest for sustainability is fortified by our trusted suppliers, united in our shared dedication to ethical craftsmanship and a more conscious future."</p>

            <div className="sustain-page__people">
                <div className="sustain-page__people-title">
                    <h1 className="sustain-page__title sustain-page__title--smaller">People Beyond Us</h1>
                </div>

                <img src={SustainLast} alt="sustain banner" className="sustain-page__people-img" />

                <GreenSustain text={"Our Suppliers"} />
            </div>

            <p className="sustain-page__subtitle sustain-page__subtitle--sized">
                With Modimal, you're not just wearing fashion – you're making a statement. A statement that elegance and sustainability can coexist, shaping a more responsible and beautiful future for us all.
            </p>
                
        </section>
    )
}

export default SustainPage