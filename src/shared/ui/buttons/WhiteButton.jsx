import { Link } from "react-router"
import "./WhiteButton.css"

const WhiteButton = ({text, linktext, className, className2}) => {
    return (
        <button className={`white-button ${className}`}><Link to={`${linktext}`} className={`white-button__text ${className2}`}>{text}</Link></button>
    )
}

export default WhiteButton