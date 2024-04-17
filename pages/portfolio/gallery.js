import Link from 'next/link';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import ImageLoader from '../../components/ImageLoader';
import styles from './gallery.module.css';
import cx from 'classnames'
var contentful = require("contentful")
import { useMediaQuery } from '@mui/material';

function Gallery({ photos1, photos2, photos3 }) {
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const mobile = useMediaQuery('max-width: 900px');

  const projId = (string) => {
    var id = null

    switch(string) {
      case "innocente":
        id = 0
        break;
      case "restriction":
        id = 1
        break;
      case "movement":
        id = 2
        break;
      case "banshee":
        id = 3
        break;
      case "portraits":
        id = 4
        break;
    }
    return id;
  }

  useEffect(() => {
    console.log(loadedImages)
  }, [loadedImages])

  return (

      <div className={styles.container}>
        <p className={styles.title}>photography</p>
        <div className={styles.imageContainer}>
          {
            photos1.map((item, index) => {
              // var photoUrl = "https:" + item.fields.file.url
              var title = item.fields.title.split("-")[0].toLowerCase();
              var projectLink = `${projId(title)}`;
              // var height = item.fields.file.details.image.height;
              // var width = item.fields.file.details.image.width;
              // var wide = width > height;

              return (
                <ImageLoader image={item} projId={projectLink} setLoadedImages={setLoadedImages}/>
                // <Link key={photoUrl} href={projectLink} className={cx(styles.wrapperLink, wide && styles.wide)}>
                //   <Image
                //     src={photoUrl}
                //     alt="portfolio"
                //     key={index}
                //     height={height}
                //     width={width}
                //     priority
                //     className={cx(styles.image, wide ? styles.horizontal : styles.vertical)}
                //     onLoad={() => console.log("Loaded!")}
                //   />
                // </Link>
              )
            })
          }
          {
          loadedImages >= 20 &&
            photos2.map((item, index) => {
              // var photoUrl = "https:" + item.fields.file.url
              var title = item.fields.title.split("-")[0].toLowerCase();
              var projectLink = `${projId(title)}`;
              // var height = item.fields.file.details.image.height;
              // var width = item.fields.file.details.image.width;
              // var wide = width > height;

              return (
                <ImageLoader key={index} image={item} projId={projectLink} setLoadedImages={setLoadedImages}/>
                // <Link key={photoUrl} href={projectLink} className={cx(styles.wrapperLink, wide && styles.wide)}>
                //   <Image
                //     src={photoUrl}
                //     alt="portfolio"
                //     key={index}
                //     height={height}
                //     width={width}
                //     className={cx(styles.image, wide ? styles.horizontal : styles.vertical)}
                //   />
                // </Link>
              )
            })
          }
          {
          loadedImages >= 50 &&
            photos3.map((item, index) => {
              // var photoUrl = "https:" + item.fields.file.url
              var title = item.fields.title.split("-")[0].toLowerCase();
              var projectLink = `${projId(title)}`;
              // var height = item.fields.file.details.image.height;
              // var width = item.fields.file.details.image.width;
              // var wide = width > height;

              return (
                <ImageLoader key={index} image={item} projId={projectLink} setLoadedImages={setLoadedImages}/>
                // <Link key={photoUrl} href={projectLink} className={cx(styles.wrapperLink, wide && styles.wide)}>
                //   <Image
                //     src={photoUrl}
                //     alt="portfolio"
                //     key={index}
                //     height={height}
                //     width={width}
                //     className={cx(styles.image, wide ? styles.horizontal : styles.vertical)}
                //   />
                // </Link>
              )
            })
          }
        </div>
      </div>

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
      if (item.fields.title !== undefined) {
        if (item.fields.title.includes("portraits") || item.fields.title.includes("banshee") || item.fields.title.includes("Innocente") || item.fields.title.includes("Movement") || item.fields.title.includes("Restriction")) {
          data.push(item)
        }
      }
    })
  })

  data = data.sort((a, b) => parseInt(a.fields.description) - parseInt(b.fields.description));

  return {
    photos1: data.slice(0, 20),
    photos2: data.slice(20, 50),
    photos3: data.slice(50, data.length)
  }
}


export default Gallery;
