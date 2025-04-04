
function RoundedButton({ label, buttonAction }) {
    return (
        <div className="button rounded" onClick={buttonAction}>
            {label}
        </div>
    )
}

export default RoundedButton;