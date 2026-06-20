import { useState, useRef, useLayoutEffect } from "react"
import "./Preloader.css"
import gsap from "gsap"

import LogoIcon from "../../../assets/icons/LogoIcon.svg"

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true)
    const preloaderRef = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "back.inOut" } })

            tl.to(".color1", { x: 10, duration: 0.8 })

            tl.fromTo(".color2", 
                { x: 0, opacity: 0.65 }, 
                { x: 10, opacity: 1, duration: 0.8, backgroundColor: "#99b893" }
            )

            tl.fromTo(".color3", 
                { x: 0, opacity: 0.65 }, 
                { x: 10, opacity: 1, duration: 0.8, backgroundColor: "#b6daae" }
            )

            tl.fromTo(".color4", 
                { x: 10, opacity: 0.65 }, 
                { y: -10, opacity: 1, duration: 0.8, backgroundColor: "#deffd6" }
            )

            tl.to(".wide-color", {
                clipPath: "circle(150% at 50% 50%)",
                duration: 1,
                ease: "power2.inOut"
            })

            tl.to(preloaderRef.current, {
                opacity: 0,
                duration: 0.4,
                onComplete: () => setIsLoading(false)
            })

        }, preloaderRef)

        return () => ctx.revert()
    }, [])

    if (!isLoading) return null

    return (
        <div className="preloader" ref={preloaderRef}>
            <div className="header__logo preloader__logo">
                <div className="header__logo-main-text">
                    <h1 className="header__title whiter">modimal</h1>
                    <img src={LogoIcon} alt="LOGO ICON" className="header__logo-icon " />
                </div>

                <p className="header__logo-subtitle whiter2">women clothing</p>
            </div>

            <div className="preloader__anim">
                <div className="preloader__round color1"></div>
                <div className="preloader__round color2"></div>
                <div className="preloader__round color3"></div>
                <div className="preloader__round color4"></div>
                <div className="wide-color"></div>
            </div>
        </div>
    )
}

export default Preloader