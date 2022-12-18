import React from 'react';
import Image from 'next/image'
import Leelou from '../media/leelou1.jpg';
import { useMediaQuery } from '@mui/material';
import styles from "./about.module.css"


export default function About() {
  const mobile = useMediaQuery('(max-width: 600px')

  return (
    <div className={styles.container}>
      <div className={styles.subContainerLeft}></div>
      <div className={styles.subContainerRight}>
        <h1 className={styles.header}>About</h1>
      </div>
    </div>
  )
}
