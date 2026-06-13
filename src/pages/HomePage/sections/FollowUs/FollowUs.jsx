import TitleHome from "../../../../shared/ui/titleHome/titleHome"
import followBanner from "../../../../assets/images/followus.png"
import "./FollowUs.css"

const FollowBanner = () => {
    return (
        <section className="follow-us">
            <TitleHome title={"Follow us @modimal"}/>

            <img src={followBanner} alt="FOLLOW-US" className="follow-us__img" />
        </section>
    )
}

export default FollowBanner