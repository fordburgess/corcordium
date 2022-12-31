import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './instafeed.module.css';

const InstaFeed = () => {
  const [posts, setPosts] = useState([]);



  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h3 className={styles.header}>For everyday fashion stories</h3>
        {posts.map(({ src, url, id, caption, likes, comments }) => {
            <div className={styles.post} key={id}>
              <Image src={src} alt="post" className={styles.postImage}/>
            </div>
        })}
      </div>
    </div>
  )
}

export default InstaFeed
