import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../media/logo1.png'
import styles from './gallery.module.css';
import Projects from '../../temporaryJSONfiles/projects.json';

function Gallery({ photos }) {
  var test = [...photos[0]];

  console.log(test);
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
          {test.map((item, index) => {

            let imgUrl = "http://drive.google.com/uc?export=view&id=" + item.id;
            var name = item.title.split(/[0-9]/)[0];
            var link = `/portfolio/${projId(name)}`
            return (
              <div key={item.title} className={styles.contentContainer}>
                <Link href={link} className={styles.mobileLink}>
                  <Image width={99} height={100} src={imgUrl} alt="portfolio" key={item.id} className={styles.image}/>
                  <div className={styles.info}>
                    <h1 style={{marginBottom: "50px"}}>{name}</h1>
                    <Link href={link} className={styles.readMore}>Read More</Link>
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
  const imgIds = [];

  const URL_START = "https://www.googleapis.com/drive/v2/files?q=%27";
  const URL_END = "%27+in+parents&key=";

  await fetch(URL_START + process.env.NEXT_PUBLIC_DIR_ID + URL_END + process.env.NEXT_PUBLIC_G_KEY)
    .then(res => res.json())
    .then(jsonRes => imgIds.push(jsonRes.items));

  return {
    photos: imgIds,
  }
}


export default Gallery;
