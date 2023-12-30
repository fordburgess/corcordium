import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import styles from "./footer.module.css"
import { useRouter } from 'next/router';
import cx from 'classnames'


export default function Footer(props) {
  const router = useRouter().pathname;

  return (
    <div className={cx(styles.container, router == "/contact" && styles.contactPage)}>
      <p className={styles.watermark} style={{ margin: 0 }}>@2024 Ford Burgess</p>
      <p style={{ margin: 0 }}>LinkedIn: <Link target="_blank" style={{ color: "#000000" }} href="https://www.linkedin.com/in/ford-burgess/">linkedin.com/in/ford-burgess</Link></p>
    </div>
  );
}
