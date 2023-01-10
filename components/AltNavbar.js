import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../media/logo1.png';
import AltLogo from '../media/AltLogo.png'
import styles from './altnavbar.module.css';
import { Hidden } from '@mui/material'

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
  const mobile = useMediaQuery(800)

  return (
    <div className={styles.header}>
      <Hidden only={['lg', 'xl']}>
        <Link href="/"><Image src={AltLogo} alt="logo" className={styles.logo} /></Link>
      </Hidden>
      <Hidden only={['sm', 'xs']}>
        <Link href="/"><Image src={Logo} alt="logo" className={styles.logo} /></Link>
      </Hidden>
        <h1>{props.title}</h1>
    </div>
  )
}

export default AltNavbar
