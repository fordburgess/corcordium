import React from 'react'
import styles from './projects.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ProjectDisplay from '../components/ProjectDisplay'
import AssistingWork from '../components/AssistingWork'

const Projects = () => {
  const spicierImages = ["/media/spicier_mockup.webp", "/media/Spicier_Page1.webp", "/media/Spicier_Page2.webp", "/media/Spicier_Page3.webp", "/media/Spicier_Page4.webp", "/media/Spicier_Page5.webp", "/media/Spicier_Page6.webp"];
  const notionShootImages = ["/media/innocente1.jpeg", "/media/movement7.webp"]

  const assistingWork = [
    {
      title: "Nell Mescal for Notion, shot by Jemima Marriott",
      description: "Styled by Celementine Lucy Brown, Hair by Jon Chapman, Makeup by Charlotte Kraftman, Assistant Leelou Reboh, Words by Yazzi Gokcemen",
      link: "https://notion.online/nell-mescal-interview/",
      images: ['/media/NellMescal_1.webp', '/media/NellMescal_2.webp']
    },
    {
      title: "Georgie Henley for 1883 Magazine, shot by Jemima Marriott",
      description: "Styled by Rachael Perry, Hair by Jon Chapman, Makeup by Maya Man, Assistant Leelou Reboh, Words by Kelsey Barnes",
      link: "https://1883magazine.com/georgie-henley/",
      images: ['/media/GeorgieHenley_1.webp', '/media/GeorgieHenley_2.webp']
    },
    {
      title: "Oscal Pollock for Man About Town, shot by Jemima Marriott",
      description: "Styled by Doug Broad, Grooming by Jon Chapman, Assistant Leelou Reboh, Art Director Mike Morton, Words by Ella Hodson",
      link: "https://www.instagram.com/p/Cz_irwvINFV/?igsh=eDR5YzhxcmNubWQ3",
      images: ['/media/OscarPollock_1.webp', '/media/OscarPollock_2.webp']
    }
  ]


  return (
    <div className={styles.container}>
      <p className={styles.title}>projects</p>
      <div className={styles.project}>
        <p className={styles.projectHeader}>spicier - a zine on the spice girls (2023)</p>
        <p className={styles.projectDescription}>spicier explores the multi-faceted reality of the manufactured girl band. from interviews with the talented jennie roberts and karin darnell, the beauty team behind the spice girls’ most memorable looks, to questioning the legitimacy of the band’s “girl power”, spicier offers a wider scope of POVs in order to encapsulate the complexity of being a woman in the music industry.</p>
        <ProjectDisplay images={spicierImages} />
        <Link className={styles.link} href="/home">
          <p style={{ marginRight: '10px' }}>there&apos;s more of <strong style={{ fontStyle: 'italic' }}>spicier</strong>  this way. read now!</p>
          <Image src="/media/right-arrow.png" height={40} width={90} alt="right-arrow"/>
        </Link>
      </div>
      <div className={styles.project}>
        <p className={styles.projectHeader}>assisting work (2023)</p>
        <AssistingWork info={assistingWork}/>
      </div>
      <div className={styles.project}>
        <p className={styles.projectHeader}>blazer identity: the blurred lines of gender - a csm art direction project (2022)</p>
        <p className={styles.projectDescription}>
          a journey through identity, using the blazer as a modern armour to shield oneself through this transition from the feminine to the unspecified.
          this contemporary metamorphosis takes place in the course of a night our in central london. with every change of blazer, one takes a step closer towards infinite freedom of self.
        </p>
        <Image style={{ marginBottom: "30px" }} src="/media/BlazerIdentity.webp" layout="responsive" width={500} height={100} alt="blazer-image" />
        <Link className={styles.link} href="/">
          <p style={{ marginRight: '10px' }}>discover the full edit of <strong style={{ fontStyle: 'italic' }}>blazer identity</strong></p>
          <Image src="/media/right-arrow.png" height={40} width={90} alt="right-arrow"/>
        </Link>
      </div>
    </div>
  )
}

export default Projects
