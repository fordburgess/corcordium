import React, { useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../media/logo1.png';
import Instagram from '../media/insta.svg';
import styles from './gallery.module.css';
import GDImageViewer from '../utils/GDImageViewer';

function Gallery() {

//   useEffect(() => {
//
//     fetch()
//
//   }, [])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/"><Image src={Logo} alt="logo" className={styles.logo}/></Link>
          <h3>Portfolio</h3>
        </div>
        <div className={styles.photoContainer}>
          <GDImageViewer data={gdPhotoOptions}/>
        </div>
        <div className={styles.miniFooter}>
        <Link href="/about" className={styles.link}>About</Link>
            <a href="https://www.instagram.com/corcordium.archive/" className={styles.link}>
              <Image href="" src={Instagram} alt="instagram" style={{height: 35, width: 35}}/>
            </a>
            <a href="" className={styles.link}>Share</a>
        </div>
      </div>
    </>
  )
}


export default Gallery;
