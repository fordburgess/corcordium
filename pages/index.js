import React from 'react'
import styles from './landingPage.module.css'
import Image from 'next/image'

const TextContainer = ({ logo }) => {
  return (
    <div className={styles.textContainer}>
      <img src={`/media/${logo}`} alt="logo" className={styles.logo}/>
      <h1 className={styles.greeting}>hi! welcome to corcordium!</h1>
    </div>
  )
}

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video autoPlay muted loop>
          <source src="/media/styling-video.mp4" type="video/mp4" />
        </video>
        <div className={styles.mobileText}>
          <img src="/media/logo-small-white.png" alt="logo" className={styles.logo}/>
          <h1 className={styles.greeting}>hi! welcome to<br /> corcordium!</h1>
        </div>
        <div>
          <Image src="/media/down-arrow-white.png" alt="arrow" height={150} width={150} className={styles.downArrowMobile}/>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.desktopGreeting}>
          <Image className={styles.logoDesktop} src="/media/logo-small.png" height={150} width={150}/>
          <h1 className={styles.greetingHeader}>hi! welcome to<br /> corcordium!</h1>
        </div>
        <Image src="/media/down-arrow.png" alt="arrow" height={150} width={150} className={styles.downArrowDesktop}/>
        <div className={styles.linksContainer}>
          <p>fashion</p>
          <p>journalism</p>
          <p>photography</p>
        </div>
      </div>
    </div>
  )
}

export default index
