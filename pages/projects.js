import React from 'react'
import styles from './projects.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ProjectDisplay from '../components/ProjectDisplay'
import AssistingWork from '../components/AssistingWork'

const Projects = () => {
  const spicierImages = ["/media/banshee1.webp", "/media/banshee2.jpg", "/media/banshee3.jpg", "/media/banshee4.jpg"];
  const notionShootImages = ["/media/innocente1.jpeg", "/media/movement7.webp"]


  return (
    <div className={styles.container}>
      <p className={styles.title}>projects</p>
      <div className={styles.project}>
        <p className={styles.projectHeader}>spicier - a zine on the spice girls (2023)</p>
        <p className={styles.projectDescription}>spicier explores the multi-faceted reality of the manufactured girl band. from interviews with the talented jennie roberts and karin darnell, the beauty team behind the spice girls’ most memorable looks, to questioning the legitimacy of the band’s “girl power”, spicier offers a wider scope of POVs in order to encapsulate the complexity of being a woman in the music industry.</p>
        <ProjectDisplay images={spicierImages} />
        <Link className={styles.link} href="/">
          <p>there&apos;s more of <strong style={{ fontStyle: 'italic' }}>spicier</strong>  this way. read now!</p>
        </Link>
      </div>
      <div className={styles.project}>
        <p className={styles.projectHeader}>assisting work (2023)</p>
        <AssistingWork
          title="Nell Mescal for Notion, shot by Jemima Marriott"
          description="Styled by Celementine Lucy Brown, Hair by Jon Chapman, Makeup by Charlotte Kraftman, Assistant Leelou Reboh, Words by Yazzi Gokcemen"
          link="https://notion.online/nell-mescal-interview/"
          images={notionShootImages}
        />
      </div>
    </div>
  )
}

export default Projects