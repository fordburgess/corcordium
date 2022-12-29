import React, { useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../media/logo1.png';
import Instagram from '../media/insta.svg';
import styles from './gallery.module.css';
import ImageDisplay from '../utils/ImageDisplay';

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
          "Angela": "angela"
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
        <div className={styles.imageContainer}>
          <ImageDisplay data={test} />
        </div>
      </div>
    </>
  )
}


export default Gallery;
