import React from 'react'
import styles from './latestarticles.module.css'
import Link from 'next/link'
import LatestArticle from './LatestArticle';

const Content = (articles) => {
  const content = [];

  for (var i = 0; i < 4; i++) {
    content.push(
      <LatestArticle
      key={articles[i].titlePhoto.sys.id}
      date={articles[i].date}
      title={articles[i].title}
      id={articles[i].titlePhoto.sys.id}
      image={articles[i].titlePhoto.fields.file.url}
      />
    )
  }

  return content;
}


const LatestArticles = ({ articles }) => {
  articles.map(item => {
    item.date = new Date(item.date);
  })

  articles.sort((a, b) => b.date - a.date)

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.header}>Latest Articles</h2>
        <div className={styles.articleContainer}>
          {Content(articles)}
        </div>
      </div>
      <Link href="/articles/articles" className={styles.link}><p>See All Articles</p></Link>
    </>
  )
}

export default LatestArticles
