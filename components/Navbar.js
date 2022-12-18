import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { makeStyles } from "@mui/styles";
import styles from "./navbar.module.css"
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router'
import LogoWhite from '../media/logo2.png';
import LogoBlack from '../media/logo.png';

const Navbar = (props) => {
  const desktop = useMediaQuery('(min-width: 900px');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY])

  return (
    <div className={styles.container} style={{justifyContent: "space-between", width: "100vw"}}>
      <div className={styles.subcontainer} style={{display: show ? 'flex' : 'none'}}>
        {desktop ? (
          <Image src={LogoWhite} alt="logo" style={{height: "375px", width: "375px"}}/>
        ) : (
          <Image src={LogoBlack} alt="logo" style={{height: "225px", width: "225px"}}/>
        )}
      </div>
      <div className={desktop ? styles.linksDesktop : styles.linksMobile} style={{display: show ? 'none' : 'flex'}}>
        <Link href="/about" style={{color: desktop ? "#FFFFFF" : "#000000"}} className={styles.link}><h3>About</h3></Link>
        <Link href="/" style={{color: desktop ? "#FFFFFF" : "#000000"}} className={styles.link}><h3>Gallery</h3></Link>
        <Link href="/" style={{color: desktop ? "#FFFFFF" : "#000000"}} className={styles.link}><h3>Placeholder</h3></Link>
        <Link href="/" style={{color: desktop ? "#FFFFFF" : "#000000"}} className={styles.link}><h3>Stuff</h3></Link>
      </div>
    </div>
  );
}


export default Navbar;
