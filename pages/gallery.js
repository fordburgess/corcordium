import React, { useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../media/logo1.png';
import Instagram from '../media/insta.svg';
import styles from './gallery.module.css';
import GDImageViewer from '../utils/GDImageViewer';

function Gallery() {

  const test = {
    gkey: "AIzaSyDD_Yz-KLtpid3HwZXpofJ_QaZgCsKhh58",
    dirId: "1hQD4Td-gsLD1r-2StKLrSck2jlOIbW83",
    name: "CorCordium",
    options: {
      style: {
      },
      onClick: {
          modal: true,
          newWindow: false
      },
      exclude: {
          "1.jpg": true
      },
      attachClass: {
          "2.jpg": "test"
      },
      attachId: {
          "2.jpg": "test2"
      },
      hover: true
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/"><Image src={Logo} alt="logo" className={styles.logo}/></Link>
          <h3>Portfolio</h3>
        </div>
        <div className={styles.photoContainer}>
          <GDImageViewer data={test} />
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
