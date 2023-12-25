import React, { useState, useRef, useEffect } from 'react';
import styles from "./floatingpics.module.css";
import Image from 'next/image';
import { Noise } from 'noisejs';

const FloatingPics = () => {
  const windowWidth = 1700;
  const noise = new Noise();
  const CANVAS_WIDTH = 1700;
  const NOISE_AMOUNT = 1;
  // The frequency. Smaller for flat slopes, higher for jagged spikes.
  const NOISE_SPEED = 0.006;
  // Pixels to move per frame. At 60fps, this would be 18px a sec.
  const SCROLL_SPEED = 0.85;

  const images = [
    {
      name: 'banshee1.webp',
      height: 280,
      width: 200,
      x: CANVAS_WIDTH / 1,
      y: 50,
    },
    {
      name: 'banshee2.jpg',
      height: 350,
      width: 250,
      x: CANVAS_WIDTH / 2,
      y: 200,
    },
    {
      name: 'banshee3.jpg',
      height: 300,
      width: 400,
      x: CANVAS_WIDTH / 3,
      y: 350
    },
    {
      name: 'banshee4.jpg',
      height: 275,
      width: 200,
      x: CANVAS_WIDTH / 4,
      y: 10
    },
    {
      name: 'banshee5.jpg',
      height: 375,
      width: 275,
      x: CANVAS_WIDTH / 5,
      y: 50
    },
    {
      name: 'movement2.jpg',
      height: 300,
      width: 400,
      x: CANVAS_WIDTH / 6,
      y: 400
    },
    {
      name: 'movement1.jpg',
      height: 250,
      width: 190,
      x: CANVAS_WIDTH / 7,
      y: 200,
    },
    // {
    //   name: 'banshee6.webp',
    //   width: 200,
    //   height: 300,
    //   x: CANVAS_WIDTH / 6,
    //   y: 60,
    // },
    // {
    // {
    //   name: 'innocente2.jpeg',
    //   height: 400,
    //   width: 300,
    //   x: CANVAS_WIDTH,
    //   speed: '30s',
    //   y: 30,
    // },
    // {
    // {
    //   name: 'movement5.jpg',
    //   height: 400,
    //   width: 290,
    //   x: CANVAS_WIDTH / 7,
    //   speed: '35s',
    //   y: 400
    // },
    // {
    //   name: 'innocente1.jpeg',
    //   height: 350,
    //   width: 225,
    //   x: 5,
    //   y: 10
    // },
    // {
    // {
    //   name: 'movement7.webp',
    //   height: 400,
    //   width: 600,
    //   x: CANVAS_WIDTH / 10,
    //   y: 10
    // },
    // {
    //   name: 'portrait2.jpg',
    //   height: 200,
    //   width: 100,
    //   x: CANVAS_WIDTH / 11,
    //   y: 350
    // },
    // {
    //   name: 'portrait3.jpg',
    //   height: 230,
    //   width: 100,
    //   x: CANVAS_WIDTH / 11,
    //   y: 200
    // },
    // {
    //   name: 'portrait1.jpg',
    //   height: 150,
    //   width: 100,
    //   x: CANVAS_WIDTH / 11,
    //   y: 10
    // },
    // {
    //   name: 'portraitLeelou.jpg',
    //   height: 150,
    //   width: 100,
    //   x: CANVAS_WIDTH / 8,
    //   y: 50
    // },
    // {
    //   name: 'restriction1.webp',
    //   height: 200,
    //   width: 150,
    //   x: CANVAS_WIDTH / 5,
    //   y: 120,
    // },
    // {
    //   name: 'portraitLaury.jpg',
    //   height: 200,
    //   width: 150,
    //   x: CANVAS_WIDTH / 15,
    //   y: 200
    // },
    // {
    //   name: 'restriction2.jpg',
    //   height: 200,
    //   width: 120,
    //   x: CANVAS_WIDTH / 16,
    //   y: 170,
    // },
    // {
    //   name: 'restriction3.jpg',
    //   height: 200,
    //   width: 150,
    //   x: CANVAS_WIDTH / 17,
    //   y: 120,
    // },
    // {
    //   name: 'movement6.webp',
    //   height: 130,
    //   width: 80,
    //   x: CANVAS_WIDTH / 18,
    //   y: 150
    // },
    // {
    //   name: 'movement3.jpg',
    //   height: 130,
    //   width: 80,
    //   x: CANVAS_WIDTH / 19,
    //   y: 200
    // },
    // {
    //   name: 'movement1.jpg',
    //   height: 150,
    //   width: 120,
    //   x: CANVAS_WIDTH / 20,
    //   y: 300
    // }
  ]

  const [imagesState, setImagesState] = useState([]);
  const interval = CANVAS_WIDTH / images.length;
  let imagesRef = useRef(
    images.map((image, i) => ({
      ...image,
      x: i * interval,
      noiseSeedX: Math.floor(Math.random() * 64000),
      noiseSeedY: Math.floor(Math.random() * 64000),
      xWithNoise: image.x,
    }))
  )

  useEffect(() => {
    if (windowWidth) {
      const interval = windowWidth / images.length

      const newImages = images.map((image, i) => {
        return { ...image, x: i * interval }
      })

      setImagesState(newImages)
    }
  }, [windowWidth])

  const animationRef = useRef();

  useEffect(() => {
    // setTimeout(() => {
    //   setReady(true)
    // }, 400)

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, [])

  function animate() {
    imagesRef.current = imagesRef.current.map((image, index)=> {
      const newNoiseSeedX = image.noiseSeedX + NOISE_SPEED;
      const newNoiseSeedY = image.noiseSeedY + NOISE_SPEED;

      const randomX = noise.simplex2(newNoiseSeedX, 0);
      const randomY = noise.simplex2(newNoiseSeedY, 0);

      const newX = image.x - SCROLL_SPEED;

      const newXWithNoise = newX + randomX * NOISE_AMOUNT;
      const newYWithNoise = image.y;

      const element = document.getElementById(`image-${index}`);

      if (element) {
        element.style.transform = `translate(${newXWithNoise}px, ${newYWithNoise}px)`;
      }

      // var restartPoint = image.width >
      return {
        ...image,
        noiseSeedX: newNoiseSeedX,
        noiseSeedY: newNoiseSeedY,
        x: newX < -500 ? CANVAS_WIDTH : newX,
        // x: CANVAS_WIDTH,
        xWithNoise: newXWithNoise,
        yWithNoise: newYWithNoise,
      }
    });

    animationRef.current = requestAnimationFrame(animate);
  }

  return (
    <div className={styles.container}>
      <div>
      {
        images.map((image, index) => {
          return (
            <Image
            key={image.name}
            className={styles.floatingImage}
            id={`image-${index}`}
            alt='image'
            src={`/media/${image.name}`}
            width={image.width}
            height={image.height}
            style={{
              // backgroundImage: `url(/media/${image.name})`,
              // height: `${image.height}`,
              // width: `${image.width}`,
              // animationDuration: `${image.speed}`,
              // top: `${image.top}`
            }}
            />
            // </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default FloatingPics
