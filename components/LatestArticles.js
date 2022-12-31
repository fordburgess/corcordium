import React from 'react'
import styles from './latestarticles.module.css'
import LatestArticle from './LatestArticle';
import Articles from '../temporaryJSONfiles/temporaryArticles.json'


const LatestArticles = () => {

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Latest Articles</h3>
      <div className={styles.subContainer}>
      {Articles.articles.map(x => {
        return (
            <LatestArticle title={x.title} date={x.date} key={x}/>
          )
      })}
      </div>
    </div>
  )
}

export default LatestArticles
