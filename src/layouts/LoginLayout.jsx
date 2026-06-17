import "./LoginLayout.css"
import accountPic from "../assets/images/accountPic.jpg"
import { Outlet, Link } from "react-router"
import LoginPage from "../pages/LoginPage/LoginPage"
import accountMobile from "../assets/images/AccountMobile.jpg"

const LoginLayout = () => {
    return (
        <section className="account">
            <img src={accountPic} alt="ACCOUNT COVER" className="account__cover" />
            <img src={accountMobile} alt="ACCOUNT MOBILE" className="account__mobile-pic" />

            <div className="account__content">
                <Outlet />
            </div>
        </section>
    )
}

export default LoginLayout