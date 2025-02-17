import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from "./latestarticle.module.css"
import dateFormat, { masks } from "dateformat";
import cx from "classnames"
import { Hidden } from '@mui/material';

const LatestArticle = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null)

  var path = `/articles/${props.id}`
  var blurb = props.blurb;

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight * 0.75 && rect.bottom > 0) {
          setIsVisible(true);
        }
        else {
          setIsVisible(false);
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  var formattedDate = dateFormat(Date.parse(props.date), "dd/mm/yyyy").split("/");
  var monthYear = formattedDate[1] + "-" + formattedDate[2].slice(2);

  return (
    <div className={styles.container} id={props.index}>
      <Link href={path} className={styles.link}>
        <img src={props.image} alt="article photo" className={cx(styles.image, isVisible && styles.visible)} ref={imageRef} />
        <h1 className={styles.title}>{props.title}</h1>
        <h2 className={styles.date}>{monthYear}</h2>
        <p className={styles.blurb}>{blurb}</p>
      </Link>
    </div>
  )
}

export default LatestArticle
