import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "./NewHeader.module.css"
import { useRouter } from 'next/router';
import cx from 'classnames'
import { Drawer } from '@mui/material';
import { useMediaQuery } from '@mui/material';
var contentful = require("contentful")

const NewHeader = () => {
  const [open, setOpen] = useState(false);
  const [cvUrl, setCVUrl] = useState('')
  const router = useRouter();
  const desktop = useMediaQuery('(min-width: 800px');

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
        !router.pathname.includes("/") && router.pathname !== '/articles/[id]' ? (
          <>
            <div className={styles.bufferDiv}></div>
            <Link href="/">
              <Image className={styles.desktopLogoMain} style={{ marginLeft: "-35px" }} src="/media/long-logo.png" alt="logo" height={100} width={230} />
              <Image className={styles.mobileLogo} style={{ marginTop: "-17px" }} src="/media/logo-small.png" alt="logo" height={80} width={80} />
            </Link>
          </>
        ) : (
          <>
            <Link href="/" className={styles.desktopLogoLink}>
              <Image className={styles.desktopLogo} style={{ marginTop: "-17px" }} src="/media/logo-small.png" alt="logo" height={120} width={120} />
            </Link>
            <Link href="/">
              <Image className={styles.mobileLogo} style={{ marginTop: "-17px" }} src="/media/logo-small.png" alt="logo" height={80} width={80} />
            </Link>
          </>
        )
      }
      {
        router.pathname == "/" && (
          <div className={styles.links}>
            <Link style={{ textDecoration: "none", color: "#000000"}}href="/articles/all"><p>writing</p></Link>
            <Link style={{ textDecoration: "none", color: "#000000"}}href="/portfolio/gallery"><p>photography</p></Link>
            <Link style={{ textDecoration: "none", color: "#000000"}}href="/projects"><p>projects</p></Link>
          </div>
        )
      }
      {
        router.pathname == "/" && (
          <div className={styles.iconLinks}>
            {/* <Link href={cvUrl} target="_blank"><Image alt="cv" src="/media/cv-icon.png" height={100} width={100}/></Link>
            <Link href="/contact"><Image alt="contact" src="/media/mail-icon.png" height={100} width={100}/></Link> */}
            <Link target="_blank" className={styles.mailAndCV} href={cvUrl}><p>cv</p></Link>
            <Link style={{ marginLeft: '40px' }} className={styles.mailAndCV} href="/contact"><p>contact</p></Link>
          </div>
        )
      }
      <div
        className={cx(styles.navIcon, router.pathname !== "/" && styles.desktopVisible)}
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
            width: desktop ? '25vw' : '60vw',

            // [theme.breakpoints.down('md')]: {
            //   width: '75vw'
            // }
          }
        }}
      >
        <div className={styles.drawerContainer}>
          <Image onClick={() => setOpen(false)} className={styles.xIcon} src="/media/x-icon.svg" height={45} width={45} alt="x-icon"/>
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <Link onClick={() => setOpen(false)} style={{ textDecoration: "none" }} className={styles.drawerLinks} href="/">home</Link>
            <Link onClick={() => setOpen(false)} style={{ textDecoration: "none" }} className={styles.drawerLinks} href="/articles/all">writing</Link>
            <Link onClick={() => setOpen(false)} style={{ textDecoration: "none" }} className={styles.drawerLinks} href="/portfolio/gallery">photography</Link>
            <Link onClick={() => setOpen(false)} style={{ textDecoration: "none" }} className={styles.drawerLinks} href="/projects">projects</Link>
            <Link onClick={() => setOpen(false)} target="_blank" style={{ textDecoration: "none" }}className={styles.drawerLinks} href={cvUrl}>CV</Link>
            <Link onClick={() => setOpen(false)} style={{ textDecoration: "none" }}className={styles.drawerLinks} href="/contact">contact</Link>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default NewHeader
