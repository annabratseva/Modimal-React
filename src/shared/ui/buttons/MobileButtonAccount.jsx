import { Link } from "react-router"
import "./MobileButtonAccount.css"

const MobileButton = ({linkText, text}) => {
    return (
        <Link to={`${linkText}`} className="mobile__button">{text}</Link>
    )
}

export default MobileButton