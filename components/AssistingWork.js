import React from 'react'
import styles from "./AssistingWork.module.css"
import Image from 'next/image'
import Link from 'next/link'

const AssistingWork = ({ title, description, link, images}) => {

  return (
    <div className={styles.container}>
      <div className={styles.imageCarousel}>
        {
          images.map(image => {
            return (
              <img src={image} className={styles.carouselImage} alt="image"/>
            )
          })
        }
      </div>
      <h1 className={styles.projectTitle}>{title}</h1>
      <p className={styles.projectDescription}>{description}</p>
      <Link href={link} style={{ textDecoration: 'none', color: "#000000" }}>
        <p className={styles.projectDescription}>{link}</p>
      </Link>
    </div>
  )
}

export default AssistingWork
