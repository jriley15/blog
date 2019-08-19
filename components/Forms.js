import React from "react"

const Forms = () => {
  return (
    <form name="contactForm" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message" />
    </form>
  )
}

export default Forms
