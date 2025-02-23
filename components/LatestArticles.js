import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import styles from './latestarticles.module.css'
import LatestArticle from './LatestArticle';

const LatestArticles = ({ articles }) => {
  const [currentArticle, setCurrentArticle] = useState(0)

  articles.map(item => {
    item.date = new Date(item.date);
  })

  var articlesSorted = articles.sort((a, b) => b.date - a.date).slice(0, 3)

  const scrollToArticle = (index) => {
    if (index >= 0 && index <= 2) {
      const container = document.getElementById("article-container");
      const articleWidth = container.clientWidth;
      const newPosition = index * articleWidth;

      container.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      })

      setCurrentArticle(index);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>latest articles</h1>
      <div className={styles.articleContainer} id="article-container">
          {
            articlesSorted.slice(0, 3).map((article, index) => {
              console.log(article.sell)
              return (
                <React.Fragment key={index}>
                  {
                    currentArticle > 0 && (
                      <Image
                        onClick={() => scrollToArticle(currentArticle - 1)}
                        src="/media/chevron-left.png"
                        height={35}
                        width={35}
                        alt="chevron-left"
                        className={styles.chevronLeft}
                        style={{ zIndex: 999 }}
                      />
                    )
                  }
                  <LatestArticle
                    blurb={article.sell}
                    key={article.titlePhoto.sys.id}
                    date={article.date}
                    title={article.title}
                    id={article.titlePhoto.sys.id}
                    index={index}
                    image={article.titlePhoto.fields.file.url}
                  />
                  {
                    currentArticle < 2 && (
                      <Image
                        onClick={() => scrollToArticle(currentArticle + 1)}
                        src="/media/chevron-right.png"
                        height={35}
                        width={35}
                        alt="chevron-right"
                        className={styles.chevronRight}
                      />
                    )
                  }
                </React.Fragment>
              )
            })
          }
      </div>
    </div>
  )
}

export default LatestArticles
