import Head from 'next/head';
import Image from 'next/image'
import styles from './index.module.css';
import PhotoDisplay from '../components/PhotoDisplay';
import InstaFeed from '../components/InstaFeed';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Corcordium</title>
        <meta name="description" content="placeholder" />
        <link rel="icon" href="https://freepngdownload.com/image/thumb/heart-png-free-image-download-1.png" />
      </Head>
      <PhotoDisplay />
      <InstaFeed />
    </div>
  )
}
