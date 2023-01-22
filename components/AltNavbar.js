import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../media/logo1.png';
import AltLogo from '../media/AltLogo.png'
import styles from './altnavbar.module.css';
import { Hidden } from '@mui/material'
import cx from 'classnames';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const AltNavbar = (props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setOpen(false)
  }, [router.asPath])

  const routes = ['/about', '/contact', '/articles/articles', '/portfolio/gallery']

  const handleClick = () => {
    setOpen(prev => !prev)
  }

  return (
    <>
      <div className={styles.header}>
        <Hidden only={['md', 'lg', 'xl']}>
          <Link href="/"><Image src={AltLogo} alt="logo" className={styles.logo} /></Link>
        </Hidden>
        <Hidden only={['sm', 'xs']}>
          <Link href="/"><Image src={Logo} alt="logo" className={styles.logo} /></Link>
        </Hidden>
          <h1>{props.title}</h1>
          <div className={cx(styles.navIcon, open && styles.open)} onClick={() => handleClick()}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
      </div>
      <div className={cx(styles.menu, open && styles.open)}>
        <Link href="/" style={{color: "#000000"}} className={cx(styles.link, open && styles.open)}><h3>HOME</h3></Link>
        {routes.map((route, index) => {
          var title = route.split("/")[1].toUpperCase();

          if (!router.pathname.includes(route)) {
            return (
              <Link key={index} href={route} style={{color: "#000000"}} className={cx(styles.link, open && styles.open)}><h3>{title}</h3></Link>
            )
          }
        })}
      </div>
    </>
  )
}

export default AltNavbar
