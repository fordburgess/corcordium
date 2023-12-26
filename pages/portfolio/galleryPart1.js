import React from 'react'
import Image from 'next/image'
import styles from './galleryPart1.module.css'
import cx from 'classnames'

const GalleryPart1 = ({ photos }) => {


  return (
    <div className={styles.container1}>
      {
        photos.map((item) => {
          var photoUrl = "https:" + item.fields.file.url
          var height = item.fields.file.details.image.height;
          var width = item.fields.file.details.image.width;

          return (
            <img className={cx(styles.image, width > height ? styles.horizontal : styles.vertical)} key={item.fields.file.url} src={photoUrl} alt={photoUrl} />
          )
        })
      }
    </div>
  )
}

export default GalleryPart1
