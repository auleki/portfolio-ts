import React, { useState } from "react"
import { ContactMessageType } from "../../global"
import SectionTitle from "../../layout/SectionTitle"
import { PageContainer, SButton, SContact } from "../styledComponents"
import { motion } from "framer-motion"
import { pageVariants } from "../constants"

const Contact = () => {
  const [contactMessage, setContactMessage] = useState<ContactMessageType>({
    name: "",
    email: "",
    project: "",
    message: "",
  })

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setContactMessage({ ...contactMessage, [e.currentTarget.name]: e.currentTarget.value })
  }

  // Type '(e: React.FormEvent<HTMLInputElement>) => void' is not assignable to type 'ChangeEventHandler<HTMLTextAreaElement>'.
  // Types of parameters 'e' and 'event' are incompatible.
  // Type 'ChangeEvent<HTMLTextAreaElement>' is not assignable to type 'FormEvent<HTMLInputElement>'.
  // Types of property 'currentTarget' are incompatible.
  // Type 'EventTarget & HTMLTextAreaElement' is not assignable to type 'EventTarget & HTMLInputElement'.
  // Type 'EventTarget & HTMLTextAreaElement' is missing the following properties from type 'HTMLInputElement': accept, align, alt, capture, and 26 more.  

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
    <PageContainer>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <SContact>
          <SectionTitle title="Contact Me" description="Get in touch with me" />
          <section className="container">
            <div className="actions">
              <section className="action">
                <h1 className="icon">C</h1>
                <div className="detail">
                  <h2>Call Me</h2>
                  <p>+2349067340854</p>
                </div>
              </section>
              <section className="action">
                <h1 className="icon">M</h1>
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
        </SContact>
      </motion.div>
    </PageContainer>
  )
}

export default Contact