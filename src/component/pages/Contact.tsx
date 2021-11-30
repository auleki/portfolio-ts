import { useState } from "react"
import { ContactMessageType } from "../../global"
import SectionTitle from "../../layout/SectionTitle"
import { PageContainer, SButton, SContact } from "../styledComponents"

const Contact = () => {
  const [contactMessage, setContactMessage] = useState<ContactMessageType>({
    name: "",
    email: "",
    project: "",
    message: "",
  })

  const onInputChange = (e: any) => {
    setContactMessage({ ...contactMessage, [e.target.name]: e.target.value })
  }

  const sendMessage = (e: any) => {
    e.preventDefault()
    console.log(contactMessage)
    setContactMessage({ name: '', email: '', project: '', message: '' })
  }

  return (
    <PageContainer>
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
                <input onChange={onInputChange} autoFocus type="text" name="name" value={contactMessage.name} />
              </div>
              <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input onChange={onInputChange} type="text" name="email" value={contactMessage.email} />
              </div>
            </div>
            <div className="inputGroup">
              <label htmlFor="project">Project</label>
              <input onChange={onInputChange} type="text" name="project" value={contactMessage.project} />
            </div>
            <div className="inputGroup">
              <label htmlFor="message">Message</label>
              <textarea onChange={onInputChange} value={contactMessage.message} name="message" cols={30} rows={10}></textarea>
            </div>
            <div className="buttonGroup">
              <SButton>Send Message</SButton>
            </div>
          </form>
        </section>

      </SContact>
    </PageContainer>
  )
}

export default Contact