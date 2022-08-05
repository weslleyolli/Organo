import "./DropDownList.css"

const DropDownList = (props) => {
    console.log(props.itens)

    return (
        <div className="DropDownList">
            <label>{props.label}</label>
            <select onChange={evento => props.aoChanged(evento.target.value)} required={props.required}>
                <option key=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDownList