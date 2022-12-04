import React from 'react';
import Image from 'next/image'
import styles from "./footer.module.css"
import Instagram from '../media/insta.svg'
import { style } from '@mui/system';


export default function Footer({}) {

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <a href="/about" className={styles.link}>About</a>
        <a href="" className={styles.link}>Contact</a>
      </div>
      <div className={styles.social}>
        <a href="https://www.instagram.com/corcordium.archive/">
          <Image style={{height: "40px", width: "40px"}} src={Instagram} alt="instagram" />
        </a>
        <a className={styles.link} style={{ fontSize: "15px" }}>Share</a>
      </div>
    </div>
  );
}
