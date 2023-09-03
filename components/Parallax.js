import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from "./Parallax.module.css"
import AltLogo from "../media/AltLogo.png"
import cx from 'classnames'
// import angela1 from "media/angela1.jpg"
// import angela2 from "media/angela2.jpg"
// import angela3 from "media/angela3.jpg"
// import angela4 from "media/angela4.jpg"
// import angela5 from "media/angela5.jpg"
// import angela6 from "media/angela6.jpg"
// import kim1 from "media/kim1.jpeg"
// import kim2 from "media/kim2.jpeg"

const Parallax = () => {
  const [stickyPhoto, setStickyPhoto] = useState(false)
  const [fadeInLeft, setFadeInLeft] = useState(false);
  const [fadeInRight, setFadeInRight] = useState(false);
  const [fadeInBottom, setFadeInBottom] = useState(false);
  const refPhotoPlayer = useRef(null);
  const images = [
    "media/angela6.jpg", "media/kim1.jpeg", "media/angela5.jpg", "media/angela1.jpg", "media/kim2.jpeg",
    "media/angela4.jpg", "media/angela2.jpg", "media/angela3.jpg"
  ]

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
    const handleScroll = () => {
      if (refPhotoPlayer.current) {
        refPhotoPlayer.current.style.backgroundImage = `url(${images[5]})`
        const rect = refPhotoPlayer.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight * .75 && rect.bottom > 0) {
          var index = images.indexOf(refPhotoPlayer.current.style.backgroundImage)
          console.log(index)
          console.log(refPhotoPlayer.current.style.backgroundImage.split("""))
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <>
      <div className={style.mobileTop}>
        <h2>Leelou Reboh</h2>
        <div>
          <Link href="/contact" className={style.navLinks}>Contact</Link>
          <Link href="/about" className={style.navLinks} style={{ marginLeft: "10px" }}>About</Link>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.topSubContainerMobile}>
          <Image src={AltLogo} className={cx(style.mobileLogo, fadeInLeft && style.fade)} alt="logo" />
          <svg width="300" height="3" className={style.mobileSvg}>
            <line x1="0" y1="1.5" x2="300" y2="1.5" stroke="black" strokeWidth="2" />
          </svg>
          <h2>Fashion Literature</h2>
        </div>
        <div className={style.topSubContainerDesktop}>
          <h1 className={cx(style.title, fadeInLeft && style.fadeInLeft)}>CorCordium</h1>
          <div style={{ height: "300px" }}>
            <svg width="3" height="300" className={style.svg}>
              <line x1="1.5" y1="0" x2="1.5" y2="300" stroke="black" strokeWidth="3" />
            </svg>
          </div>
          <div className={cx(style.topSubContainerRight, fadeInRight && style.fadeInRight)}>
            <h1>Leelou</h1>
            <h1>Reboh</h1>
            <p>Fashion Literature</p>
          </div>
        </div>
        <div ref={refPhotoPlayer}  className={cx(style.photoPlayerMobile, fadeInBottom && style.fadeInBottom, stickyPhoto && style.sticky)}>
          {/* <Image src={angela6} style={{ height: "100%", width: "100%" }} alt="photo"/> */}
        </div>
        {/* <div className={cx(style.photoPlayerDesktop, fadeInBottom && style.fadeInBottom, stickyPhoto && style.sticky)}>
          <Image src={angela6} style={{ height: "100%", width: "100%" }} alt="angela"/>
        </div> */}
      </div>
    </>
  )
}

export default Parallax
