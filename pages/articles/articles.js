import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import Logo from '../../media/logo1.png'
import AltLogo from '../../media/AltLogo.png'
import LatestArticle from '../../components/LatestArticle'
import styles from './articles.module.css'
import ArticleContent from '../../temporaryJSONfiles/temporaryArticles.json'
import { useMediaQuery } from '@mui/material'
var contentful = require("contentful")

const MobileContent = (articles) => {
  const content = [];
  articles.map(article => {
    var link = `/articles/${article.titlePhoto.sys.id}`;
    content.push(
        <div className={styles.articleInstanceMobile} >
          <Link href={link} style={{textDecoration: "none", color: "black"}}>
            <img src={article.titlePhoto.fields.file.url} alt="headlinePhoto" className={styles.articleImage}/>
            <p className={styles.date}>{article.date}</p>
            <h3 className={styles.title}>{article.title}</h3>
          </Link>
        </div>
    )
  })
  return content;
}

const TwoMostRecent = (articles) => {
  const content = [];

  articles.forEach(article => {
      var link = `/articles/${article.titlePhoto.sys.id}`;

      content.push(
        <div className={styles.twoMostRecent}>
          <Link href={link} style={{textDecoration: "none", color: "#000000"}}>
            <img src={article.titlePhoto.fields.file.url} alt="headlinePhoto" className={styles.mostRecentImage}/>
            <p className={styles.mostRecentDate}>{article.date}</p>
            <h3 className={styles.mostRecentTitle}>{article.title}</h3>
        </Link>
          </div>
      )
    })

  return content;
}

const OlderArticles = (articles) => {
  const material = ArticleContent.articles;
  const content = [];

  articles.forEach(article => {
    var link = `/articles/${article.titlePhoto.sys.id}`;

    content.push(
      <div className={styles.olderArticleContainer}>
        <Link href={link} style={{textDecoration: "none", color: "#000000"}}>
          <img src={article.titlePhoto.fields.file.url} alt="headlinePhoto" className={styles.olderArticlesImage}/>
          <p className={styles.olderArticlesDate}>{article.date}</p>
          <h3 className={styles.olderArticlesTitle}>{article.title}</h3>
        </Link>
      </div>
    )
  })

  return content;
}

const Articles = ({ articles }) => {
  const mobile = useMediaQuery("(max-width: 800px)")
  var older = articles.slice(2);
  console.log(articles)

  return (
    <div className={styles.container}>
      <div className={styles.articleContainerMobile}>
        {MobileContent(articles)}
      </div>
      <div className={styles.mostRecentArticles}>
        {TwoMostRecent([articles[0], articles[1]])}
      </div>
      <div className={styles.olderArticles}>
        {OlderArticles(older)}
      </div>
    </div>
  )
}

Articles.getInitialProps = async (ctx) => {
  var data = [];

  const client = contentful.createClient({
    space: "8nj05hr9nsqo",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN
  })

  await client.getEntries()
  .then(function(res) {
    res.items.forEach(item => {
      data.push(item.fields)
    })
  })
  // .then(() => console.log(data))

  return {
    articles: data
  }
}

export default Articles
