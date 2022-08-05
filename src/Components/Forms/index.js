import { useState } from "react"
import Botao from "../Button"
import DropDownList from "../DropDownList/Index"
import FieldText from "../FieldText/FieldText"
import "./Forms.css"

const Forms = (props) => {



    const [name, setName]= useState('')
    const [office, setOffice]= useState('')
    const [image, setImage]= useState('')
    const [team, setTeam]= useState('')

    const aoSave = (evento) => {
        evento.preventDefault()
        props.aoRegisteredContributor({
            name,
            office,
            image,
            team
        })
        setName('')
        setOffice('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="forms">
            <form onSubmit={aoSave}>
                <h2>Fill in the data to create the contributor card</h2>
                <FieldText 
                    required={true} 
                    label="Name" 
                    placeholder="Enter your name" 
                    valor={name}
                    aoChanged={valor => setName(valor)}
                />
                <FieldText
                    required={true}
                    label="Office" 
                    placeholder="Enter your office" 
                    valor = {office}
                    aoChanged = {valor => setOffice(valor)}
                />
                <FieldText 
                    label="Image" 
                    placeholder="Enter the address of image" 
                    valor = {image}
                    aoChanged = {valor => setImage(valor)}
                />
                <DropDownList 
                    required={true} 
                    label="Team" 
                    itens={props.teams} 
                    valor = {team}

                    aoChanged = {valor => setTeam(valor)}
                />
                <Botao text="Create card"/>
            </form>
        </section>
    )

}

export default Forms