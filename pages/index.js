import Head from 'next/head';
import Image from 'next/image'
import styles from './index.module.css';
import PhotoDisplay from '../components/PhotoDisplay';
import LatestArticles from '../components/LatestArticles';
import InstaFeed from '../components/InstaFeed';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Corcordium</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="https://freepngdownload.com/image/thumb/heart-png-free-image-download-1.png" />
      </Head>
      <PhotoDisplay />
      <LatestArticles />
      <InstaFeed />
    </div>
  )
}
