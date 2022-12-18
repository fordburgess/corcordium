import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Instagram from '../media/insta.svg'
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
        <div style={{textAlign: "left"}}>
          <p className={styles.content}>
            Cor Cordium (lat.) / Heart of Hearts
            <br/>
            <br/>
            I started being curious about clothes because, by meticulously curating a certain wardrobe or building certain outfits, I could fool, I could convey, or I could hide. I found it interesting how people chose to present themselves through fashion. And through the years, as I was changing and evolving, the one thing that remained consistent was my curiosity for this craft and the people behind it. I never felt as driven as when I had to go look for fabrics on Goldhawk Road for my first big project, or when I had to style a model on the spot during a studio session. I’d always known that I wanted to be part of this world, and for the first time, it felt possible, accessible. But the question was still: How? What did I want to do?
            <br/>
            <br/>
            And although I remain unsure of the exact answer to this question, I’ve finally understood what and how I wanted to create. I am passionate about people. I am inspired by those I meet, and, as I started to experiment more and grow confident about my work, I’ve realised that the common ground in all my projects was the central place that people occupied in them. Whether I write, photograph, style, I’m always working around the person who inspired the project, about the story they have to say.
            <br/>
            <br/>
            Fashion is a second skin, a mean to communicate. It inherently conveys something about our own self, and I want to explore how people use it to twist and tell their own story. Fashion, to me, means unraveling what is beyond the garments. It is about interaction and the struggle of it, about the stories that have been misunderstood, about the essence of the person who makes fashion their own.
            <br/>
            <br/>
            So I guess I may have answered my question after all?
            <br/>
            <br/>
            Cor Cordium, what really lies within one, once they are stripped of all clothes, stripped of all fashion. Cor Cordium, for the people who make &/or wear it.
          </p>
          <div className={styles.miniFooter}>
            <Link href="" className={styles.link}>Contact</Link>
            <a href="https://www.instagram.com/corcordium.archive/" className={styles.link}>
              <Image href="" src={Instagram} alt="instagram" style={{height: 35, width: 35}}/>
            </a>
            <a href="" className={styles.link}>Share</a>
          </div>
        </div>
      </div>
    </div>
  )
}
