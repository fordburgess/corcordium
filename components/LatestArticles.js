import React, { useState } from 'react'
import Image from 'next/image';
import styles from './latestarticles.module.css'
import Link from 'next/link'
import LatestArticle from './LatestArticle';
import { Hidden } from '@mui/material';
import { ChevronRight, ChevronLeft } from 'react-feather';

const Content = (articles) => {
  const content = [];

  for (var i = 0; i < 3; i++) {
    content.push(
      <LatestArticle
      blurb={articles[i].content.content[1].content[0].value.split(".")[0]}
      key={articles[i].titlePhoto.sys.id}
      date={articles[i].date}
      title={articles[i].title}
      id={articles[i].titlePhoto.sys.id}
      index={i}
      image={articles[i].titlePhoto.fields.file.url}
      />
    )
  }

  return content;
}


const LatestArticles = ({ articles }) => {
  const [currentArticle, setCurrentArticle] = useState(0)

  articles.map(item => {
    item.date = new Date(item.date);
  })

  articles = articles.sort((a, b) => b.date - a.date).slice(0, 3)

  const scrollToArticle = (index) => {

    if (index > 0 && index < 3) {
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

  console.log(articles)

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>latest articles</h1>
      <div className={styles.articleContainer} id="article-container">
          {/* {Content(articles)} */}
          {
            Object.entries(articles).slice(0, 3).map(([key, value], index) => {
              return (
                // <div key={index} style={{ height: "100%", width: "100%", position: 'relative' }}>
                <>
                  {
                    index > 0 && (
                      <Link href="#" onClick={() => scrollToArticle(currentArticle - 1)}>
                        <Image src="/media/chevron-left.png" height={35} width={35} alt="chevron-left" className={styles.chevronLeft}/>
                      </Link>
                    )
                  }
                    <LatestArticle
                      blurb={value.content.content[1].content[0].value.split(".")[0]}
                      key={value.titlePhoto.sys.id}
                      date={value.date}
                      title={value.title}
                      id={value.titlePhoto.sys.id}
                      index={index}
                      image={value.titlePhoto.fields.file.url}
                    />
                    {
                      index < 2 && (
                        <Link href="#" onClick={() => scrollToArticle(currentArticle + 1)}>
                          <Image src="/media/chevron-right.png" height={35} width={35} alt="chevron-right" className={styles.chevronRight}/>
                        </Link>
                      )
                    }
                  </>
                // </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default LatestArticles
