import Head from 'next/head';
import Image from 'next/image'
import styles from './index.module.css';
import PhotoDisplay from '../components/PhotoDisplay';
import LatestArticles from '../components/LatestArticles';
import InstaFeed from '../components/InstaFeed';
import { getFeed } from '../lib/feed';

export default function Home({ result }) {

  return (
    <div>
      <Head>
        <title>Corcordium</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PhotoDisplay />
      <LatestArticles />
      <InstaFeed posts={result}/>
    </div>
  )
}


export const getStaticProps = async () => {
  var result = await getFeed();

  var feed = {
    photos: result
  }

  return {
    props: {
      result
    }
  }
}
