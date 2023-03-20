import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../media/logo1.png'
import styles from './gallery.module.css';
import Projects from '../../temporaryJSONfiles/projects.json';
import { images } from '../../next.config';
var contentful = require("contentful")

function Gallery({ photos }) {

  // temporary and will remove
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
          {photos.map((item, index) => {
            var title = item.fields.title.split("-")[0];
            var photoUrl = "https:" + item.fields.file.url
            var projectLink = `${projId(title)}`;

            console.log(item.fields)

            return (
              <div key={item.title} className={styles.contentContainer}>
                <Link href={projectLink} className={styles.mobileLink}>
                  <Image width={1000} height={100} src={photoUrl} alt="portfolio" key={index} className={styles.image}/>
                  <div className={styles.info}>
                    <h1 style={{marginBottom: "50px"}}>{title}</h1>
                    <Link href={projectLink} className={styles.readMore}>Read More</Link>
                  </div>
                </Link>
              </div>
            )
          })}
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
      data.push(item)
    })
  })
  // .then(() => console.log(data))

  return {
    photos: data.sort((a, b) => 0.5 - Math.random())
  }
}


export default Gallery;
