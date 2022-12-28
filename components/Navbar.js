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

      setLastScrollY(window.scrollY);
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
      <div className={styles.subcontainer} style={{visibility: show ? 'visible' : 'hidden', opacity: show ? 1 : 0}}>
        {desktop ? (
          <Image src={LogoWhite} alt="logo" style={{height: "400px", width: "400px"}}/>
        ) : (
          <Image src={LogoBlack} alt="logo" style={{height: "300px", width: "300px"}}/>
        )}
      </div>
      <div className={styles.links} style={{visibility: show ? 'hidden' : 'visible', opacity: show ? 0 : 1}}>
        <Link href="/about" style={{color: desktop ? "#FFFFFF" : "#000000"}} className={styles.link}><h3>About</h3></Link>
        <Link href="/gallery" style={{color: desktop ? "#FFFFFF" : "#000000"}} className={styles.link}><h3>Gallery</h3></Link>
        <Link href="/" style={{color: desktop ? "#FFFFFF" : "#000000"}} className={styles.link}><h3>Placeholder</h3></Link>
        <Link href="/contact" style={{color: desktop ? "#FFFFFF" : "#000000"}} className={styles.link}><h3>Contact</h3></Link>
      </div>
    </div>
  );
}


export default Navbar;
