import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cx from 'classnames'
import styles from '../pages/portfolio/gallery.module.css';

const ImageLoader = ({ image, projId }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  }

  var photoUrl = "https:" + image.fields.file.url
  var title = image.fields.title.split("-")[0].toLowerCase();
  var projectLink = projId;
  var height = image.fields.file.details.image.height;
  var width = image.fields.file.details.image.width;
  var wide = width > height;

  return (
    <>
      {
        !isLoaded && (
          <div
            style={{
              height: '200px',
              width: '200px',
              backgroundColor: 'gray'
            }}
          >
          </div>
        )
      }
      <Link key={photoUrl} href={projectLink} className={cx(styles.wrapperLink, wide && styles.wide)}>
        <Image
          src={photoUrl}
          alt="portfolio"
          // key={index}
          height={height}
          width={width}
          priority
          className={cx(styles.image, wide ? styles.horizontal : styles.vertical)}
          onLoad={() => handleLoad()}
        />
      </Link>
    </>
  )
}

export default ImageLoader
