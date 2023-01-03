import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../media/logo1.png'
import styles from './gallery.module.css';
import Projects from './projects.json';

function Gallery({ photos }) {
  const [activeProject, setActiveProject] = useState("all")
  console.log(activeProject)
  var test = [...photos[0]];

    var allImages = true;


  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/"><Image src={Logo} alt="logo" className={styles.logo}/></Link>
          <h3>Portfolio</h3>
        </div>
        {activeProject == "all" ? (
            <div className={styles.imageContainer}>
              {test.map(item => {
                if (activeProject !== "all" && !item.title.includes(activeProject)) {
                  allImages = false;
                }
                let imgUrl = "http://drive.google.com/uc?export=view&id=" + item.id;
                var name = item.title.split(/[0-9]/)[0];
                return (
                  <div key={item.title} className={styles.contentContainer}>
                    <img src={imgUrl} alt="portfolio" key={item.id} className={styles.image}/>
                    <div className={styles.info}>
                      <h1>{name}</h1>
                      <p className={styles.readMore} onClick={() => setActiveProject(name)}>Read More</p>
                    </div>
                  </div>
                )
              })}
            </div>
        ) : (
            <div className={styles.projectContainer}>
              <div className={styles.projectPhotoContainer}>
                {test.map(item => {
                  let imgUrl = "http://drive.google.com/uc?export=view&id=" + item.id;
                  if (item.title.includes(activeProject)) {
                    return (
                      <div key={item.title} className={styles.contentContainer}>
                        <img src={imgUrl} alt="portfolio" key={item.id} className={styles.image}/>
                      </div>
                    )
                  }
                })}
              </div>
              <div className={styles.projectContentContainer}>
                <h1>{activeProject}</h1>
                {/* <h6>{project.text}</h6> */}
              </div>
            </div>
          )}
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
