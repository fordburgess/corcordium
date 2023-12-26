import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../../media/logo1.png'
import styles from './gallery.module.css';
import { images } from '../../next.config';
import GalleryPart1 from './galleryPart1';
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
        <div className={styles.imageContainer}>
          {/* <GalleryPart1 photos={photos.slice(15, 30)} /> */}
          {!loading ? (
            photos.map((item, index) => {
              var title = item.fields.title.split("-")[0];
              var photoUrl = "https:" + item.fields.file.url
              var projectLink = `${projId(title)}`;
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
      if (item.fields.title.includes("nora") || item.fields.title.includes("Innocente") || item.fields.title.includes("Movement") || item.fields.title.includes("Restriction")) {
        data.push(item)
      }
    })
  })
  // .then(() => console.log(data))

  return {
    photos: data
  }

  // data.sort((a, b) => 0.5 - Math.random())
}


export default Gallery;
