const SustainCards = ({ titleText, subtitleText }) => {
    return (
        <div className="sustain-page__card">
            <h1 className="sustain-page__title sustain-page__title--card">{titleText}</h1>

            <p className="sustain-page__subtitle sustain-page__subtitle--smaller">{subtitleText} </p>
        </div>
    )
}

export default SustainCards