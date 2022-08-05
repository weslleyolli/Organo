import './colab.css'

const Colab = ({name, office, image}) => {
    return(<div className='colab'>
        <div className='cabecalho'>
            <img src={image}  alt={name} />
        </div>
        <div className='rodape'>
            <h4>{name}</h4>
            <h5>{office}</h5>
        </div>

    </div>)
}

export default Colab