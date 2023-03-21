import React from 'react';
import styles from './article.module.css';
import Image from 'next/image';
import Articles from '../../temporaryJSONfiles/temporaryArticles.json';
import Logo from '../../media/logo1.png';
import parse, { domToReact } from 'html-react-parser';
import { getArticles } from '../../lib/getArticles.js';
var contentful = require("contentful")
var articles = await getArticles();


export const getStaticPaths = async () => {
//   const client = contentful.createClient({
//     space: "8nj05hr9nsqo",
//     accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN
//   })
//
//   const data = [];
//
//   await client.getEntries()
//   .then(function(res) {
//     res.items.forEach(item => {
//       data.push(item.fields)
//     })
//   })

  const paths = articles.map(item => {
    return {
      params: { id: item.titlePhoto.sys.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;

  var article = {};

  for (var i = 0; i < articles.length; i++) {
    if (articles[i].titlePhoto.sys.id.toString() == id) {
      article = articles[i];
    }
  }

  return {
    props: {
      article
    }
  }
}

const Article = ({ article }) => {

  const options = {
    replace: ({ attribs, children }) => {
      if (!attribs) {
        return;
      }
    }
  }

  var string = "";

  for (var i = 0; i < article.content.content.length; i++) {
    // string += article.content.content[i].content[0].value;
    if (article.content.content[i].nodeType == "paragraph") {
      string += article.content.content[i].content[0].value;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.articleHeader}>
        <img src={article.titlePhoto.fields.file.url} alt="mainPhoto" className={styles.mainPhoto}/>
        <h1 className={styles.articleTitle}>{article.title}</h1>
        <h3 className={styles.articleSubtitle}>Leelou Reboh</h3>
        <h4 className={styles.articleDate}>{article.date}</h4>
      </div>
      <div className={styles.textContainer}>
        {string}
      </div>
    </div>
  )
}

export default Article
