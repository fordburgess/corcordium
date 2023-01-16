import Head from 'next/head';
import Image from 'next/image'
import styles from './index.module.css';
import PhotoDisplay from '../components/PhotoDisplay';
import LatestArticles from '../components/LatestArticles';
import InstaFeed from '../components/InstaFeed';

export default function Home({feed}) {

  return (
    <div>
      <Head>
        <title>Corcordium</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PhotoDisplay />
      <LatestArticles />
      <InstaFeed posts={feed}/>
    </div>
  )
}


export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url,timestamp,username&access_token=${process.env.NEXT_PUBLIC_INSTA_TOKEN}`;

  const data = await fetch(url);
  const feed = await data.json();
  const result = feed.data

  return {
    props: {
      feed: result
    }
  }
}
