import { flexbox } from '@mui/system';
import Link from 'next/link'
import Image from "next/image"
import React, { useState, useEffect } from 'react';

import styles from './instafeed.module.css';



const InstaFeed = (props) => {
  var posts = props.posts.data
  const link = "https://instagram.com/corcordium.archive"

  var postImages = [];
  // for (var i = 0; i < 8; i++) {
  //   postImages.push(<div style={{width: "25%", height: "290px"}}>
  //   <Link href={posts[i].permalink}>
  //     <Image width={100} height={100} src={posts[i].media_url} style={{height: "100%", width: "100%", objectFit: "cover"}}/>
  //   </Link>
  // </div>)
  // }

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
          {postImages}
        </div>
      </div>
    </div>
  )
}

export default InstaFeed
