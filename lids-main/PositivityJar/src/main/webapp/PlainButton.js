function PlainButton({ label, buttonState }) {
    var buttonClass = "button plain" + (buttonState ? " selected" : "");
    
    return (
        <div className={buttonClass}>
            {label}
        </div>
    )
}

export default PlainButton;