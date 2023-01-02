import React from 'react'
import { GetStaticProps } from 'next';
import Articles from '../../temporaryJSONfiles/temporaryArticles.json';

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
    <div>
      {article.title}
    </div>
  )
}

export default Article
