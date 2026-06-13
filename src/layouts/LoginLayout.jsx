import "./LoginLayout.css"
import accountPic from "../assets/images/accountPic.jpg"
import { Outlet, Link } from "react-router"
import LoginPage from "../pages/LoginPage/LoginPage"

const LoginLayout = () => {
    return (
        <section className="account">
            <img src={accountPic} alt="ACCOUNT COVER" className="account__cover" />


            <div className="account__content">
                <Outlet />
            </div>
        </section>
    )
}

export default LoginLayout