import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "./Homepage.module.css"
import cx from 'classnames'

const HomepageHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Image className={styles.desktopLogo} style={{ marginTop: "-17px" }} src="/media/logo-small.png" alt="logo" height={120} width={120} />
      <Image className={styles.mobileLogo} style={{ marginTop: "-17px" }} src="/media/logo-small.png" alt="logo" height={70} width={70} />
      <div className={styles.links}>
        <Link style={{ textDecoration: "none", color: "#000000"}}href="/articles/articles"><p>writing</p></Link>
        <Link style={{ textDecoration: "none", color: "#000000"}}href="/portfolio/gallery"><p>photography</p></Link>
        <Link style={{ textDecoration: "none", color: "#000000"}}href="/test"><p>projects</p></Link>
      </div>
      <div className={styles.iconLinks}>
        <Link href="/contact"><Image src="/media/cv-icon.png" height={100} width={100}/></Link>
        <Link href="/contact"><Image src="/media/mail-icon.png" height={100} width={100}/></Link>
      </div>
      <div className={cx(styles.navIcon, open && styles.open)} onClick={() => setOpen(true)}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default HomepageHeader
