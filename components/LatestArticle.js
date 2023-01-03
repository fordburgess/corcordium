import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from "./latestarticle.module.css"

const LatestArticle = (props) => {
  const router = useRouter();
  console.log(props)

  var path = `/articles/${props.id}`

  return (
    <div className={styles.container}>
      <Link href={path} className={styles.link}>
        <img src={props.image} alt="article photo" className={styles.image}/>
        <p className={styles.date}>{props.date}</p>
        <div style={{width: "100%"}}>
          <h3 className={styles.title}>{props.title}</h3>
        </div>
      </Link>
    </div>
  )
}

export default LatestArticle
