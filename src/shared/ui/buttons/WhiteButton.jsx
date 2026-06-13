import { Link } from "react-router"
import "./WhiteButton.css"

const WhiteButton = ({text, linktext, className}) => {
    return (
        <button  className={`white-button ${className}`}><Link to={`${linktext}`} className={`white-button__text`}>{text}</Link></button>
    )
}

export default WhiteButton