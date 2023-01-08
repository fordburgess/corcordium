import React from 'react';
import styles from './article.module.css';
import Image from 'next/image';
import Articles from '../../temporaryJSONfiles/temporaryArticles.json';
import Logo from '../../media/logo1.png';
import parse, { domToReact } from 'html-react-parser';

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

  const options = {
    replace: ({ attribs, children }) => {
      if (!attribs) {
        return;
      }

//       if (attribs.id === 'main') {
//         return <h1 style={{ fontSize: 42 }}>{domToReact(children, options)}</h1>;
//       }
//
//       if (attribs.class === 'prettify') {
//         return (
//           <span style={{ color: 'hotpink' }}>
//             {domToReact(children, options)}
//           </span>
//         );
//       }
    }
  }

  var text = parse(article.text, options)



  return (
    <div className={styles.container}>
      <div className={styles.articleHeader}>
        <img src={article.mainPhoto} alt="mainPhoto" className={styles.mainPhoto}/>
        <h1 className={styles.articleTitle}>{article.title}</h1>
        <h3 className={styles.articleSubtitle}>Leelou Reboh</h3>
        <h4 className={styles.articleDate}>{article.date}</h4>
      </div>
      <div className={styles.textContainer}>
        {text}
      </div>
    </div>
  )
}

export default Article
