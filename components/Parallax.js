import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import style from "./Parallax.module.css"
import cx from 'classnames'
import angela6 from "../media/angela6.jpg"
import scrollama from 'scrollama'

const Parallax = () => {
  const [stickyPhoto, setStickyPhoto] = useState(false)
  const [fadeInLeft, setFadeInLeft] = useState(false);
  const [fadeInRight, setFadeInRight] = useState(false);
  const [fadeInBottom, setFadeInBottom] = useState(false);

  useEffect(() => {
    setFadeInLeft(true);
    setTimeout(() => {
      setFadeInRight(true);
    }, 500);
    setTimeout(() => {
      setFadeInBottom(true);
    }, 1000);
  }, [])


  useEffect(() => {
    const scroller = scrollama();

    const handleStepEnter = ({element, index, direction}) => {
      console.log("hello")
      if (direction === 'down') {
        setStickyPhoto(true);
      } else {
        setStickyPhoto(false);
      }
    }

    scroller
      .setup({
        step: ".photoPlayer",

      })
      .onStepEnter(handleStepEnter)

  }, [])

  return (
    <div className={style.container}>

        <div className={style.topSubContainer}>
          <h1 className={cx(style.title, fadeInLeft && style.fadeInLeft)}>CorCordium</h1>
          <div style={{ height: "300px" }}>
            <svg width="3" height="300" className={style.svg}>
              <line x1="1.5" y1="0" x2="1.5" y2="300" stroke="black" strokeWidth="3" />
            </svg>
          </div>
          <div className={cx(style.topSubContainerRight, fadeInRight && style.fadeInRight)}>
            <h1>Leelou</h1>
            <h1>Reboh</h1>
            {/* <p>Fashion Girlie™</p> */}
          </div>
        </div>


      <div className={cx(style.photoPlayer, fadeInBottom && style.fadeInBottom, stickyPhoto && style.sticky)}>
        <Image src={angela6} style={{ height: "100%", width: "100%" }} alt="angela"/>
      </div>

    </div>
  )
}

export default Parallax
