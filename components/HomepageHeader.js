import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "./Homepage.module.css"

const HomepageHeader = () => {
  return (
    <div className={styles.container}>
      <Image style={{ marginTop: "-17px" }} src="/media/logo-small.png" alt="logo" height={120} width={120} />
      <div className={styles.links} style={{ display: 'flex', alignItems: 'center' }}>
        <Link style={{ textDecoration: "none", color: "#000000"}}href="/articles/articles"><p>Writing</p></Link>
        <Link style={{ textDecoration: "none", color: "#000000"}}href="/portfolio/gallery"><p>Photography</p></Link>
        <Link style={{ textDecoration: "none", color: "#000000"}}href="/test"><p>Projects</p></Link>
      </div>
      <div>
        <Link href="/contact"><Image src="/media/cv-icon.png" height={100} width={100}/></Link>
        <Link href="/contact"><Image src="/media/mail-icon.png" height={100} width={100}/></Link>
      </div>
    </div>
  )
}

export default HomepageHeader
