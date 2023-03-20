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

const TwoMostRecent = (articles) => {
  const material = ArticleContent.articles;
  const content = [];



  articles.forEach(article => {
      var link = `/articles/${article.id}`;
      console.log(article.titlePhoto)

      content.push(
        <div className={styles.twoMostRecent}>
          <Link href={link} style={{textDecoration: "none", color: "black"}}>
            <img src={article.titlePhoto.fields.file.url} alt="headlinePhoto" className={styles.mostRecentImage}/>
            {/* <p className={styles.mostRecentDate}>{material[i].date}</p>
            <h3 className={styles.mostRecentTitle}>{material[i].title}</h3> */}
          </Link>
        </div>
      )
    })

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

const Articles = ({ articles }) => {
  const mobile = useMediaQuery("(max-width: 800px)")

  return (
    <div className={styles.container}>
      {/* <div className={styles.articleContainerMobile}>
        {MobileContent()}
      </div> */}
      <div className={styles.mostRecentArticles}>
        {TwoMostRecent([articles[0], articles[1]])}
      </div>
      {/* <div className={styles.olderArticles}>
        {OlderArticles()}
      </div> */}
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
