import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from "./ProjectDisplay.module.css"
import { useMediaQuery } from '@mui/material';

const ProjectDisplay = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  var carouselRef = useRef(null);

  const changeImage = () => {
    if (activeIndex !== images.length - 1) setActiveIndex(activeIndex + 1);
  }

  useEffect(() => {
    if (carouselRef.current) {
      const activePhoto = carouselRef.current.querySelector(`#photo-${activeIndex}`);
      if (activePhoto) {
        carouselRef.current.scrollTop = activePhoto.offsetTop - (carouselRef.current.offsetTop / 2) + (activePhoto.offsetTop / 2);
      }
    }
  }, [activeIndex]);



  return (
    <div className={styles.container}>
      <img
        src={images[activeIndex]}
        alt="main-image"
        className={styles.activeImage}
      />
      <div className={styles.verticalImageCarousel}>
        <div className={styles.imageSlideTrack} ref={carouselRef}>
          {
            images.slice(1).map((image, index) => {
              return (
                <img id={`photo-${index}`} key={image} src={image} alt="image" className={styles.carouselImage} />
              )
            })
          }
        </div>
        <Image
          src="/media/chevron-left.png"
          height={50}
          width={50}
          alt="chevron"
          style={{ transform: 'rotate(270deg)'}}
          className={styles.chevronDown}
          onClick={() => changeImage()}
        />
      </div>
    </div>
  )
}

export default ProjectDisplay
