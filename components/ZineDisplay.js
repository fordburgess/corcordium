import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './ZineDisplay.module.css'

const ZineDisplay = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>flip through my latest project!</h1>
      <div className={styles.wrapper}>
        <iframe style={{ border: 'none', height: '600px', width: '100%', marginBottom: '45px' }} src="/pdfFiles/spicier-zine.pdf"></iframe>
        <Link href="/projects" className={styles.link}>
          <p style={{ marginRight: '20px' }}>discover more this way</p>
          <Image className={styles.downArrow} src="/media/down-arrow.png" alt="right-arrow" width={75} height={120}/>
        </Link>
      </div>
    </div>
  )
}

export default ZineDisplay
