import Head from 'next/head';
import Image from 'next/image'
import styles from './index.module.css';
import PhotoDisplay from '../components/PhotoDisplay';
import LatestArticles from '../components/LatestArticles';
import InstaFeed from '../components/InstaFeed';
var contentful = require("contentful")

export default function Home({ feed, latestArticles }) {

  return (
    <div>
      <Head>
        <title>Corcordium</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PhotoDisplay />
      <LatestArticles articles={latestArticles}/>
      <InstaFeed posts={feed}/>
    </div>
  )
}


export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url,permalink,timestamp,username&access_token=${process.env.NEXT_PUBLIC_INSTA_TOKEN}`;
  const data = await fetch(url);
  const feed = await data.json();

  var latestArticles = [];

  const client = contentful.createClient({
    space: "8nj05hr9nsqo",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN
  })

  await client.getEntries()
  .then(function(res) {
    res.items.forEach(item => {
      latestArticles.push(item.fields)
    })
  })
  .then(() => console.log(latestArticles));

  return {
    props: {
      feed,
      latestArticles
    }
  }
}
