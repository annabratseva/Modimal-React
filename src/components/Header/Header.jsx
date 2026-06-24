import LogoIcon from "../../assets/icons/LogoIcon.svg"
import { Link, Outlet, useLocation } from "react-router"
import { AccountIcon, CartIcon, FavoriteIcon, SearchIcon, BurgerMenu, CrossedIcon, FavoriteClicked, GraySearch } from "../../assets/svg-icons-code/svgCode"
import "./Header.css"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { logout } from "../../BLL/reducers/AuthReducer"


import CollectionPic1 from "../../assets/images/collectionMenu1.jpg"
import CollectionPic2 from "../../assets/images/collectionMenu2.jpg"

import NewInPic1 from "../../assets/images/newInMenu1.jpg"
import NewInPic2 from "../../assets/images/newInMenu2.jpg"
import NewInPic3 from "../../assets/images/newInMenu3.jpg"

import ModiWeekPic1 from "../../assets/images/modiweekMenu2.jpg"
import ModiWeekPic2 from "../../assets/images/modiweekMenu3.jpg"

import PlusSizePic1 from "../../assets/images/plusSizeMenu1.jpg"
import PlusSizePic2 from "../../assets/images/plusSizeMenu2.jpg"
import PlusSizePic3 from "../../assets/images/plusSizeMenu3.jpg"

import MaterialsPic1 from "../../assets/images/SustainMenu1.jpg"
import MaterialsPic2 from "../../assets/images/SustainMenu2.jpg"
import MobileHeader from "./MobileHeader/MobileHeader"

