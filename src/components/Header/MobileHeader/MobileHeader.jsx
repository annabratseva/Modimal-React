import { useState } from "react"
import "./MobileHeader.css"
import { ArrowDownMobile } from "../../../assets/svg-icons-code/svgCode"
import { Link } from "react-router"
import { AccountIcon } from "../../../assets/svg-icons-code/svgCode"
import { useEffect } from "react"

const MobileHeader = ({ onClose, isOpen, isAuth, email, onLogout }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const [openItems, setOpenItems] = useState([])

    const toggle = (name) => {
        setOpenItems(prev =>
            prev.includes(name)
                ? prev.filter(item => item !== name)
                : [...prev, name]
        )
    }

    if (!isOpen) return null

    


    return (
        <nav className="mobile-header">
            <div className="mobile-header__item" onClick={() => toggle("collection")}>
                <div className={`mobile-header__title ${openItems.includes("collection") ? "no-border" : ""}`}>
                    <Link to={"/collection"} className="mobile-header__link" onClick={onClose}>Collection</Link>
                    <ArrowDownMobile className={openItems.includes("collection") ? "open" : ""} />
                </div>

                {openItems.includes("collection") && (
                    <ul className="mobile-header__sublist">
                        <li className="mobile-header__sublink"><Link to={"/shop-all"} className="mobile-header__sublink-link" onClick={onClose}>Shop All</Link></li>
                        <li className="mobile-header__sublink">Boluses & Top</li>
                        <li className="mobile-header__sublink">Pants</li>
                        <li className="mobile-header__sublink">Dresses & jumpsuits</li>
                        <li className="mobile-header__sublink">outwear & jackets</li>
                        <li className="mobile-header__sublink">pullovers</li>
                        <li className="mobile-header__sublink">tees</li>
                        <li className="mobile-header__sublink">shorts & skirts</li>
                    </ul>
                )}
            </div>

            <div className="mobile-header__item" onClick={() => toggle("new-in")}>
                <div className={`mobile-header__title ${openItems.includes("new-in") ? "no-border" : ""}`}>
                    <Link to={"/new-in"} className="mobile-header__link" onClick={onClose}>new in</Link>
                    <ArrowDownMobile className={openItems.includes("new-in") ? "open" : ""} />
                </div>

                {openItems.includes("new-in") && (
                    <ul className="mobile-header__sublist">
                        <li className="mobile-header__sublink"><Link to={"/shop-all"} className="mobile-header__sublink-link" onClick={onClose}>Shop All</Link></li>
                        <li className="mobile-header__sublink">Boluses & Top</li>
                        <li className="mobile-header__sublink">Pants</li>
                        <li className="mobile-header__sublink">Dresses & jumpsuits</li>
                        <li className="mobile-header__sublink">outwear & jackets</li>
                        <li className="mobile-header__sublink">pullovers</li>
                        <li className="mobile-header__sublink">tees</li>
                        <li className="mobile-header__sublink">shorts & skirts</li>
                    </ul>
                )}
            </div>

            <div className="mobile-header__item" onClick={() => toggle("modiweek")}>
                <div className={`mobile-header__title ${openItems.includes("modiweek") ? "no-border" : ""}`}>
                    <Link to={"/modiweek"} className="mobile-header__link" onClick={onClose}>modiweek</Link>
                    <ArrowDownMobile className={openItems.includes("modiweek") ? "open" : ""} />
                </div>

                {openItems.includes("modiweek") && (
                    <ul className="mobile-header__sublist">
                        <li className="mobile-header__sublink"><Link to={"/shop-all"} className="mobile-header__sublink-link" onClick={onClose}>Shop All</Link></li>
                        <li className="mobile-header__sublink">Boluses & Top</li>
                        <li className="mobile-header__sublink">Pants</li>
                        <li className="mobile-header__sublink">Dresses & jumpsuits</li>
                        <li className="mobile-header__sublink">outwear & jackets</li>
                        <li className="mobile-header__sublink">pullovers</li>
                        <li className="mobile-header__sublink">tees</li>
                        <li className="mobile-header__sublink">shorts & skirts</li>
                    </ul>
                )}
            </div>

            <div className="mobile-header__item" onClick={() => toggle("plus size")}>
                <div className={`mobile-header__title ${openItems.includes("plus size") ? "no-border" : ""}`}>
                    <Link to={"/plus-size"} className="mobile-header__link" onClick={onClose}>plus size</Link>
                    <ArrowDownMobile className={openItems.includes("plus size") ? "open" : ""} />
                </div>

                {openItems.includes("plus size") && (
                    <ul className="mobile-header__sublist">
                        <li className="mobile-header__sublink"><Link to={"/shop-all"} className="mobile-header__sublink-link" onClick={onClose}>Shop All</Link></li>
                        <li className="mobile-header__sublink">Boluses & Top</li>
                        <li className="mobile-header__sublink">Pants</li>
                        <li className="mobile-header__sublink">Dresses & jumpsuits</li>
                        <li className="mobile-header__sublink">outwear & jackets</li>
                        <li className="mobile-header__sublink">pullovers</li>
                        <li className="mobile-header__sublink">tees</li>
                        <li className="mobile-header__sublink">shorts & skirts</li>
                    </ul>
                )}
            </div>

            <div className="mobile-header__item" onClick={() => toggle("sustain")}>
                <div className={`mobile-header__title ${openItems.includes("sustain") ? "no-border" : ""}`}>
                    <Link to={"/sustainability"} className="mobile-header__link" onClick={onClose}>sustainability </Link>
                    <ArrowDownMobile className={openItems.includes("sustain") ? "open" : ""} />
                </div>

                {openItems.includes("sustain") && (
                    <ul className="mobile-header__sublist">
                        <li className="mobile-header__sublink">mission</li>
                        <li className="mobile-header__sublink">processing</li>
                        <li className="mobile-header__sublink"><Link to={"/materials"} className="mobile-header__sublink-link" onClick={onClose}>Materials</Link></li>
                        <li className="mobile-header__sublink">packaging</li>
                        <li className="mobile-header__sublink">product care</li>
                        <li className="mobile-header__sublink">our suppliers</li>
                    </ul>
                )}
            </div>

            <div className="mobile-header__added">
                {isAuth ? (
                    <div className="mobile-header__account-cont">
                        <span className="header__user-email">Your account:<br /> {email}</span>
                        <button className="header__logout" onClick={() => { onLogout(); onClose(); }}>
                            Log Out
                        </button>
                    </div>
                ) : (
                    <>
                        <Link to={"/account"} className="header__mega-link2 mobile__link" onClick={onClose}>
                            <AccountIcon />
                            Log In
                        </Link>
                        <Link to={"/account/register"} className="header__mega-link2 mobile__link" onClick={onClose}>
                            Create Account
                        </Link>
                    </>
                )}
            </div>
        </nav>
    )
}

export default MobileHeader