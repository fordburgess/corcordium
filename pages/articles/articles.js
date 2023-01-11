import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import Logo from '../../media/logo1.png'
import AltLogo from '../../media/AltLogo.png'
import LatestArticle from '../../components/LatestArticle'
import styles from './articles.module.css'
import ArticleContent from '../../temporaryJSONfiles/temporaryArticles.json'
import { useMediaQuery } from '@mui/material'

const MobileContent = () => {
  const content = [];
  ArticleContent.articles.map(item => {
    var link = `/articles/${item.id}`;
    content.push(
        <div className={styles.articleInstanceMobile} key={item.id}>
          <Link href={link} style={{textDecoration: "none", color: "black"}}>
            <img src={item.mainPhoto} alt="headlinePhoto" className={styles.articleImage}/>
            <p className={styles.date}>{item.date}</p>
            <h3 className={styles.title}>{item.title}</h3>
          </Link>
        </div>
    )
  })
  return content;
}

const TwoMostRecent = () => {
  const material = ArticleContent.articles;
  const content = [];

  for (var i = 0; i <= 1; i++) {
    var link = `/articles/${material[i].id}`;
    content.push(
      <div className={styles.twoMostRecent} key={i}>
        <Link href={link} style={{textDecoration: "none", color: "black"}}>
          <img src={material[i].mainPhoto} alt="headlinePhoto" className={styles.mostRecentImage}/>
          <p className={styles.mostRecentDate}>{material[i].date}</p>
          <h3 className={styles.mostRecentTitle}>{material[i].title}</h3>
        </Link>
      </div>
    )
  }

  return content;
}

const OlderArticles = () => {
  const material = ArticleContent.articles;
  const content = [];

  for (var i = 2; i < material.length; i++) {
    var link = `/articles/${material[i].id}`;

    content.push(
      <div className={styles.olderArticleContainer} key={i}>
        <Link href={link} style={{textDecoration: "none", color: "black"}}>
          <img src={material[i].mainPhoto} alt="headlinePhoto" className={styles.olderArticlesImage}/>
          <p className={styles.olderArticlesDate}>{material[i].date}</p>
          <h3 className={styles.olderArticlesTitle}>{material[i].title}</h3>
        </Link>
      </div>
    )
  }

  return content;
}

const Articles = () => {
  const mobile = useMediaQuery("(max-width: 800px)")

  return (
    <div className={styles.container}>
      <div className={styles.articleContainerMobile}>
        {MobileContent()}
      </div>
      <div className={styles.mostRecentArticles}>
        {TwoMostRecent()}
      </div>
      <div className={styles.olderArticles}>
        {OlderArticles()}
      </div>
    </div>
  )
}

export default Articles
