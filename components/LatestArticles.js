import React, { useState } from 'react'
import Image from 'next/image';
import styles from './latestarticles.module.css'
import Link from 'next/link'
import LatestArticle from './LatestArticle';
import { Hidden } from '@mui/material';
import { ChevronRight, ChevronLeft } from 'react-feather';

const Content = (articles) => {
  const content = [];

  for (var i = 0; i < 3; i++) {
    content.push(
      <LatestArticle
      blurb={articles[i].content.content[0].content[0].value}
      key={articles[i].titlePhoto.sys.id}
      date={articles[i].date}
      title={articles[i].title}
      id={articles[i].titlePhoto.sys.id}
      index={i}
      image={articles[i].titlePhoto.fields.file.url}
      />
    )
  }

  return content;
}


const LatestArticles = ({ articles }) => {
  const [currentArticle, setCurrentArticle] = useState(0)

  articles.map(item => {
    item.date = new Date(item.date);
  })

  articles = articles.sort((a, b) => b.date - a.date).slice(0, 3)

  const clickHandler = (e, index) => {
    e.preventDefault();

    if (index <= 3 && index >= 0) {
      setCurrentArticle(index);
      const targetElement = document.getElementById(`${index}`);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target element smoothly
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>latest articles</h1>
      <div className={styles.articleContainer}>
        {Content(articles)}
      </div>
    </div>
  )
}

export default LatestArticles
