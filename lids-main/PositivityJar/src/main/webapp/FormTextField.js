import "../style/forms.css";

function FormTextField({ label, value, setValue }) {
    var inputType;

    function onChange(event) {
        var newValue = event.target.value;

        setValue(label, newValue);
    }

    if (label === "Password") inputType = "password";
    else inputType = "text";

    return (
        <div className="text-field-wrapper">
            <p className="text-field-label">{label}</p>
            <input className="text-input centered" type={inputType} value={value} onChange={onChange} />
        </div>
    )
}

export default FormTextField;