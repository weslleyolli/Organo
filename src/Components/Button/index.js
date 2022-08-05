import "./Button.css"

const Botao = (props) => {
    return(<button className="button">
        {props.text}
        </button>)
}

export default Botao
