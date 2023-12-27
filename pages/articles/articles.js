import React from 'react'
import Link from "next/link"
import LatestArticle from '../../components/LatestArticle'
import styles from './articles.module.css'
import dateFormat, { masks } from "dateformat";
import { useMediaQuery } from '@mui/material'
var contentful = require("contentful")

const MobileContent = (articles) => {
  const content = [];
  articles.map(article => {
    var link = `/articles/${article.titlePhoto.sys.id}`;

    content.push(
      <div className={styles.articleInstanceMobile} key={link}>
        <Link href={link} style={{textDecoration: "none", color: "black"}}>
          <img src={article.titlePhoto.fields.file.url} alt="headlinePhoto" className={styles.articleImage}/>
          <p className={styles.date}>{dateFormat(Date.parse(article.date), "dd/mm/yyyy")}</p>
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
      <div className={styles.twoMostRecent} key={link}>
        <Link href={link} style={{textDecoration: "none", color: "#000000"}}>
          <img src={article.titlePhoto.fields.file.url} alt="headlinePhoto" className={styles.mostRecentImage}/>
          <p className={styles.mostRecentDate}>{dateFormat(Date.parse(article.date), "dd/mm/yyyy")}</p>
          <h3 className={styles.mostRecentTitle}>{article.title}</h3>
        </Link>
      </div>
    )
  })

  return content;
}

const OlderArticles = (articles) => {
  const content = [];

  articles.forEach(article => {
    var link = `/articles/${article.titlePhoto.sys.id}`;

    content.push(
      <div className={styles.olderArticleContainer} key={link}>
        <Link href={link} style={{textDecoration: "none", color: "#000000"}}>
          <img src={article.titlePhoto.fields.file.url} alt="headlinePhoto" className={styles.olderArticlesImage}/>
          <p className={styles.olderArticlesDate}>{dateFormat(Date.parse(article.date), "dd/mm/yyyy")}</p>
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
      data.push(item.fields);
    })
  })

  data.map(item => {
    item.date = new Date(item.date);
  })

  data.sort((a, b) => b.date - a.date)

  return {
    articles: data
  }
}

export default Articles
