import React from 'react';
import styles from './article.module.css';
import Image from 'next/image';
import Articles from '../../temporaryJSONfiles/temporaryArticles.json';
import Logo from '../../media/logo1.png';

export const getStaticPaths = async () => {
  const paths = Articles.articles.map(item => {
    console.log(item);
    return {
      params: { id: item.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const article = Articles.articles[id];

  return {
    props: {
      article
    }
  }
}

const Article = ({ article }) => {
  console.log(Articles.articles)
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src={Logo} alt="logo" className={styles.logo} />
        <h3>Blog</h3>
      </div>
      <div className={styles.articleHeader}>
        <img src={article.mainPhoto} alt="mainPhoto" className={styles.mainPhoto}/>
        <h1 className={styles.articleTitle}>{article.title}</h1>
        <h4 className={styles.articleSubtitle}>Leelou Reboh - {article.date}</h4>
      </div>
      <div className={styles.textContainer}>

      </div>
    </div>
  )
}

export default Article
