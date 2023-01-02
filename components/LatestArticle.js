import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import styles from "./latestarticle.module.css"

const LatestArticle = (props) => {
  const router = useRouter();
  console.log(router)

  return (
    <div className={styles.container}>
      <img src={props.image} alt="article photo" className={styles.image}/>
      <p className={styles.date}>{props.date}</p>
      <div style={{width: "100%"}}>
        <h3 className={styles.title}>{props.title}</h3>
      </div>
    </div>
  )
}

export default LatestArticle
