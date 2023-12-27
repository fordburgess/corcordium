import React, { useState, useEffect, useCallback, useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './project.module.css';
import Logo from '../../media/logo.png';
import AltLogo from '../../media/AltLogo.png';
import Instagram from '../../media/insta.svg'
import { getPhotos } from '../../lib/photos';
import { Hidden } from '@mui/material'
import cx from 'classnames';
import Projects from '../../temporaryJSONfiles/projects.json'
var contentful = require("contentful")

export const getStaticPaths = async () => {
  const paths = Projects.projects.map(project => {

    return {
      params: {
        id: project.id.toString(),
      }
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
  project.images = [];

  const client = contentful.createClient({
    space: "8nj05hr9nsqo",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN
  })

  await client.getAssets()
    .then(function(res) {
      res.items.forEach(item => {
        if (item.fields.title.toLocaleLowerCase().includes(project.title.toLocaleLowerCase())) {
          project.images.push(item.fields);
        }
      })
    })

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
  const [currIndex, setCurrIndex] = useState(0);
  const photoCarouselRef = useRef(null);

  const changePhoto = (action) => {
    if (action == 'dec' && currIndex !== 0) setCurrIndex(prev => prev - 1);
    if (action == 'inc' && currIndex !== project.images.length - 1) setCurrIndex(prev => prev + 1)
  }

  useEffect(() => {
    // Scroll the carousel to make the active photo visible
    if (photoCarouselRef.current) {
      const activePhoto = photoCarouselRef.current.querySelector(`#photo-${currIndex}`);
      if (activePhoto) {
        photoCarouselRef.current.scrollLeft = activePhoto.offsetLeft - (photoCarouselRef.current.offsetWidth / 2) + (activePhoto.offsetWidth / 2);
      }
    }
  }, [currIndex]);

  return (
    <>
      <div className={styles.header}>
        <Hidden only={['lg', 'xl']}>
          <Link href="/"><Image src={AltLogo} alt="logo" className={styles.logo}/></Link>
        </Hidden>
        <Hidden only={['sm', 'xs']}>
          <Link href="/"><Image src={Logo} alt="logo" className={styles.logo}/></Link>
        </Hidden>
          <div className={styles.test}></div>
        <h3>Portfolio</h3>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftContainer}>
          <Image
            height={project.images[currIndex].file.details.image.height / 10}
            width={project.images[currIndex].file.details.image.width / 10}
            src={`https:${project.images[currIndex].file.url}`}
            alt="current-image"
            style={{ marginTop: '-30px', marginLeft: '-30px' }}
          />
        </div>
        <div className={styles.rightContainer}>
          <div style={{ width: '75%'}}>
            <h1 className={styles.projectTitle}>{project.title.toLocaleLowerCase()}</h1>
            <div className={styles.htmlText} dangerouslySetInnerHTML={{ __html: project.text }}/>
          </div>
          <div className={styles.photoPreview}>
            <Image onClick={() => changePhoto('dec')} className={styles.chevron} src={'/media/chevron-left.png'} height={50} width={50} alt="chevron-left"/>
            <div ref={photoCarouselRef} className={styles.photoCarousel}>
              {
                project.images.map((photo, index) => {
                  return (
                    <Image
                      id={`photo-${index}`}
                      onClick={() => setCurrIndex(index)}
                      className={cx(styles.previewedPhoto, index == currIndex && styles.active)}
                      key={index}
                      src={`https:${photo.file.url}`}
                      height={120}
                      width={photo.file.details.image.width / 40}
                      alt="photo"
                      style={{ marginRight: '10px' }}
                    />
                  )
                })
              }
            </div>
            <Image onClick={() => changePhoto('inc')} className={styles.chevron} src={'/media/chevron-right.png'} height={50} width={50} alt="chevron-right"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
