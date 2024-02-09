import React, { useState, useRef, useEffect } from 'react';
import styles from "./floatingpics.module.css";
import Image from 'next/image';
import Link from 'next/link'
import { Noise } from 'noisejs';

const FloatingPics = () => {
  var windowWidth = 2000;
  const noise = new Noise();
  const CANVAS_WIDTH = 2000;
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
      name: 'innocente2.jpeg',
      height: 250,
      width: 190,
      x: CANVAS_WIDTH / 7,
      y: 100,
    },
    {
      name: 'movement4.jpg',
      height: 350,
      width: 275,
      x: CANVAS_WIDTH / 8,
      y: 200
    },
    {
      name: 'movement7.webp',
      height: 250,
      width: 350,
      x: CANVAS_WIDTH / 9,
      y: 25
    },
    {
      name: 'restriction1.webp',
      height: 300,
      width: 210,
      x: CANVAS_WIDTH / 10,
      y: 300,
    },
     {
      name: 'portraitLaury.jpg',
      height: 350,
      width: 250,
      x: CANVAS_WIDTH / 11,
      y: 75
    },
    {
      name: 'movement5.jpg',
      height: 330,
      width: 490,
      x: CANVAS_WIDTH / 12,
      y: 375,
    },
    {
      name: 'innocente1.jpeg',
      height: 325,
      width: 225,
      x: CANVAS_WIDTH / 13,
      y: 75
    },
    {
      name: 'portraitLeelou.jpg',
      height: 350,
      width: 275,
      x: CANVAS_WIDTH / 14,
      y: 50
    },
    {
      name: 'portrait1.jpg',
      height: 325,
      width: 240,
      x: CANVAS_WIDTH / 15,
      y: 350,
    },
    {
      name: 'movement3.jpg',
      height: 300,
      width: 225,
      x: CANVAS_WIDTH / 16,
      y: 20
    },
    {
      name: 'movement5.jpg',
      height: 300,
      width: 425,
      x: CANVAS_WIDTH / 17,
      y: 325
    }
  ]

  const [imagesState, setImagesState] = useState([]);
  const interval = CANVAS_WIDTH / images.length + 50;
  let imagesRef = useRef(
    images.map((image, i) => {

      var extraBuffer = i >= 13 ? 100 : 0;

      return {
        ...image,
        x: i * interval + extraBuffer,
        noiseSeedX: Math.floor(Math.random() * 64000),
        noiseSeedY: Math.floor(Math.random() * 64000),
        xWithNoise: image.x,
      }
    })
  )

  useEffect(() => {
    if (windowWidth) {
      const interval = windowWidth / images.length + 50

      const newImages = images.map((image, i) => {
        var extraBuffer = i >= 13 ? 100 : 0

        return { ...image, x: i * interval + extraBuffer }
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

      const newX = image.x - SCROLL_SPEED + 0.05;

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
        x: newX < -500 ? CANVAS_WIDTH + 600: newX,
        // x: CANVAS_WIDTH,
        xWithNoise: newXWithNoise,
        yWithNoise: newYWithNoise,
      }
    });

    animationRef.current = requestAnimationFrame(animate);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>photography</h1>
      <div>
      {
        images.map((image, index) => {
          var projectNumber;
          var title = image.name.split(/(\d+)/)[0].toLocaleLowerCase();

          if (title.includes("innocente")) projectNumber = 0;
          else if (title.includes("restriction")) projectNumber = 1;
          else if (title.includes("movement")) projectNumber = 2;
          else if (title.includes("banshee")) projectNumber = 3;
          else if (title.includes("portrait")) projectNumber = 4;

          return (
            <Link key={index} href={`/portfolio/${projectNumber}`}>
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
            </Link>
            // </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FloatingPics
