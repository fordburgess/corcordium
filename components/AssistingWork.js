import React, { useState } from 'react'
import styles from "./AssistingWork.module.css"
import Image from 'next/image'
import Link from 'next/link'

const AssistingWork = ({ info }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const decrementImage = () => {
    if (activeIndex > 0) setActiveIndex(prev => prev - 1);
  }

  const incrementImage = () => {
    if (activeIndex < info.length - 1) setActiveIndex(prev => prev + 1);
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageCarousel}>
        <Image style={{ opacity: activeIndex == 0 && 0 }} src="/media/chevron-left.png" height={40} width={40} alt="chevron-left" className={styles.chevron} onClick={() => decrementImage()}/>
        <img src={info[activeIndex].images[0]} className={styles.carouselImage} alt="image1"/>
        <img src={info[activeIndex].images[1]} className={styles.carouselImage} alt="image2" />
        <Image style={{ opacity: activeIndex == 2 && 0 }} src="/media/chevron-right.png" height={40} width={40} alt="chevron-right" className={styles.chevron} onClick={() => incrementImage()}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.projectTitle}>{info[activeIndex].title}</h1>
        <p className={styles.projectDescription}>{info[activeIndex].description}</p>
        <Link href={info[activeIndex].link} style={{ textDecoration: 'none', color: "#000000" }}>
          <p className={styles.projectDescription}>{info[activeIndex].link}</p>
        </Link>
      </div>
    </div>
  )
}

export default AssistingWork
