import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "./NewHeader.module.css"
import { useRouter } from 'next/router';
import cx from 'classnames'
import { Drawer } from '@mui/material';
var contentful = require("contentful")

const NewHeader = () => {
  const [open, setOpen] = useState(false);
  const [cvUrl, setCVUrl] = useState('')
  const router = useRouter();

  const client = contentful.createClient({
    space: "8nj05hr9nsqo",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN
  })

  const getCV = async () => {
    var pdfResponse = await client.getAsset("6SaqAajpjEEla8no0Oj0tr", { select: 'fields.file' });
    setCVUrl('https:' + pdfResponse.fields.file.url)
  }

  useEffect(() => {
    getCV()
  }, [])

  return (
    <div className={cx(styles.container, router.pathname == "/articles/[id]" && styles.articleHeader)}>
      {
        !router.pathname.includes("/home") && router.pathname !== '/articles/[id]' ? (
          <>
            <div className={styles.bufferDiv} style={{ height: '100px', width: '100px' }}></div>
            <Link href="/home">
              <Image className={styles.desktopLogoLarge} style={{ marginLeft: "-35px" }} src="/media/long-logo.png" alt="logo" height={100} width={230} />
            </Link>
          </>
        ) : (
          <>
            <Link href="/home">
              <Image className={styles.desktopLogo} style={{ marginTop: "-17px" }} src="/media/logo-small.png" alt="logo" height={120} width={120} />
            </Link>
            <Link href="/home">
              <Image className={styles.mobileLogo} style={{ marginTop: "-17px" }} src="/media/logo-small.png" alt="logo" height={70} width={70} />
            </Link>
          </>
        )
      }
      {
        router.pathname == "/home" && (
          <div className={styles.links}>
            <Link style={{ textDecoration: "none", color: "#000000"}}href="/articles/all"><p>writing</p></Link>
            <Link style={{ textDecoration: "none", color: "#000000"}}href="/portfolio/gallery"><p>photography</p></Link>
            <Link style={{ textDecoration: "none", color: "#000000"}}href="/projects"><p>projects</p></Link>
          </div>
        )
      }
      {
        router.pathname == "/home" && (
          <div className={styles.iconLinks}>
            <Link href={cvUrl} target="_blank"><Image src="/media/cv-icon.png" height={100} width={100}/></Link>
            <Link href="/contact"><Image src="/media/mail-icon.png" height={100} width={100}/></Link>
          </div>
        )
      }
      <div
        className={cx(styles.navIcon, router.pathname !== "/home" && styles.desktopVisible)}
        onClick={() => setOpen(true)}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Drawer
        anchor={'right'}
        open={open}
        className={styles.drawer}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'rgb(255, 254, 245)',
            width: '25vw',
          }
        }}
      >
        <div className={styles.drawerContainer}>
          <Image onClick={() => setOpen(false)} className={styles.xIcon} src="/media/x-icon.svg" height={45} width={45} alt="x-icon"/>
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <Link style={{ textDecoration: "none" }}className={styles.drawerLinks} href="/home">home</Link>
            <Link style={{ textDecoration: "none" }}className={styles.drawerLinks} href="/articles/all">writing</Link>
            <Link style={{ textDecoration: "none" }}className={styles.drawerLinks} href="/portfolio/gallery">photography</Link>
            <Link style={{ textDecoration: "none" }}className={styles.drawerLinks} href="/projects">projects</Link>
            <Link style={{ textDecoration: "none" }}className={styles.drawerLinks} href="/">CV</Link>
            <Link style={{ textDecoration: "none" }}className={styles.drawerLinks} href="/contact">contact</Link>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default NewHeader
