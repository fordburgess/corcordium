import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from "./ProjectDisplay.module.css"

const ProjectDisplay = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const changeImage = () => {
    if (activeIndex !== images.length - 1) setActiveIndex(activeIndex + 1);
  }

  useEffect(() => {
    console.log(activeIndex)
  }, [activeIndex])



  return (
    <div className={styles.container}>
      <Image
        src={images[activeIndex]}
        alt="main-image"
        width={500}
        height={500}
        className={styles.activeImage}
      />
      <div className={styles.verticalImageCarousel}>
        <div className={styles.imageSlideTrack}>
          {
            images.map((image) => {
              return (
                <img key={image} src={image} alt="image" className={styles.carouselImage} />
              )
            })
          }
        </div>
        <Image
          src="/media/chevron-left.png"
          height={50}
          width={50}
          alt="chevron"
          className={styles.chevronDown}
          onClick={() => changeImage()}
        />
      </div>
    </div>
  )
}

export default ProjectDisplay
