import Head from 'next/head';
import Image from 'next/image'
import styles from './index.module.css';
import Angela1 from '../media/angela1.jpg'
import Angela2 from '../media/angela2.jpg'
import Angela3 from '../media/angela3.jpg'
import Angela4 from '../media/angela4.jpg'
import Angela5 from '../media/angela5.jpg'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Corcordium</title>
        <meta name="description" content="placeholder" />
        <link rel="icon" href="https://freepngdownload.com/image/thumb/heart-png-free-image-download-1.png" />
      </Head>

      <div className={styles.container}>
        <h4 className={styles.title}>
          Portfolio
        </h4>
        <div className={styles.doublePhotoContainer}>
          <Image className={styles.smallImage} src={Angela1} alt="angela" />
          <Image className={styles.smallImage} src={Angela2} alt="angela2" />
        </div>
        <div className={styles.singlePhotoContainer}>
          <Image className={styles.largeImage} src={Angela3} alt="angela3" />
        </div>
        <div className={styles.doublePhotoContainer} style={{marginBottom: "30px"}}>
          <Image className={styles.smallImage} src={Angela4} alt="angela4"/>
          <Image className={styles.smallImage} src={Angela5} alt="angela5"/>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <a href="/gallery" className={styles.galleryLink}>Discover More</a>
        </div>
      </div>

    </div>
  )
}
