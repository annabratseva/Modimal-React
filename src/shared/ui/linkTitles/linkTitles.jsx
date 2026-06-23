import "./linkTitles.css"

const LinkTitles = ({ className, textFirst, textSecond, className2 }) => {
    return (
        <div className="link-text">
            <div className="link-text__titles">
                <p className="link-text__subtitle green-text-link">Home</p>
                <p className="link-text__subtitle">/</p>
                <p className={`link-text__subtitle ${className}`}>{textFirst}</p>
                <p className={`link-text__subtitle ${className2}`}>/</p>
                <p className={`link-text__subtitle ${className2}`}>{textSecond}</p>
            </div>
        </div>
    )
}

export default LinkTitles