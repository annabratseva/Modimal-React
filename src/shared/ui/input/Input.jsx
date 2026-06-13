import "./Input.css"

const InputLine = ({typeText, placeholder, ...props}) => {
    return (
        <input type={typeText} className="form__input" placeholder={placeholder} {...props}/>
    )
}

export default InputLine