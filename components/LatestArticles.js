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
      blurb={articles[i].content.content[0].content[0].value}
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

  console.log(articles)

  const clickHandler = (e, index) => {
    e.preventDefault();
    console.log(index);

    if (index <= 3 && index >= 0) {
      setCurrentArticle(index);
      const targetElement = document.getElementById(`${index}`);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element smoothly
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Hidden mdDown>
          <h1 className={styles.header}>latest articles</h1>
        </Hidden>
        {/* <Hidden mdUp>
          <h1 className={styles.header}>LATEST</h1>
        </Hidden>
        <Hidden mdUp>
          <a href="#" onClick={(e) => clickHandler(e, currentArticle - 1)}><ChevronLeft className={styles.chevron} style={{ left: '-5', color: currentArticle == 0 ? "#D0D0D0" : "#000000" }} /></a>
          <a href="#" onClick={(e) => clickHandler(e, currentArticle + 1)}><ChevronRight className={styles.chevron} style={{ right: '-5', color: currentArticle == 3 ? "#D0D0D0" : "#000000" }} /></a>
        </Hidden> */}
        <div className={styles.articleContainer}>
          {Content(articles)}
        </div>
      </div>
      {/* <Link href="/articles/articles" className={styles.link}><p>See All Articles</p></Link> */}
    </>
  )
}

export default LatestArticles
