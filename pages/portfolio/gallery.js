import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../../media/logo1.png'
import styles from './gallery.module.css';
import { images } from '../../next.config';
import cx from 'classnames'
var contentful = require("contentful")

function Gallery({ photos }) {
  const [loading, setLoading] = useState(false);

  // setTimeout(() => {
  //   setLoading(false)
  // }, 2000);

  const projId = (string) => {
    var id = null

    switch(string) {
      case "Innocente":
        id = 0
        break;
      case "Restriction":
        id = 1
        break;
      case "Movement":
        id = 2
        break;
    }
    return id;
  }

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>photography</p>
        <div className={styles.imageContainer}>
          {!loading ? (
            photos.map((item, index) => {
              var photoUrl = "https:" + item.fields.file.url
              // var projectLink = `${projId(title)}`;
              var height = item.fields.file.details.image.height;
              var width = item.fields.file.details.image.width;

              return (
                  // <Link key={photoUrl} href={projectLink} className={styles.mobileLink}>
                  <img src={photoUrl} alt="portfolio" key={index} className={cx(styles.image, width > height ? styles.horizontal : styles.vertical)}/>
              )
            })
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    </>
  )
}

Gallery.getInitialProps = async (ctx) => {
  var data = [];

  const client = contentful.createClient({
    space: "8nj05hr9nsqo",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN
  })

  await client.getAssets()
  .then(function(res) {
    res.items.forEach(item => {
      if (item.fields.title.includes("portrait") || item.fields.title.includes("banshee") || item.fields.title.includes("Innocente") || item.fields.title.includes("Movement") || item.fields.title.includes("Restriction")) {
        data.push(item)
      }
    })
  })

  data = data.sort((a, b) => parseInt(a.fields.description) - parseInt(b.fields.description));

  return {
    photos: data
  }
}


export default Gallery;
