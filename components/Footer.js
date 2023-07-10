import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from "./footer.module.css"
import Instagram from '../media/insta.svg'
import { style } from '@mui/system';


export default function Footer(props) {
  const shareData = {
    title: props.title,
    text: "",
    url: "https://corcordiu.vercel.app"
  }

  async function handlShare() {
    await navigator.share(shareData);
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
      </div>
      <div className={styles.bottom}>
        <a href="https://www.instagram.com/corcordiumarchive/" className={styles.link}>
          <Image href="" src={Instagram} alt="instagram" style={{height: 35, width: 35}}/>
        </a>
        <p onClick={() => handlShare()} className={styles.share}>Share</p>
      </div>
      <p className={styles.watermark}>@2023 Ford Burgess</p>
    </div>
  );
}
