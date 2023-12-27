import React from 'react';
import styles from './article.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { getArticles } from '../../lib/getArticles.js';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import dateFormat, { masks } from "dateformat";
var contentful = require("contentful")
var articles = await getArticles();


export const getStaticPaths = async () => {
  const client = contentful.createClient({
    space: "8nj05hr9nsqo",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN
  })

  const data = [];

  await client.getEntries()
  .then(function(res) {
    res.items.forEach(item => {
      data.push(item.fields);
    })
  })

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

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width / 2}
          alt={node.data.target.fields.description}
          style={{objectFit: "cover", objectPosition: "center"}}
        />
      );
    }
  },
  renderMark:  {
    [MARKS.BOLD]: (text) => <p style={{fontWeight: "700", fontSize: "1.2rem"}}>{text}</p>
  },
}

const Article = ({ article }) => {

  return (
    <div className={styles.container}>
      <img src={article.titlePhoto.fields.file.url} alt="mainPhoto" className={styles.mainPhoto}/>
      <Link href="/articles/articles" style={{ textDecoration: "none" }}><button className={styles.backButton}>Back</button></Link>
      <div className={styles.articleHeader}>
        <h1 className={styles.articleTitle}>{article.title}</h1>
        <h3 className={styles.articleSubtitle}>Leelou Reboh</h3>
        <h4 className={styles.articleDate}>{dateFormat(Date.parse(article.date), "dd/mm/yyyy")}</h4>
      </div>
      <div className={styles.textContainer}>
        {documentToReactComponents(article.content, options)}
      </div>
    </div>
  )
}

export default Article
