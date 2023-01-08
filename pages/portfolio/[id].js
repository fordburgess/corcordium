import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './project.module.css';
import Logo from '../../media/Logo.png';
import AltLogo from '../../media/AltLogo.png';
import Projects from '../../temporaryJSONfiles/projects.json';
import { Hidden } from '@mui/material';

export const getStaticPaths = async () => {
  console.log(Projects)
  const paths = Projects.projects.map(project => {
    console.log(project)
    return {
      params: { id: project.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const project = Projects.projects[id];

  var photos = [];

  await fetch("https://www.googleapis.com/drive/v2/files?q=%27" + process.env.NEXT_PUBLIC_DIR_ID + "%27+in+parents&key=" + process.env.NEXT_PUBLIC_G_KEY)
    .then(res => res.json())
    .then(jsonRes => {
      jsonRes.items.forEach(item => {
        if (item.title.includes(project.title)) {
          photos.push(item);
        }
      })
    })

  project.images = photos


  return {
    props: {
      project
    }
  }
}

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const Project = ({ project }) => {
  var mobile = useMediaQuery(800);

  return (
    <>
      <div className={styles.header}>
        {mobile ? (
          <Link href="/"><Image src={AltLogo} alt="logo" className={styles.logo}/></Link>
        ) : (
          <Link href="/"><Image src={Logo} alt="logo" className={styles.logo}/></Link>
        )}
          <div className={styles.test}></div>
        <h3>Portfolio</h3>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.images}>
          {project.images.map(photo => {
            var url = "http://drive.google.com/uc?export=view&id=" + photo.id;
            return (
              <img src={url} key={photo.title} className={styles.photo}/>
            )
          })}
        </div>
        <div className={styles.info}>
          <h1>{project.title}</h1>
          <p>{project.text}</p>
          <Link href="/portfolio/gallery" className={styles.backLink}>Back</Link>
        </div>
      </div>
    </>
  )
}

export default Project
