import React, { Component } from 'react'
import { navigateTo } from "gatsby-link";
import Input from './Input'
import Textarea from './Textarea'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}


class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    human: '',
    error: false
  }

  handleChange = e => {
    console.log('handling change');
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state);

    if(e.target.value == '42') {
      this.setState({
        error: false
      })
    }
  }

  handleFocus = () => {
    console.log('handling focus');
    this.setState({
      error: false,
    })
    console.log(this.state);
  }

  validateForm() {
    if(this.state.human !== '42') {
      this.setState({
        error: true
      })
      return false;
    }else{
      this.setState({
        error: false
      })
      return true;
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;

    const isValid = this.validateForm();

    if(!isValid) {
      return;
    }

    const action = form.getAttribute("action")
    try {
      const response = await fetch('/', {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state
        })
      })
      if(response) {
        try {
          navigateTo(action);
        }catch(err) {
          console.warn(err);
          this.setState({
            error: true
          })
        }

      }
    }catch(err) {
      console.warn(err);
      this.setState({
        error: true
      })
    }



  }
  render() {
    const { error, human, email, name, message } = this.state;
    const hintUrl = 'https://www.google.ca/search?ei=h4cBXJniGIXH_wTstqGoBQ&q=what+is+the+answer+to+life+the+universe+and+everything&oq=what+is+the+answer+to+life+the+universe+and+everything&gs_l=psy-ab.3.0.0i67l4j0l5j0i10i30.6698.13319..14418...5.0..0.91.2230.31......0....1..gws-wiz.......0i71j0i13j0i8i13i30j0i7i10i30j0i10j0i13i30j0i8i13i10i30j0i13i10i30.xCeiAS8tg9Y';
    return (
      <form method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field" name="contact" onSubmit={this.handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <Input
          type="hidden"
          name="bot-field" />
        <Input
          name="name"
          value={name}
          onChange={this.handleChange}
          label="Name" required={true} />
        <Input
          name="email"
          value={email}
          onChange={this.handleChange}
          type="email" label="Email" required={true} />
        <Textarea name="message" id="message" rows="20" required={true} label="Message" value={message} onChange={this.handleChange} />
        <Input
          name="human"
          label="Life, the universe, and everything"
          hint={hintUrl}
          type="text"
          required={true}
          value={human}
          onChange={this.handleChange}
          onFocus={this.handleFocus} />
        {error && renderError()}
        <Input name="submit" type="submit" label={false} value="Send" />
      </form>
    );
  }
}

export default ContactForm

const renderError = () => <div>Sorry, there was an error.</div>