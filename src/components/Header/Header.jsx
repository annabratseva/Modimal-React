import LogoIcon from "../../assets/icons/LogoIcon.svg"
import { Link, Outlet } from "react-router"
import { AccountIcon, CartIcon, FavoriteIcon, SearchIcon } from "../../assets/svg-icons-code/svgCode"
import "./Header.css"

const Header = () => {


    return (
        <header className="header">

            <div className="header__green-line">
                <h1 className="header__green-line-text">Enjoy Free Shipping On All Orders</h1>
            </div>

            <div className="header__main">

                <div className="header__logo">
                    <div className="header__logo-main-text">
                        <h1 className="header__title">modimal</h1>
                        <img src={LogoIcon} alt="LOGO ICON" className="header__logo-icon" />
                    </div>

                    <p className="header__logo-subtitle">women clothing</p>
                </div>

                <nav className="header__nav">
                    <li className="header__li">
                        <Link to={"/collection"} className="header__link">Collection</Link>
                    </li>
                    <li className="header__li">
                        <Link to={"/new-in"}className="header__link">New In</Link>
                    </li>
                    <li className="header__li">
                        <Link to={"/modiweek"}className="header__link">ModiWeek</Link>
                    </li>
                    <li className="header__li">
                        <Link to={"/plus-size"} className="header__link">Plus Size</Link>
                    </li>
                    <li className="header__li">
                        <Link to={"/sustainability"} 
                        className="header__link">Sustainability</Link>
                    </li>
                </nav>

                <div className="header__icons">
                    <Link to={"/"}>
                        <SearchIcon />
                    </Link>

                    <Link to={"/account"}>
                        <AccountIcon />
                    </Link>

                    <Link to={"/favorite"}>
                        <FavoriteIcon />
                    </Link>

                    <Link to={"/"}>
                        <CartIcon />
                    </Link>
                </div>

            </div>
        </header>
    )
}

export default Header