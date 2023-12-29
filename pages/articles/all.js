import React, { useState } from 'react'
import Image from 'next/image'
import Link from "next/link"
import LatestArticle from '../../components/LatestArticle'
import styles from './articles.module.css'
import dateFormat, { masks } from "dateformat";
import { useMediaQuery } from '@mui/material'
var contentful = require("contentful")

const Articles = ({ articles }) => {

  return (
    <div className={styles.container}>
      <p className={styles.title}>writing</p>
      <div className={styles.articlesWrapper}>
        {
          articles.map((article) => {
            var titleImageLink = "https://" + article.titlePhoto.fields.file.url;
            var formattedDate = dateFormat(Date.parse(article.date), "dd/mm/yyyy").split("/");
            var monthYear = formattedDate[1] + "-" + formattedDate[2].slice(2);
            var blurb = article.content.content[2].content[0].value.split(".")[0];
            var link = `/articles/${article.titlePhoto.sys.id}`;

            return (
              <div key={article.title} className={styles.articleInstance}>
                <Link href={link} key={article.titlePhoto.sys.id} className={styles.articleLink}>
                  <img src={titleImageLink} className={styles.articlePhoto} alt="article"/>
                  <p className={styles.articleCategory}>{article.articleCategory}</p>
                  <p className={styles.articleTitle}>{article.title}</p>
                  <p style={{ fontStyle: "italic" }} className={styles.articleTitle}>{monthYear}</p>
                  <p className={styles.blurb}>{blurb}</p>
                </Link>
              </div>
            )
          })
        }
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
