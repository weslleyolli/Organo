import "./FieldText.css"

const FieldText = (props) => {



    const aoTyped = (evento) => {
        props.aoChanged(evento.target.value)
    }

    return (
        <div className="field-text">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoTyped} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default FieldText