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
    return id
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          {photos.map((item, index) => {
            var testUrl = "https:" + item.fields.file.url
            console.log(item.fields.file.url)
            return (
            //   <div key={item.title} className={styles.contentContainer}>
            //     <Link href={link} className={styles.mobileLink}>
                  <Image width={99} height={100} src={testUrl} alt="portfolio" key={index} className={styles.image}/>
            //       <div className={styles.info}>
            //         <h1 style={{marginBottom: "50px"}}>{name}</h1>
            //         <Link href={link} className={styles.readMore}>Read More</Link>
            //       </div>
            //     </Link>
            //   </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

Gallery.getInitialProps = async (ctx) => {
  var data = [];
//
//   const URL_START = "https://www.googleapis.com/drive/v2/files?q=%27";
//   const URL_END = "%27+in+parents&key=";
//
//   await fetch(URL_START + process.env.NEXT_PUBLIC_DIR_ID + URL_END + process.env.NEXT_PUBLIC_G_KEY)
//     .then(res => res.json())
//     .then(jsonRes => imgIds.push(jsonRes.items));
//
//   return {
//     photos: imgIds,
//   }
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
    photos: data
  }
}


export default Gallery;
