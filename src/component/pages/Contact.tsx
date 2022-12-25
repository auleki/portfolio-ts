import React, { useState } from "react"
import SectionTitle from "../../layout/SectionTitle"
import { PageContainer, SContact } from "../styledComponents"
import { motion } from "framer-motion"
import { pageVariants } from "../constants"
import whatsAppImg from "../../assets/whatsapp.png"
import mailImg from "../../assets/mail.png"
import phoneImg from "../../assets/phone.png"

const Contact = () => {
  return (
    <PageContainer fullscreen>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <SContact>
          <SectionTitle title="Contact Me" description="Get in touch with me" />
          <section>
            <div>
              <h2 className="text-4xl">Phone</h2>
              <img src={phoneImg} alt="" />
            </div>
            <div>
              <h2>Mail</h2>
              <img src={mailImg} alt="" />
            </div>
            <div>
              <h2>WhatsApp</h2>
              <img src={whatsAppImg} alt="" />
            </div>
          </section>
        </SContact>
      </motion.div>
    </PageContainer>
  )
}

export default Contact