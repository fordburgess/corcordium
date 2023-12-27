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
      <p className={styles.watermark} style={{ margin: 0}}>@2024 Ford Burgess</p>
      <p style={{ margin: 0 }}>LinkedIn: <Link style={{ color: "#000000" }} href="linkedin.com/in/ford-burgess">linkedin.com/in/ford-burgess</Link></p>
    </div>
  );
}
