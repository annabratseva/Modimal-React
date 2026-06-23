import LinkTitles from "../../shared/ui/linkTitles/linkTitles"
import "./Materials.css"
import "../SustainabilityPage/SustainabilityPage.css"

import MaterialPic1 from "../../assets/images/materials1.jpg"
import MaterialPic2 from "../../assets/images/materials2.jpg"
import MaterialPic3 from "../../assets/images/materials3.jpg"
import MaterialPic4 from "../../assets/images/materials4.jpg"
import MaterialPic5 from "../../assets/images/materials5.jpg"

const MaterialsPage = () => {
    return (
        <section className="materials">

            <LinkTitles className={"green-text-link"} textFirst={"Sustainability"} textSecond={"materials"} className2={"black-link"} />

            <div className="materials__main-text">
                <h1 className="sustain-page__title">Sustainably sourced materials</h1>

                <p className="sustain-page__subtitle">At Modimal, we believe in investing in the now to design for the future. That’s why we are committed to sourcing quality materials that will have less impact on the environment.
                    So far in 2022, 92% of the base fabrics in our collection are more sustainably sourced. Our goal is  To use only 100% sustainably sourced materials by 2025.
                    There are five kinds of fabrics in our collections that are Organic and responsible sourced, and we highlight these so you can make considered choices when you shop.
                </p>

               
            </div>

             <div className="materials__cards">
                    <div className="materials__card-cont">
                        <img src={MaterialPic1} alt="material 1" className="materials__pic" />

                        <div className="materials__card-text">
                            <h1 className="sustain-page__title sustain-page__title--smaller">Cotton</h1>

                            <p className="sustain-page__subtitle sustain-page__subtitle--smaller">We source certified organic cotton, which is grown without the use of pesticides or synthetic fertilizers and requires less irrigation as it relies mainly on rainwater.
                                (1). Avoiding harmful pesticides preserves soil biodiversity and protects the health of surrounding communities.
                                (2). Our organic cotton fabrics are made using organic cotton yarns that are certified by the Global Organic Textile Standard (GOTS)
                            </p>
                        </div>
                    </div>

                    <div className="materials__card-cont materials__card-cont--reversed">
                        <img src={MaterialPic2} alt="material 2" className="materials__pic2" />

                        <div className="materials__card-text">
                            <h1 className="sustain-page__title sustain-page__title--smaller">Wool</h1>

                            <p className="sustain-page__subtitle sustain-page__subtitle--smaller">Wool is a natural fiber with added performance attributes such as temperature regulation, durability, and natural water repellency. Considered a circular product by nature, wool can be recycled or biodegraded easily. Animal welfare is extremely important to us, and therefore we only source mulesing-free wool from producers that follow humane and eco-friendly processes aligned with our animal welfare guidelines.
                            </p>
                        </div>
                    </div>

                    <div className="materials__card-cont materials__card-cont--bigger">
                        <img src={MaterialPic3} alt="material 3" className="materials__pic3" />

                        <div className="materials__card-text">
                            <h1 className="sustain-page__title sustain-page__title--smaller">Linen</h1>

                            <p className="sustain-page__subtitle sustain-page__subtitle--smaller">Found throughout our collections, linen is a sustainable fiber made from the flax plant. Flax is naturally pest resistant that requires less pesticides, water and energy to produce compared to cotton and polyester. Flax aids in sequestering carbon into the soil, which removes carbon dioxide from the atmosphere and is beneficial for improving soil health.
                            </p>
                        </div>
                    </div>

                    <div className="materials__card-cont materials__card-cont--bigger materials__card-cont--reversed">
                        <img src={MaterialPic4} alt="material 4" className="materials__pic3" />

                        <div className="materials__card-text">
                            <h1 className="sustain-page__title sustain-page__title--smaller">Silk</h1>

                            <p className="sustain-page__subtitle sustain-page__subtitle--smaller">Organic silk is a more responsible alternative to making conventional silk through traditional methods. The silkworms are fed mulberry tree leaves from organic agriculture that uses no pesticides or harmful chemicals and resulting in a lustrous fabric that is gentle on both you and environment. this responsibly sourced material epitomizes our dedication to creating exquisite clothing with a conscience.
                            </p>
                        </div>
                    </div>

                    <div className="materials__card-cont materials__card-cont--bigger2">
                        <img src={MaterialPic5} alt="material 4" className="materials__pic4" />

                        <div className="materials__card-text">
                            <h1 className="sustain-page__title sustain-page__title--smaller">Cashmere</h1>

                            <p className="sustain-page__subtitle sustain-page__subtitle--smaller">We’re proud to source our cashmere through the Good Cashmere Standard by the Aid by Trade Foundation (AbTF). This independent standard works to source traceable, sustainably certified cashmere that cares for the wellbeing of cashmere goats, protects the environment and supports the herders that produce it.
                            </p>
                        </div>
                    </div>
                </div>

                <p className="sustain-page__subtitle sustain-page__subtitle--sized sustain-page__subtitle--sized2">
                    we are continually exploring more sustainable alternatives that offer the same quality and performance. we will soon add new fabrics in to our collections which are recycling and repurposing. By giving a new life to leftover fabrics through recycling and repurposing, we can reduce our demand on the planet’s limited natural resources. Recycled fabrics are made using the waste from both the pre- and post-consumer stage of a product’s life. 
                </p>

                <p className="sustain-page__subtitle sustain-page__subtitle--sized">
                    We track our material usage and progress annually as part of Textile Exchange’s Corporate Fibers and Materials Benchmark, view our latest report <span className="sustain-page__subtitle materials__span">here.</span> 
                </p>
        </section>
    )
}

export default MaterialsPage