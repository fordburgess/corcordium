import React from 'react'
import styles from './ZineDisplay.module.css'

const ZineDisplay = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>flip through my latest project!</h1>
      <div className={styles.wrapper}>
        <iframe style={{ border: 'none', height: '700px', width: '80%' }} src="/pdfFiles/spicier-zine.pdf"></iframe>
      </div>
    </div>
  )
}

export default ZineDisplay
