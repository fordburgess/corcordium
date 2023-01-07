import React from 'react';
import styles from './contact.module.css';
import Logo from '../media/logo1.png';
import Instagram from '../media/insta.svg'
import Image from 'next/image';
import Link from 'next/link'
import styled from 'styled-components';

const contact = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
         <Link href="/"><Image src={Logo} alt="logo" className={styles.logo}/></Link>
          <h3>Contact</h3>
        </div>
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
            <form className={styles.contactForm}>
              <input type="text" placeholder='Name'/>
              <input type="text" placeholder='Email'/>
              <textarea type="text" placeholder='Message'/>
            </form>
            <button className={styles.submitButton}>Send</button>
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

export default contact
