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
      name: 'nora3-min.jpg',
      height: 400,
      width: 600,
      x: 0.85,
      speed: '32s',
      y: 350
    },
    {
      name: 'kim2.jpeg',
      height: 400,
      width: 300,
      x: CANVAS_WIDTH,
      speed: '30s',
      y: 30,
    },
    {
      name: 'angela6.jpg',
      height: 400,
      width: 700,
      x: CANVAS_WIDTH / 9,
      speed: '35s',
      y: 75
    },
    {
      name: 'angela5.jpg',
      height: 400,
      width: 290,
      x: CANVAS_WIDTH / 7,
      speed: '35s',
      y: 400
    },
    {
      name: 'kim1.jpeg',
      height: 350,
      width: 225,
      x: 5,
      y: 10
    },
    {
      name: 'angela3.jpg',
      height: 400,
      width: 500,
      x: CANVAS_WIDTH / 3,
      y: 350,
    },
    {
      name: 'nora1.jpg',
      height: 400,
      width: 300,
      x: CANVAS_WIDTH / 2,
      y: 20
    },
    {
      name: 'angela10.webp',
      height: 400,
      width: 600,
      x: CANVAS_WIDTH / 10,
      y: 10
    },
    {
      name: 'nora2.webp',
      height: 350,
      width: 250,
      x: CANVAS_WIDTH / 10,
      y: 400,
    }
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
