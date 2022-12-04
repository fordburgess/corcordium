import React from 'react';
import Image from 'next/image'
import styles from "./footer.module.css"
import Instagram from '../media/insta.svg'
import { style } from '@mui/system';


export default function Footer({}) {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <a href="/about" className={styles.link}>About</a>
        <a href="" className={styles.link}>Contact</a>
      </div>
      <div className={styles.bottom}>
        <a href="https://www.instagram.com/corcordium.archive/" className={styles.link}>
          <Image href="" src={Instagram} alt="instagram" style={{height: 35, width: 35}}/>
        </a>
        <a href="" className={styles.link}>Share</a>
      </div>
    </div>
  );
}
