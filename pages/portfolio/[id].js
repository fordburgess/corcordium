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


const Project = ({ project }) => {
  console.log(project.images)

  return (
    <>
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
        </div>
      </div>
    </>
  )
}

export default Project
