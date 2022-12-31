import React from 'react'
import Image from 'next/image'
import styles from "./latestarticle.module.css"

const LatestArticle = (props) => {


  return (
    <div className={styles.container}>
      <p className={styles.date}>{props.date}</p>
      <h3 className={styles.title}>{props.title}</h3>
    </div>
  )
}

export default LatestArticle
