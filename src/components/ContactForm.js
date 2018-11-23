import React, { Component } from 'react'
import Input from './Input'
import Textarea from './Textarea'

class ContactForm extends Component {
  render() {
    return (
      <form method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field" name="contact">
        <Input type="hidden" name="bot-field" />
        <Input name="name" label={true} required={true} />
        <Input name="email" type="email" label={true} required={true} />
        <Textarea name="message" id="message" rows="20" required={true} label={true} />
        <Input name="submit" type="submit" label={false} value="Send" />
      </form>
    );
  }
}

export default ContactForm