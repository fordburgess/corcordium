import React from 'react'
import styles from './latestarticles.module.css'
import Link from 'next/link'
import LatestArticle from './LatestArticle';
import Articles from '../temporaryJSONfiles/temporaryArticles.json'

const Content = () => {
  const content = [];
  for (var i = 0; i <= 2; i++) {
    content.push(
      <LatestArticle
      date={Articles.articles[i].date}
      title={Articles.articles[i].title}
      image={Articles.articles[i].mainPhoto}
      id={Articles.articles[i].id}
      />
    )
  }
  return content;
}


const LatestArticles = () => {
  console.log(Content());

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.header}>Latest Articles</h2>
        <div className={styles.articleContainer}>
          {Content()}
        </div>
      </div>
      <Link href="/articles/articles" className={styles.link}><p>See All Articles</p></Link>
    </>
  )
}

export default LatestArticles
