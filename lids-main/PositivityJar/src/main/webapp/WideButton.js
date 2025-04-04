import "../../style/buttons.css";

function WideButton({ addedClass, label }) {
    var buttonClass = "button wide " + addedClass;

    return (
        <div className={buttonClass}>
            {label}
        </div>
    )
}

export default WideButton;