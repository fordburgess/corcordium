import { flexbox } from '@mui/system';
import Link from 'next/link'
import React, { useState, useEffect } from 'react';

import styles from './instafeed.module.css';



const InstaFeed = () => {
  const [posts, setPosts] = useState([]);
  const [post1, setPost1] = useState([])
  const [post2, setPost2] = useState('');
  const [post3, setPost3] = useState('');

  useEffect(() => {

    async function fetchPosts() {
      await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url,timestamp,username&access_token=${process.env.NEXT_PUBLIC_INSTA_TOKEN}`)
      .then(res => res.json())
      .then(res => {
        setPosts(res.data)
        setPost1(res.data[0].media_url)
        setPost2(res.data[1].media_url)
        setPost3(res.data[2].media_url)
      });

    }
    fetchPosts();
  }, [])


  const link = "https://www.instagram.com/corcordium.archive/"



  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h4 className={styles.header}>For more fashion stories</h4>
        <Link href={link} style={{ color: "#000000" }}><h2 className={styles.header}>@corcordium.archive</h2></Link>
        <div className={styles.mobileFeed}>
          <div style={{ backgroundImage: `url(${post1})`, height: "100%", width: "50%", backgroundSize: "cover"}}></div>
          <div style={{ display: "flex", flexDirection: "column", width: "50%"}}>
            <img src={post2} style={{ height: "50%", width: "100%", objectFit: "cover"}} />
            <img src={post3} style={{ height: "50%", width: "100%", objectFit: "cover"}} />
          </div>
        </div>
        <div className={styles.desktopFeed}>

        </div>
      </div>
    </div>
  )
}

export default InstaFeed
