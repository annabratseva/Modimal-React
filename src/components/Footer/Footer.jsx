import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { FooterEmailScheme } from "../../schemes/FooterEmailScheme"
import { getEmail } from "../../BLL/reducers/FooterReducer"



import "./Footer.css"

import { FacebookIcon, FooterArrowIcon, FooterContactIcon, InstaIcon, PinterestIcon, RightsIcon, TiktokIcon } from "../../assets/svg-icons-code/svgCode"
import { Link } from "react-router"
import { useState } from "react"

const Footer = () => {

    const selectorEmail = useSelector((state) => state.footer.email)

    const dispatchEmail = useDispatch()

    const {handleSubmit, register, formState: {errors, isSubmitting}, watch} = useForm({
        resolver: zodResolver(FooterEmailScheme)
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const sendFooterEmail = (data) => {
        dispatchEmail(getEmail(data))
        setIsSubmitted(true)
    }

    

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__top">

                    <form className="footer__form" onSubmit={handleSubmit(sendFooterEmail)}>
                        <h1 className="footer__top-text">Join our club, get 15% off for your Birthday</h1>

                        <div className="footer__input-cont">
                            <input type="text" className="footer__input" placeholder="Enter Your Email Address" {...register("email")}/>

                            <FooterArrowIcon />
                        </div>

                        {!!errors?.email?.message && <p className='footer__error'>{errors?.email?.message}</p>}

                        <button className="footer__submit">
                            {isSubmitted === true ? <div className="footer__submit-icon checked"></div> : <div className="footer__submit-icon"></div>}

                            <h1 className="footer__button-text">By Submittng your email, you agree to receive advertising emails from Modimal.</h1>
                        </button>
                    </form>

                    <div className="footer__icons">
                        <InstaIcon className="footer__icon"/>
                        <FacebookIcon className="footer__icon"/>
                        <PinterestIcon className="footer__icon"/>
                        <TiktokIcon className="footer__icon"/>
                    </div>
                </div>

                <nav className="footer__nav">

                    <div className="footer__nav-first">

                        <h1 className="footer__nav-title">About Modimal</h1>

                        <div className="footer__nav-cont">
                            <li className="footer__li"><Link to={"/collection"} className="footer__link">Collection</Link></li>
                            <li className="footer__li"><Link to={"/sustainability"} className="footer__link">Sustainability</Link></li>
                            <li className="footer__li"><Link to={"/"} className="footer__link">Privacy Policy</Link></li>
                            <li className="footer__li"><Link to={"/"} className="footer__link">Support System</Link></li>
                            <li className="footer__li"><Link to={"/"} className="footer__link">Terms & Condition</Link></li>
                            <li className="footer__li"><Link to={"/"} className="footer__link">Copyright Notice</Link></li>
                        </div>

                    </div>

                    <div className="footer__nav-first">

                        <h1 className="footer__nav-title">Help & Support</h1>

                        <div className="footer__nav-cont">
                            <li className="footer__li"><Link to={"/"} className="footer__link">Orders & Shipping</Link></li>
                            <li className="footer__li"><Link to={"/"} className="footer__link">Returns & Refunds</Link></li>
                            <li className="footer__li"><Link to={"/"} className="footer__link">FAQs</Link></li>
                            <li className="footer__li"><Link to={"/"} className="footer__link">Contact Us</Link></li>
                        </div>
                        
                    </div>

                    <div className="footer__nav-first">

                        <h1 className="footer__nav-title">Join Up</h1>

                        <div className="footer__nav-cont">
                            <li className="footer__li"><Link to={"/"} className="footer__link">Modimal Club</Link></li>
                            <li className="footer__li"><Link to={"/"} className="footer__link">Careers</Link></li>
                            <li className="footer__li"><Link to={"/"} className="footer__link">Visit Us</Link></li>
                        </div>
                        
                    </div>
                </nav>

            </div>

            <div className="footer__bottom">

                <div className="footer__icons mobile">
                        <InstaIcon className="footer__icon"/>
                        <FacebookIcon className="footer__icon"/>
                        <PinterestIcon className="footer__icon"/>
                        <TiktokIcon className="footer__icon"/>
                </div>

                <div className="footer__bottom-inner">

                    <RightsIcon />

                    <p className="footer__bottom-text">2023 modimal. All Rights Reserved.</p>

                </div>
                
            </div>


            <div className="footer__comment">
                <FooterContactIcon />
            </div>

            

        </footer>
    )
}

export default Footer