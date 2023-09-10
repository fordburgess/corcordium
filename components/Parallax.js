import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from "./Parallax.module.css"
import AltLogo from "../media/AltLogo.png"
import cx from 'classnames'

const Parallax = () => {
  const [stickyPhoto, setStickyPhoto] = useState(false)
  const [fadeInLeft, setFadeInLeft] = useState(false);
  const [fadeInRight, setFadeInRight] = useState(false);
  const [fadeInBottom, setFadeInBottom] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  var mobilePhotoRefs = {
    kim1ref: useRef(),
    angela6ref: useRef(),
    angela5ref: useRef(),
    nora1ref: useRef(),
    kim2ref: useRef(),
    nora2ref: useRef(),
    nora3ref: useRef(),
  }

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  useEffect(() => {

    if (scrollPosition < 150) {
      mobilePhotoRefs.nora3ref.current.style.zIndex = 1;
      mobilePhotoRefs.kim1ref.current.style.zIndex = 0;
      mobilePhotoRefs.kim2ref.current.style.zIndex = 0;
      mobilePhotoRefs.nora1ref.current.style.zIndex = 0;
      mobilePhotoRefs.angela5ref.current.style.zIndex = 0;
      mobilePhotoRefs.angela6ref.current.style.zIndex = 0;
    }
    if (scrollPosition > 150 && scrollPosition <= 250) {
      mobilePhotoRefs.angela6ref.current.style.zIndex = 1;
      mobilePhotoRefs.nora3ref.current.style.zIndex = 0;
      mobilePhotoRefs.kim2ref.current.style.zIndex = 0;
    }
    if (scrollPosition > 250) {
      mobilePhotoRefs.kim2ref.current.style.zIndex = 1;
      mobilePhotoRefs.angela6ref.current.style.zIndex = 0;
    }
  }, [scrollPosition])

  useEffect(() => {
    setFadeInLeft(true);
    setTimeout(() => {
      setFadeInRight(true);
    }, 500);
    setTimeout(() => {
      setFadeInBottom(true);
    }, 1000);
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
        <div className={cx(style.photoPlayerMobile, fadeInBottom && style.fadeInBottom, stickyPhoto && style.sticky)}>
          <img src="media/kim1.jpeg" ref={mobilePhotoRefs.kim1ref} alt="photo"/>
          <img src="media/angela6.jpg" ref={mobilePhotoRefs.angela6ref} alt="photo" />
          <img src="media/angela5-min.jpg" ref={mobilePhotoRefs.angela5ref} alt="photo" />
          <img src="media/nora1-min.jpg" ref={mobilePhotoRefs.nora1ref} alt="photo" />
          <img src="media/kim2.jpeg" ref={mobilePhotoRefs.kim2ref} alt="photo" />
          <img src="media/nora2-min.jpg" ref={mobilePhotoRefs.nora2ref} alt="photo" />
          <img src="media/nora3-min.jpg" ref={mobilePhotoRefs.nora3ref} alt="photo" />
        </div>
        <div className={cx(style.photoPlayerDesktop, fadeInBottom && style.fadeInBottom, stickyPhoto && style.sticky)}>
          {/* <img src="media/kim1.jpeg" ref={photoRefs.kim1ref} alt="photo"/>
          <img src="media/angela6.jpg" ref={photoRefs.angela6ref} alt="photo" />
          <img src="media/angela5-min.jpg" ref={photoRefs.angela5ref} alt="photo"  /> */}
        </div>
      </div>
    </>
  )
}

export default Parallax
