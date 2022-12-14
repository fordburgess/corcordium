import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from '@mui/material'
import styles from './photodisplay.module.css'
import Angela1 from '../media/angela1.jpg'
import Angela2 from '../media/angela2.jpg'
import Angela3 from '../media/angela3.jpg'
import Angela4 from '../media/angela4.jpg'
import Angela5 from '../media/angela5.jpg'
import Angela7 from '../media/angela7.jpeg'
import Kim1 from '../media/kim1.jpeg'
import Kim2 from '../media/kim2.jpeg'


const PhotoDisplay = () => {
  const mobile = useMediaQuery('(max-width: 800px')
  const photos = [Angela7, Kim1, Angela3, Kim2]

  // if (mobile) {
    return (
      <>
      <div className={styles.container} style={{width: "100vw"}}>
        <h4 className={styles.title}>
          Portfolio
        </h4>
        <div className={styles.doublePhotoContainer}>
          <Image className={styles.smallImage} src={Angela1} alt="angela" />
          <Image className={styles.smallImage} src={Angela2} alt="angela2" />
        </div>
        <div className={styles.singlePhotoContainer}>
          <Image className={styles.largeImage} src={Angela3} alt="angela3" />
        </div>
        <div className={styles.doublePhotoContainer} style={{marginBottom: "30px"}}>
          <Image className={styles.smallImage} src={Angela4} alt="angela4"/>
          <Image className={styles.smallImage} src={Angela5} alt="angela5"/>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <Link href="/portfolio/gallery" className={styles.galleryLink}>Discover More</Link>
        </div>
      </div>
      <div className={styles.desktopContainer}>
        <div className={styles.desktopHero}></div>
        <div className={styles.smallPhotoContainer}>
          {photos.map((photo, index) => {
            return <Image src={photo} key={index} alt={index} className={styles.smallPhotos}/>
          })}
        </div>
      </div>
    </>
    )
  // }
}

export default PhotoDisplay
