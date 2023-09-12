import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from "./Parallax.module.css"
import AltLogo from "../media/AltLogo.png"
import cx from 'classnames'
import { debounce } from 'lodash'

const Parallax = () => {
  const [stickyPhoto, setStickyPhoto] = useState(false)
  const [fadeInLeft, setFadeInLeft] = useState(false);
  const [fadeInRight, setFadeInRight] = useState(false);
  const [fadeInBottom, setFadeInBottom] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scalingFactorX, setScalingFactorX] = useState(90);
  const [scalingFactorY, setScalingFactorY] = useState(60);
  var photoPlayer = useRef();
  var mobilePhotoRefs = {
    kim1ref: useRef(),
    angela6ref: useRef(),
    angela5ref: useRef(),
    nora1ref: useRef(),
    kim2ref: useRef(),
    nora2ref: useRef(),
    nora3ref: useRef(),
    angela2ref: useRef(),
    angela3ref: useRef(),
    nora4ref: useRef()
  }

  var desktopPhotoRefs = {
    kim1ref: useRef(),
    angela6ref: useRef(),
    angela5ref: useRef(),
    nora1ref: useRef(),
    kim2ref: useRef(),
    nora2ref: useRef(),
    nora3ref: useRef(),
    angela2ref: useRef(),
    angela3ref: useRef(),
    nora4ref: useRef()
  }

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }

  const debouncedHandleScroll = debounce(handleScroll, 10)

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', debouncedHandleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [])

  useEffect(() => {
    if (scrollPosition < 100) {
      mobilePhotoRefs.nora3ref.current.style.zIndex = 1;
      mobilePhotoRefs.kim1ref.current.style.zIndex = 0;
      mobilePhotoRefs.kim2ref.current.style.zIndex = 0;
      mobilePhotoRefs.nora1ref.current.style.zIndex = 0;
      mobilePhotoRefs.angela5ref.current.style.zIndex = 0;
      mobilePhotoRefs.angela6ref.current.style.zIndex = 0;
      mobilePhotoRefs.angela2ref.current.style.zIndex = 0;
      mobilePhotoRefs.angela3ref.current.style.zIndex = 0;
      mobilePhotoRefs.nora4ref.current.style.zIndex = 0;

      desktopPhotoRefs.nora3ref.current.style.zIndex = 1;
      desktopPhotoRefs.kim1ref.current.style.zIndex = 0;
      desktopPhotoRefs.kim2ref.current.style.zIndex = 0;
      desktopPhotoRefs.nora1ref.current.style.zIndex = 0;
      desktopPhotoRefs.angela5ref.current.style.zIndex = 0;
      desktopPhotoRefs.angela6ref.current.style.zIndex = 0;
      desktopPhotoRefs.angela2ref.current.style.zIndex = 0;
      desktopPhotoRefs.angela3ref.current.style.zIndex = 0;
      desktopPhotoRefs.nora4ref.current.style.zIndex = 0;
    }
    if (scrollPosition >= 100 && scrollPosition <= 200) {
      mobilePhotoRefs.angela6ref.current.style.zIndex = 1;
      mobilePhotoRefs.nora3ref.current.style.zIndex = 0;
      mobilePhotoRefs.kim2ref.current.style.zIndex = 0;

      desktopPhotoRefs.angela6ref.current.style.zIndex = 1;
      desktopPhotoRefs.nora3ref.current.style.zIndex = 0;
      desktopPhotoRefs.kim2ref.current.style.zIndex = 0;
    }
    if (scrollPosition > 200 && scrollPosition <= 275) {
      mobilePhotoRefs.kim2ref.current.style.zIndex = 1;
      mobilePhotoRefs.angela6ref.current.style.zIndex = 0;
      mobilePhotoRefs.nora2ref.current.style.zIndex = 0;

      desktopPhotoRefs.kim2ref.current.style.zIndex = 1;
      desktopPhotoRefs.angela6ref.current.style.zIndex = 0;
      desktopPhotoRefs.nora2ref.current.style.zIndex = 0;
    }
    if (scrollPosition > 275 && scrollPosition <= 340) {
      mobilePhotoRefs.nora2ref.current.style.zIndex = 1;
      mobilePhotoRefs.kim2ref.current.style.zIndex = 0;
      mobilePhotoRefs.nora1ref.current.style.zIndex = 0;

      desktopPhotoRefs.nora2ref.current.style.zIndex = 1;
      desktopPhotoRefs.kim2ref.current.style.zIndex = 0;
      desktopPhotoRefs.nora1ref.current.style.zIndex = 0;
    }
    if (scrollPosition > 340 && scrollPosition <= 400) {
      mobilePhotoRefs.nora1ref.current.style.zIndex = 1;
      mobilePhotoRefs.nora2ref.current.style.zIndex = 0;
      mobilePhotoRefs.angela5ref.current.style.zIndex = 0;

      desktopPhotoRefs.nora1ref.current.style.zIndex = 1;
      desktopPhotoRefs.nora2ref.current.style.zIndex = 0;
      desktopPhotoRefs.angela5ref.current.style.zIndex = 0;
    }
    if (scrollPosition > 400 && scrollPosition <= 440) {
      mobilePhotoRefs.angela5ref.current.style.zIndex = 1;
      mobilePhotoRefs.nora1ref.current.style.zIndex = 0;
      mobilePhotoRefs.kim1ref.current.style.zIndex = 0;

      desktopPhotoRefs.angela5ref.current.style.zIndex = 1;
      desktopPhotoRefs.nora1ref.current.style.zIndex = 0;
      desktopPhotoRefs.kim1ref.current.style.zIndex = 0;
    }
    if (scrollPosition > 440 && scrollPosition <= 480) {
      mobilePhotoRefs.kim1ref.current.style.zIndex = 1;
      mobilePhotoRefs.angela5ref.current.style.zIndex = 0;
      mobilePhotoRefs.angela2ref.current.style.zIndex = 0;

      desktopPhotoRefs.kim1ref.current.style.zIndex = 1;
      desktopPhotoRefs.angela5ref.current.style.zIndex = 0;
      desktopPhotoRefs.angela2ref.current.style.zIndex = 0;
    }
    if (scrollPosition > 480 && scrollPosition <= 510) {
      mobilePhotoRefs.angela2ref.current.style.zIndex = 1;
      mobilePhotoRefs.kim1ref.current.style.zIndex = 0;
      mobilePhotoRefs.nora4ref.current.style.zIndex = 0;

      desktopPhotoRefs.angela2ref.current.style.zIndex = 1;
      desktopPhotoRefs.kim1ref.current.style.zIndex = 0;
      desktopPhotoRefs.nora4ref.current.style.zIndex = 0;
    }
    if (scrollPosition > 510 && scrollPosition <= 535) {
      mobilePhotoRefs.nora4ref.current.style.zIndex = 1;
      mobilePhotoRefs.angela2ref.current.style.zIndex = 0;
      mobilePhotoRefs.angela3ref.current.style.zIndex = 0;

      desktopPhotoRefs.nora4ref.current.style.zIndex = 1;
      desktopPhotoRefs.angela2ref.current.style.zIndex = 0;
      desktopPhotoRefs.angela3ref.current.style.zIndex = 0;
    }
    if (scrollPosition > 535) {
      mobilePhotoRefs.angela3ref.current.style.zIndex = 1;
      mobilePhotoRefs.nora4ref.current.style.zIndex = 0;

      desktopPhotoRefs.angela3ref.current.style.zIndex = 1;
      desktopPhotoRefs.nora4ref.current.style.zIndex = 0;
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

  // const photoPlayerStyle = {
  //   // transform: `scale(${scalingFactorX}, ${scalingFactorY})`,
  //   width: `${scalingFactorX}vw`, height: `${scalingFactorY}vh`,
  // };

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
        <div ref={photoPlayer} className={cx(style.photoPlayerMobile, fadeInBottom && style.fadeInBottom, stickyPhoto && style.sticky, scrollPosition >= 415 && style.endScroll)}>
          <Link href="/portfolio/gallery" className={cx(style.galleryLink, scrollPosition >= 535 && style.centered)}><h3>See All</h3></Link>
          <img src="media/kim1.jpeg" ref={mobilePhotoRefs.kim1ref} alt="photo" loading="lazy"/>
          <img src="media/angela6.jpg" ref={mobilePhotoRefs.angela6ref} alt="photo" loading="lazy"/>
          <img src="media/angela5-min.jpg" ref={mobilePhotoRefs.angela5ref} alt="photo" loading="lazy"/>
          <img src="media/nora1-min.jpg" ref={mobilePhotoRefs.nora1ref} alt="photo" loading="lazy"/>
          <img src="media/kim2.jpeg" ref={mobilePhotoRefs.kim2ref} alt="photo" loading="lazy"/>
          <img src="media/nora2-min.jpg" ref={mobilePhotoRefs.nora2ref} alt="photo" loading="lazy"/>
          <img src="media/nora3-min.jpg" ref={mobilePhotoRefs.nora3ref} alt="photo" loading="lazy"/>
          <img src="media/angela2.jpg" ref={mobilePhotoRefs.angela2ref} alt="photo" loading="lazy"/>
          <img src="media/angela3.jpg" ref={mobilePhotoRefs.angela3ref} alt="photo" loading="lazy"/>
          <img src="media/nora4.jpg" ref={mobilePhotoRefs.nora4ref} alt="photo" loading="lazy"/>
          <div className={cx(style.overlay, scrollPosition >= 535 && style.endScroll)}></div>
        </div>
        <div className={cx(style.photoPlayerDesktop, fadeInBottom && style.fadeInBottom, stickyPhoto && style.sticky)}>
          <Link href="/portfolio/gallery" className={cx(style.galleryLink, scrollPosition >= 535 && style.centered)}><h3>See All</h3></Link>
          <img src="media/kim1.jpeg" ref={desktopPhotoRefs.kim1ref} alt="photo" loading="lazy"/>
          <img src="media/angela6.jpg" ref={desktopPhotoRefs.angela6ref} alt="photo" loading="lazy"/>
          <img src="media/angela5-min.jpg" ref={desktopPhotoRefs.angela5ref} alt="photo" loading="lazy"/>
          <img src="media/nora1-min.jpg" ref={desktopPhotoRefs.nora1ref} alt="photo" loading="lazy"/>
          <img src="media/kim2.jpeg" ref={desktopPhotoRefs.kim2ref} alt="photo" loading="lazy"/>
          <img src="media/nora2-min.jpg" ref={desktopPhotoRefs.nora2ref} alt="photo" loading="lazy"/>
          <img src="media/nora3-min.jpg" ref={desktopPhotoRefs.nora3ref} alt="photo" loading="lazy"/>
          <img src="media/angela2.jpg" ref={desktopPhotoRefs.angela2ref} alt="photo" loading="lazy"/>
          <img src="media/angela3.jpg" ref={desktopPhotoRefs.angela3ref} alt="photo" loading="lazy"/>
          <img src="media/nora4.jpg" ref={desktopPhotoRefs.nora4ref} alt="photo" loading="lazy"/>
          <div className={cx(style.overlay, scrollPosition >= 535 && style.endScroll)}></div>
        </div>
      </div>
    </>
  )
}

export default Parallax
