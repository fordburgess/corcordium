import React, { useState } from 'react';
import styles from './contact.module.css';
import Logo from '../media/logo1.png';
import Instagram from '../media/insta.svg'
import Image from 'next/image';
import Link from 'next/link'
import styled from 'styled-components';
import { sendContactForm } from '../lib/api';
import { on } from 'ramda';

const Contact = () => {
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
    console.log(inputs)
  }

  const onSubmit = async (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id] : e.target.value
    }));
    await sendContactForm(inputs);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.leftContainer}>
            <h2 className={styles.blurb}>
              Freelance fashion writer, stylist and photographer available for editorials and collaborations.
              <br />
              <br />
              Contact me via e-mail or the form below!
            </h2>
          </div>
          <div className={styles.rightContainer}>
            <h2 className={styles.email}>
              Email
            </h2>
            <p className={styles.emailAddress}>
              leeloureboh.<strong style={{textDecoration: "underline"}}>corcordium@gmail.com</strong>
            </p>
            <form className={styles.contactForm} >
              <input type="text" id="name" value={inputs.name} onChange={handleChange} placeholder='Name'/>
              <input type="email" id="email" value={inputs.email} onChange={handleChange} placeholder='Email'/>
              <textarea type="text" id="message" value={inputs.message} onChange={handleChange} placeholder='Message'/>
            </form>
            <button className={styles.submitButton} onClick={onSubmit}>Send</button>
          </div>
        </div>
        <div className={styles.miniFooter}>
        <Link href="/about" className={styles.link}>About</Link>
            <a href="https://www.instagram.com/corcordium.archive/" className={styles.link}>
              <Image href="" src={Instagram} alt="instagram" style={{height: 37, width: 37}}/>
            </a>
            <a href="" className={styles.link}>Share</a>
        </div>
      </div>
    </>
  )
}

export default Contact
