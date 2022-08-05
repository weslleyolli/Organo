import Colab from '../Colab'
import './teams.css'

const Team = (props) => {
    const css = {backgroundColor: props.secundaryColor}
    return(
        props.contributors.length > 0 && <section className='team' style={css}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='contributor'>
                {props.contributors.map(contributor => <Colab key={contributor.name} name={contributor.name} office={contributor.office} image={contributor.image} />)}
            </div>
        </section>
    )
}

export default Team