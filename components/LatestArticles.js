import React from 'react'
import styles from './latestarticles.module.css'
import LatestArticle from './LatestArticle';
import Articles from '../temporaryJSONfiles/temporaryArticles.json'

const Content = () => {
  const content = [];
  for (var i = 0; i <= 3; i++) {
    content.push(
      <LatestArticle
      date={Articles.articles[i].date}
      title={Articles.articles[i].title}
      image={Articles.articles[i].mainPhoto}
      />
    )
  }
  return content;
}


const LatestArticles = () => {

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Latest Articles</h2>
      <div className={styles.subContainer}>
      <div className={styles.articleContainer}>
        {Content()}
      </div>
      </div>
    </div>
  )
}

export default LatestArticles
