import { flexbox } from '@mui/system';
import Link from 'next/link'
import Image from "next/image"
import React, { useState, useEffect } from 'react';
import styles from './instafeed.module.css';
import Instagram from "../media/insta.svg"



const InstaFeed = (props) => {
  var posts = props.posts
  const link = "https://instagram.com/corcordiumarchive"

  var postImages = [];

  for (var i = 0; i < 8; i++) {
    postImages.push(
      <div style={{width: "25%", height: "290px"}}>
        <Link href={props.posts[i].description}>
          <img width={100} height={100} src={props.posts[i].file.url} style={{height: "100%", width: "100%", objectFit: "cover", objectPosition: "top center"}}/>
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h4 className={styles.instaHeader}>For more fashion stories:</h4>
        <Link className={styles.instaLink} href={link} style={{ color: "#000000" }}>
          <h2 className={styles.header}>@corcordiumarchive</h2>
        </Link>
        <div className={styles.mobileFeed}>
          <div style={{ backgroundImage: `url(${posts[0].file.url})`, height: "100%", width: "50%", backgroundSize: "cover"}}></div>
          <div style={{ display: "flex", flexDirection: "column", width: "50%"}}>
            <img src={posts[1].file.url} style={{ height: "50%", width: "100%", objectFit: "cover"}} />
            <img src={posts[2].file.url} style={{ height: "50%", width: "100%", objectFit: "cover"}} />
          </div>
        </div>
        <div className={styles.desktopFeed}>
          {postImages}
        </div>
      </div>
    </div>
  )
}

export default InstaFeed
