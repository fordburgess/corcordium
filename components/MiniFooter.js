import React from 'react'
import styles from './minifooter.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Instagram from '../media/insta.svg';

const MiniFooter = ({ link }) => {
  return (
    <div className={styles.container}>
      <Link href="/about" className={styles.link}>{link}</Link>
      <a href="https://www.instagram.com/corcordium.archive/" className={styles.link}>
        <Image href="" src={Instagram} alt="instagram" style={{height: 35, width: 35}}/>
      </a>
      <a href="" className={styles.link}>Share</a>
    </div>
  )
}

export default MiniFooter
