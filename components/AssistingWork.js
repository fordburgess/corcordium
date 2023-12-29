import React, { useState } from 'react'
import styles from "./AssistingWork.module.css"
import Image from 'next/image'
import Link from 'next/link'

const AssistingWork = ({ title, description, link, images}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const decrementImage = () => {
    if (activeIndex > 0) setActiveIndex(prev => prev - 1);
  }

  const incrementImage = () => {
    if (activeIndex < images.length - 1) setActiveIndex(prev => prev + 1);
  }

  return (
    <div className={styles.container}>
        <div className={styles.imageCarousel}>
          <Image src="/media/chevron-left.png" height={50} width={50} alt="chevron-left" className={styles.chevron} onClick={() => decrementImage()}/>
          <img src={images[activeIndex]} className={styles.carouselImage} alt="image"/>
          <Image src="/media/chevron-right.png" height={50} width={50} alt="chevron-right" className={styles.chevron} onClick={() => incrementImage()}/>
        </div>
      <div className={styles.textContainer}>
        <h1 className={styles.projectTitle}>{title}</h1>
        <p className={styles.projectDescription}>{description}</p>
        <Link href={link} style={{ textDecoration: 'none', color: "#000000" }}>
          <p className={styles.projectDescription}>{link}</p>
        </Link>
      </div>
    </div>
  )
}

export default AssistingWork
