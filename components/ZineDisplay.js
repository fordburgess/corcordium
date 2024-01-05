import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './ZineDisplay.module.css'
var contentful = require("contentful")

const ZineDisplay = () => {
  const [pdfLink, setPdfLink] = useState('');

  const client = contentful.createClient({
    space: "8nj05hr9nsqo",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN
  })

  const getPdf = async () => {
    var pdfResponse = await client.getAsset("7D2muwgHvQQGlxXJjXCU8S", { select: 'fields.file' });
    setPdfLink('https:' + pdfResponse.fields.file.url)
  }

  useEffect(() => {
    getPdf();
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>flip through my latest project!</h1>
      <div className={styles.wrapper}>
        <iframe className={styles.iframe} src={pdfLink}></iframe>
        <Link href="/projects" className={styles.desktopLink}>
          <p style={{ marginRight: '20px' }}>discover more this way</p>
          <Image className={styles.downArrow} src="/media/down-arrow.png" alt="right-arrow" width={75} height={120}/>
        </Link>
        <div className={styles.mobilePhotos}>
          <Image
            src='/media/spicier_mockup.webp'
            height={250}
            width={250}
            alt="spicier"
          />
        </div>
      </div>
    </div>
  )
}

export default ZineDisplay
