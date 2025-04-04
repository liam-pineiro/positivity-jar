import "../../style/buttons.css";

function ToggleButton({ buttonState, setButtonState }) {
    var onButtonState = "button toggle " + (buttonState ? "selected" : "");
    var offButtonState = "button toggle " + (buttonState ? "" : "selected");

    function toggleOn() {
        setButtonState(true);
    }

    function toggleOff() {
        setButtonState(false);
    }

    return (
        <div className="toggle-button-wrapper flex row">
            <div className={onButtonState} onClick={toggleOn}>On</div>
            <div className={offButtonState} onClick={toggleOff}>Off</div>
        </div>
    )
}

export default ToggleButton;