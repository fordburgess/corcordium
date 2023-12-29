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
  [BLOCKS.PARAGRAPH]: (node, children) => {
    // Style the regular text here
    return <p style={{ fontSize: "2rem" }}>{children}</p>;
  },
  renderMark:  {
    [MARKS.BOLD]: (text) => <p style={{fontWeight: "900", fontSize: "1.1rem"}}>{text}</p>
  },

}

const Article = ({ article }) => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <p className={styles.articleCategory}>{article.articleCategory}</p>
          <h1 className={styles.articleTitle}>{article.title}</h1>
          <p className={styles.articleAuthor}>By Leelou Reboh</p>
        </div>
        <div className={styles.rightHeader} style={{ backgroundImage: `url(https:${article.headerPhoto.fields.file.url})`}}></div>
      </div>
      <Link href="/articles/all" style={{ textDecoration: "none" }}><button className={styles.backButton}>Back</button></Link>
      <div className={styles.articleHeader}>
      </div>
      <div className={styles.textContainer}>
        {documentToReactComponents(article.content, options)}
      </div>
    </div>
  )
}

export default Article
