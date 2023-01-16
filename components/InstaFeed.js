import { flexbox } from '@mui/system';
import Link from 'next/link'
import React, { useState, useEffect } from 'react';

import styles from './instafeed.module.css';



const InstaFeed = (props) => {
  var posts = props.posts;

  console.log(posts)

  const link = "https://instagram.com/corcordium.archive"

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h4 className={styles.header}>For more fashion stories</h4>
        <Link href={link} style={{ color: "#000000" }}><h2 className={styles.header}>@corcordium.archive</h2></Link>
        <div className={styles.mobileFeed}>
          <div style={{ backgroundImage: `url(${posts[0].media_url})`, height: "100%", width: "50%", backgroundSize: "cover"}}></div>
          <div style={{ display: "flex", flexDirection: "column", width: "50%"}}>
            <img src={posts[1].media_url} style={{ height: "50%", width: "100%", objectFit: "cover"}} />
            <img src={posts[2].media_url} style={{ height: "50%", width: "100%", objectFit: "cover"}} />
          </div>
        </div>
        <div className={styles.desktopFeed}>

        </div>
      </div>
    </div>
  )
}

export default InstaFeed
