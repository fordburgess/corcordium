import React, { useState } from 'react';
import styles from './landingPage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';

const LandingPage = () => {

  const scrollDown = () => {
    var target = document.getElementById("latest-articles");
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className={cx(styles.container)}>
      <div className={styles.videoContainer}>
        <video autoPlay muted loop>
          <source src="/media/styling-video.mp4" type="video/mp4" />
        </video>
        <img className={styles.landingPageImage} src="/media/banshee4.jpg" alt="main-image" />
        <div className={styles.mobileGreeting}>
          <Image className={styles.logoMobile} height={150} width={150} src="/media/logo-small-white.png" alt="logo"/>
          <h1 className={styles.greetingHeader}>hi! welcome to<br /> corcordium!</h1>
        </div>
        <a onClick={() => scrollDown()} className={styles.scrollDown}>
          <Image className={styles.downArrowMobile} height={100} width={70} src="/media/down-arrow-white.png" alt="logo" />
        </a>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.desktopGreeting}>
          <Image className={styles.logoDesktop} src="/media/logo-small.png" height={120} width={120}/>
          <h1 className={styles.greetingHeader}>hi! welcome to<br /> corcordium!</h1>
        </div>
        <a  onClick={() => scrollDown()} className={styles.scrollDown}>
          <Image src="/media/down-arrow.png" alt="arrow" height={150} width={150} className={styles.downArrowDesktop}/>
        </a>
        <div className={styles.linksContainer}>
          <p>fashion</p>
          <p>journalism</p>
          <p>photography</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