const Header = () => {

    // фигулины другие

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const isFavoritePage = location.pathname === "/favorite"

    const [isOpen, setIsOpen] = useState(null)
    const [IsMobileHeaderOpen, setMobileHeader] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    // выход из логина (ниже кнопка)

    const { isAuth, email } = useSelector(state => state.auth)

    const handleLogout = () => {
        localStorage.removeItem("currentUser")
        dispatch(logout())
        setIsOpen(null)
        navigate("/")
    }

    // для мобильной менюшки код

    const toggleMobileMenu = () => {
        setMobileHeader(prev => !prev)
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        if (!searchValue.trim()) return
        navigate(`/search?q=${searchValue.trim()}`)
    }

    const toggleSearch = () => {
        setIsSearchOpen(prev => !prev)
        setSearchValue("")
    }

    return (
        <header className="header">

            <div className="header__green-line">
                <h1 className="header__green-line-text">Enjoy Free Shipping On All Orders</h1>
            </div>

            {isSearchOpen && (
                <form className="header__search-bar" onSubmit={handleSearchSubmit}>

                    <div className="header__search-content">

                        <button type="submit" className="header__search-submit">
                            <GraySearch />
                        </button>

                        <input
                            type="text"
                            placeholder="Search"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="header__search-input"
                            autoFocus
                        />
                    </div>
                </form>
            )}

            <div className="header__main">


                <div className="header__mobile-cont">

                    <button type="button" className="header__mobile-menu" onClick={toggleMobileMenu}>
                        {IsMobileHeaderOpen ? <CrossedIcon /> : <BurgerMenu />}
                    </button>

                    <button
                        type="button"
                        className="header__mobile-menu"
                        onClick={toggleSearch}
                    >
                        {isSearchOpen ? <CrossedIcon /> : <SearchIcon />}
                    </button>

                </div>

                <div className="header__logo">
                    <div className="header__logo-main-text">
                        <h1 className="header__title">modimal</h1>
                        <img src={LogoIcon} alt="LOGO ICON" className="header__logo-icon" />
                    </div>

                    <p className="header__logo-subtitle">women clothing</p>
                </div>


                <div className="header__mobile-cont wider-mobile">

                    <Link to="/favorite">
                        {isFavoritePage
                            ? <FavoriteClicked />
                            : <FavoriteIcon />
                        }
                    </Link>

                    <Link to={"/"}>
                        <CartIcon />
                    </Link>

                </div>


                <MobileHeader
                    isOpen={IsMobileHeaderOpen}
                    onClose={() => setMobileHeader(false)}
                    isAuth={isAuth}
                    email={email}
                    onLogout={handleLogout}
                />






                <nav className="header__nav">


                    {isOpen && (
                        <div className="header__overlay"></div>
                    )}

                    <li
                        className="header__li"
                        onMouseEnter={() => setIsOpen("collection")}
                    >
                        <Link to={"/collection"} className="header__link">Collection</Link>
                    </li>

                    {isOpen === "collection" && (
                        <div
                            className="header__mega-menu"
                            onMouseEnter={() => setIsOpen("collection")}
                            onMouseLeave={() => setIsOpen(null)}
                        >
                            <div className="header__categories">
                                <p className="header__mega-title">Category</p>

                                <ul className="header__mega-nav">
                                    <li className="header__mega-li"><Link to={"/shop-all"} className="header__mega-link">Shop All</Link></li>
                                    <li className="header__mega-li">Boluses & Top</li>
                                    <li className="header__mega-li">Pants</li>
                                    <li className="header__mega-li">Dresses & jumpsuits</li>
                                    <li className="header__mega-li">outwear & jackets</li>
                                    <li className="header__mega-li">pullovers</li>
                                    <li className="header__mega-li">tees</li>
                                    <li className="header__mega-li">shorts & skirts</li>
                                </ul>
                            </div>

                            <div className="header__categories">
                                <p className="header__mega-title">featured</p>

                                <ul className="header__mega-nav">
                                    <li className="header__mega-li"><Link to={"/new-in"} className="header__mega-link">New In</Link></li>
                                    <li className="header__mega-li"><Link to={"/modiweek"} className="header__mega-link">modiweek</Link></li>
                                    <li className="header__mega-li"><Link to={"/plus-size"} className="header__mega-link">plus size</Link></li>
                                    <li className="header__mega-li">best seller</li>
                                </ul>
                            </div>

                            <div className="header__categories">
                                <p className="header__mega-title">more</p>

                                <ul className="header__mega-nav">
                                    <li className="header__mega-li">bundles</li>
                                    <li className="header__mega-li">occasion wear</li>
                                    <li className="header__mega-li">matching set</li>
                                    <li className="header__mega-li">suiting</li>
                                </ul>
                            </div>

                            <div className="header__mega-images">
                                <div className="header__mega-img">
                                    <img src={CollectionPic1} alt="PIC1" className="header__mega-pic" />
                                    <p className="header__mega-subtitle">Blouses</p>
                                </div>

                                <div className="header__mega-img">
                                    <img src={CollectionPic2} alt="PIC2" className="header__mega-pic" />
                                    <p className="header__mega-subtitle">plus size</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <li className="header__li"
                        onMouseEnter={() => setIsOpen("new-in")}>
                        <Link to={"/new-in"} className="header__link">New In</Link>
                    </li>

                    {isOpen === "new-in" && (
                        <div
                            className="header__mega-menu wider2"
                            onMouseEnter={() => setIsOpen("new-in")}
                            onMouseLeave={() => setIsOpen(null)}
                        >
                            <div className="header__categories">
                                <p className="header__mega-title">Category</p>

                                <ul className="header__mega-nav">
                                    <li className="header__mega-li"><Link to={"/shop-all"} className="header__mega-link">Shop All</Link></li>
                                    <li className="header__mega-li">Boluses & Top</li>
                                    <li className="header__mega-li">Pants</li>
                                    <li className="header__mega-li">Dresses & jumpsuits</li>
                                    <li className="header__mega-li">outwear & jackets</li>
                                    <li className="header__mega-li">pullovers</li>
                                    <li className="header__mega-li">tees</li>
                                    <li className="header__mega-li">shorts & skirts</li>
                                </ul>
                            </div>

                            <div className="header__categories">
                                <p className="header__mega-title">trending</p>

                                <ul className="header__mega-nav">
                                    <li className="header__mega-li"><Link to={"/plus-size"} className="header__mega-link">plus size</Link></li>
                                    <li className="header__mega-li">fall collection</li>
                                    <li className="header__mega-li"><Link to={"/modiweek"} className="header__mega-link">modiweek</Link></li>
                                </ul>
                            </div>

                            <div className="header__mega-images2">
                                <div className="header__mega-img2">
                                    <img src={NewInPic1} alt="PIC1" className="header__mega-pic" />
                                    <p className="header__mega-subtitle">fall collection</p>
                                </div>

                                <div className="header__mega-img2">
                                    <img src={NewInPic2} alt="PIC2" className="header__mega-pic" />
                                    <p className="header__mega-subtitle">boluses</p>
                                </div>

                                <div className="header__mega-img2">
                                    <img src={NewInPic3} alt="PIC2" className="header__mega-pic" />
                                    <p className="header__mega-subtitle">dresses</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <li className="header__li"
                        onMouseEnter={() => setIsOpen("modiweek")}>
                        <Link to={"/modiweek"} className="header__link">ModiWeek</Link>
                    </li>

                    {isOpen === "modiweek" && (
                        <div
                            className="header__mega-menu wider"
                            onMouseEnter={() => setIsOpen("modiweek")}
                            onMouseLeave={() => setIsOpen(null)}
                        >
                            <div className="header__categories">
                                <p className="header__mega-title">Category</p>

                                <ul className="header__mega-nav">
                                    <li className="header__mega-li"><Link to={"/shop-all"} className="header__mega-link">Shop All</Link></li>
                                    <li className="header__mega-li">Boluses & Top</li>
                                    <li className="header__mega-li">Pants</li>
                                    <li className="header__mega-li">Dresses & jumpsuits</li>
                                    <li className="header__mega-li">outwear & jackets</li>
                                    <li className="header__mega-li">pullovers</li>
                                    <li className="header__mega-li">tees</li>
                                    <li className="header__mega-li">shorts & skirts</li>
                                </ul>
                            </div>

                            <div className="header__mega-images3">
                                <div className="header__mega-img3">
                                    <img src={ModiWeekPic1} alt="PIC1" className="header__mega-pic" />
                                    <p className="header__mega-subtitle">Modiweek</p>
                                </div>

                                <div className="header__mega-img3">
                                    <img src={ModiWeekPic2} alt="PIC1" className="header__mega-pic" />
                                    <p className="header__mega-subtitle">New</p>

                                </div>

                            </div>
                        </div>
                    )}

                    <li className="header__li"
                        onMouseEnter={() => setIsOpen("plus-size")}>
                        <Link to={"/plus-size"} className="header__link">Plus Size</Link>
                    </li>


                    {isOpen === "plus-size" && (
                        <div
                            className="header__mega-menu wider"
                            onMouseEnter={() => setIsOpen("plus-size")}
                            onMouseLeave={() => setIsOpen(null)}
                        >
                            <div className="header__categories">
                                <p className="header__mega-title">Category</p>

                                <ul className="header__mega-nav">
                                    <li className="header__mega-li"><Link to={"/shop-all"} className="header__mega-link">Shop All</Link></li>
                                    <li className="header__mega-li">Boluses & Top</li>
                                    <li className="header__mega-li">Pants</li>
                                    <li className="header__mega-li">Dresses & jumpsuits</li>
                                    <li className="header__mega-li">outwear & jackets</li>
                                    <li className="header__mega-li">pullovers</li>
                                    <li className="header__mega-li">tees</li>
                                    <li className="header__mega-li">shorts & skirts</li>
                                </ul>
                            </div>

                            <div className="header__mega-images2">
                                <div className="header__mega-img2">
                                    <img src={PlusSizePic1} alt="PIC1" className="header__mega-pic" />
                                    <p className="header__mega-subtitle">Pants</p>
                                </div>

                                <div className="header__mega-img2">
                                    <img src={PlusSizePic2} alt="PIC2" className="header__mega-pic" />
                                    <p className="header__mega-subtitle">dresses</p>
                                </div>

                                <div className="header__mega-img2">
                                    <img src={PlusSizePic3} alt="PIC2" className="header__mega-pic" />
                                    <p className="header__mega-subtitle">blouses</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <li className="header__li"
                        onMouseEnter={() => setIsOpen("sustain")}>
                        <Link to={"/sustainability"} className="header__link">Sustainability</Link>
                    </li>

                    {isOpen === "sustain" && (
                        <div
                            className="header__mega-menu wider"
                            onMouseEnter={() => setIsOpen("sustain")}
                            onMouseLeave={() => setIsOpen(null)}
                        >
                            <div className="header__categories">
                                <p className="header__mega-title">sustainability</p>

                                <ul className="header__mega-nav">
                                    <li className="header__mega-li"><Link to={"/sustainability"} className="header__mega-link">mission</Link></li>
                                    <li className="header__mega-li">processing</li>
                                    <li className="header__mega-li"><Link to={"/materials"} className="header__mega-link">materials</Link></li>
                                    <li className="header__mega-li">packaging</li>
                                    <li className="header__mega-li">product care</li>
                                    <li className="header__mega-li">our suppliers</li>

                                </ul>
                            </div>

                            <div className="header__mega-images4">

                                <img src={MaterialsPic1} alt="PIC1" className="header__mega-pic4" />

                                <img src={MaterialsPic2} alt="PIC1" className="header__mega-pic4" />

                            </div>
                        </div>
                    )}
                </nav>

                <div className="header__icons">
                    <button
                        type="button"
                        className="header__search-btn"
                        onClick={toggleSearch}
                    >
                        {isSearchOpen ? <CrossedIcon /> : <SearchIcon />}
                    </button>




                    <Link to={"/account"} onMouseEnter={() => setIsOpen("account")}>
                        <AccountIcon />
                    </Link>

                    {isOpen === "account" && (
                        <div
                            className="header__mega-account"
                            onMouseEnter={() => setIsOpen("account")}
                            onMouseLeave={() => setIsOpen(null)}
                        >
                            <div className="header__categories-account">
                                {isAuth ? (
                                    <div className="header__account-cont">
                                        <span className="header__user-email">Your account:<br /> {email}</span>
                                        <button className="header__logout" onClick={handleLogout}>
                                            Log Out
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <p className="header__user-email">Don't have account yet? <br /><span className="header__green">Let's start!</span></p>

                                        <Link to={"/account"} className="header__mega-link2">
                                            <AccountIcon />
                                            Log In
                                        </Link>
                                        <Link to={"/account/register"} className="header__mega-link2">
                                            Create Account
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    )}

                    <Link to="/favorite">
                        {isFavoritePage
                            ? <FavoriteClicked />
                            : <FavoriteIcon />
                        }
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