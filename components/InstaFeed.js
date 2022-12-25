import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './instafeed.module.css';

const InstaFeed = () => {
  const [posts, setPosts] = useState([]);

  const instaId = "56382033902";
  const thumbnailWidth = 480;
  const photoCount = 5;

  useEffect(() => {
    const getPosts = async () => {
      const options = {
        method: 'GET',
        mode: 'no-cors',
      };
      const res = await fetch(
        `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"${instaId}","first":${photoCount},"after":null}`
      );

      const { data } = await res.json();
      const photos = data.user.edge_owner_to_timeline_media.edges.map(
        ({ node }) => {
          const id = { node };
          const likes = node.edge_media_preview_like.count;
          const caption = node.edge_media_to_caption.edges[0].node.text;
          const thumbnail = node.thumbnail_resources.find(
            thumbnail => thumbnail.config_width === thumbnailWidth
          )
          const { src, config_width: width, config_height: height } = thumbnail
          const url = `https://www.instagram.com/p/${node.shortcode}`
          return {
            id,
            caption,
            src,
            width,
            height,
            url,
            comments,
            likes
          }
        }
      )
      setPosts(prev => [...prev, photos]);
    }

    getPosts();
  }, []);

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
