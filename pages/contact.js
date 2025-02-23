import React, { useState, useRef } from 'react';
import styles from './contact.module.css';
import Logo from '../media/logo1.png';
import Instagram from '../media/insta.svg'
import Image from 'next/image';
import Link from 'next/link'
import styled from 'styled-components';
import { sendContactForm } from '../lib/api';

const Contact = () => {
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const refs = [name, email, message]

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id] : e.target.value
    }))
  }

  const onSubmit = async (e) => {

    setTimeout(() => {
      setInputs((prev) => ({
        ...prev,
        [e.target.id] : e.target.value
      }));
    }, 250);

    if (name.current.value == "" || email.current.value == "" || message.current.value == "") {
      alert("Please fill out all of the boxes")
    }
    else {
      await sendContactForm(inputs);

      setTimeout(() => {
        alert("Thank you for your message! I will get back to you soon :)")
      }, 250);

      setInputs({
        name: "",
        email: "",
        message: "",
      })
    }
  }

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>contact</p>
        <div className={styles.mainContent}>
          <div className={styles.leftContainer}>
            <p className={styles.blurb}>
              hi! thanks for your interest in my work :) feel free to contact me via the form or shoot me an e-mail at <a style={{ color: "#000000" }} href="mailto:leeloureboh.corcordium@gmail.com">leeloureboh.corcordium@gmail.com</a>
            </p>
          </div>
          <div className={styles.rightContainer}>
            <form className={styles.contactForm} >
              <input ref={name} style={{ backgroundColor: "rgb(255, 254, 245)"}} type="text" id="name" value={inputs.name} onChange={handleChange} placeholder='Name'/>
              <input ref={email} style={{ backgroundColor: "rgb(255, 254, 245)"}} type="email" id="email" value={inputs.email} onChange={handleChange} placeholder='Email'/>
              <textarea ref={message} style={{ backgroundColor: "rgb(255, 254, 245)"}} type="text" id="message" value={inputs.message} onChange={handleChange} placeholder='Message'/>
            </form>
            <button className={styles.submitButton} onClick={onSubmit}>SEND</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
