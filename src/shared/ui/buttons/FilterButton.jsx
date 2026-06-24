import "./FilterButton.css"
import PlusIcon from "../../../assets/icons/PlusIconWhite.svg"

const FilterButton = ({ btnText }) => {
    return (
        <button className="filter-btn">
            <h1 className="filter-btn__title">{btnText}</h1>

            <img src={PlusIcon} alt="PLUS ICON" className="filter-btn__icon" />
        </button>
    )
}

export default FilterButton