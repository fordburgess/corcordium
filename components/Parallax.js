import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import style from "./Parallax.module.css"
import cx from 'classnames'
import angela6 from "../media/angela6.jpg"
import { Scrollama, Step } from "scrollama"

const Parallax = () => {
  const [scrollValue, setScrollValue] = useState(0)
  const [isGrowing, setIsGrowing] = useState(false)
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

  const handleStepEnter = ({ element, index, direction }) => {
    setScrollValue(index)
  }

  return (
    <div className={style.container}>

        <div className={style.topSubContainer}>
          <h1 className={cx(style.title, fadeInLeft && style.fadeInLeft)}>CorCordium</h1>
          <div style={{ height: "300px" }}>
            <svg width="3" height="300" className={cx(style.svg, isGrowing && style.grow)}>
              <line x1="1.5" y1="0" x2="1.5" y2="300" stroke="black" stroke-width="3" />
            </svg>
          </div>
          <div className={cx(style.topSubContainerRight, fadeInRight && style.fadeInRight)}>
            <h1>Leelou</h1>
            <h1>Reboh</h1>
            <p>Fashion Girlie™</p>
          </div>
        </div>


      <div className={cx(style.photoPlayer, fadeInBottom && style.fadeInBottom)}>
        <Image src={angela6} style={{ height: "100%", width: "100%" }} alt="angela"/>
      </div>
      {/* <Scrollama onStepEnter={handleStepEnter}>

      </Scrollama> */}
    </div>
  )
}

export default Parallax
