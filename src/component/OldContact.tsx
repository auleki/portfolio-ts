import React, { useState } from 'react'
import { ContactMessageType } from '../global'
import { icons } from './constants'
import { SButton } from './styledComponents'

const OldContact = () => {
    const [contactMessage, setContactMessage] = useState<ContactMessageType>({
        name: "",
        email: "",
        project: "",
        message: "",
    })



    const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setContactMessage({ ...contactMessage, [e.currentTarget.name]: e.currentTarget.value })
    }

    const onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContactMessage({ ...contactMessage, message: event.target.value })
        // console.log(event.target.value)
    }

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(contactMessage)
        setContactMessage({ name: '', email: '', project: '', message: '' })
    }

    return (
        <div>
            <section className="container">
                <div className="actions">
                    <section className="action">
                        <h1 className="icon"><icons.phone /></h1>
                        <div className="detail">
                            <h2>Call Me</h2>
                            <p>+2349067340854</p>
                        </div>
                    </section>
                    <section className="action">
                        <h1 className="icon"><icons.mail /></h1>
                        <div className="detail">
                            <h2>Send an email</h2>
                            <p>iamtundegiwa@gmail.com</p>
                        </div>
                    </section>
                </div>
                <form className="form" onSubmit={sendMessage}>
                    <div className="row">
                        <div className="inputGroup">
                            <label htmlFor="name">Name</label>
                            <input autoComplete="off" onChange={onInputChange} autoFocus type="text" name="name" value={contactMessage.name} />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="email">Email</label>
                            <input onChange={onInputChange} type="text" name="email" value={contactMessage.email} />
                        </div>
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="project">Project</label>
                        <input onChange={onInputChange} autoComplete="off" type="text" name="project" value={contactMessage.project} />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="message">Summary</label>
                        <textarea onChange={onTextAreaChange} value={contactMessage.message} name="message" cols={30} rows={10}></textarea>
                    </div>
                    <div className="buttonGroup">
                        <SButton>Send Message</SButton>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default OldContact