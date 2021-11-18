import SectionTitle from "../../layout/SectionTitle"
import { PageContainer, SButton, SContact } from "../styledComponents"

const Contact = () => {
  return (
    <PageContainer>
      <SContact>
        <SectionTitle title="Contact Me" description="Get in touch" />
        <section className="container">
          <div className="actions">
            <section className="action">
              <h3 className="icon">C</h3>
              <div className="detail">
                <h2>Call Me</h2>
                <p>+2349067340854</p>
              </div>
            </section>
            <section className="action">
              <h3 className="icon">M</h3>
              <div className="detail">
                <h2>Send an email</h2>
                <p>iamtundegiwa@gmail.com</p>
              </div>
            </section>
          </div>
          <form className="form">
            <div className="row">
              <div className="inputGroup">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
              </div>
              <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" />
              </div>
            </div>
            <div className="inputGroup">
              <label htmlFor="project">Project</label>
              <input type="text" name="project" />
            </div>
            <div className="inputGroup">
              <label htmlFor="message">Message</label>
              <textarea name="message" cols={30} rows={10}></textarea>
            </div>
            <div className="inputGroup">
              <SButton>Send Message</SButton>
            </div>
          </form>
        </section>

      </SContact>
    </PageContainer>
  )
}

export default Contact