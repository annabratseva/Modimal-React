import TitleHome from "../../../../shared/ui/titleHome/titleHome"
import followBanner from "../../../../assets/images/followus.jpg"
import "./FollowUs.css"
import followMobile from "../../../../assets/images/followUsPic2.jpg"

const FollowBanner = () => {
    return (
        <section className="follow-us">
            <TitleHome title={"Follow us @modimal"}/>

            <img src={followBanner} alt="FOLLOW-US" className="follow-us__img" />
            <img src={followMobile} alt="FOLLOW-US" className="follow-us__img mobile" />
        </section>
    )
}

export default FollowBanner