import React from 'react'
import styles from './latestarticles.module.css'


const LatestArticles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h3 className={styles.header}>Latest Articles</h3>
        <div className={styles.posts}>

        </div>
      </div>
    </div>
  )
}

export default LatestArticles
