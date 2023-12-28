import Head from 'next/head';
import Image from 'next/image'
import FloatingPics from '../components/FloatingPics';
import LatestArticles from '../components/LatestArticles';
import InstaFeed from '../components/InstaFeed';
import ZineDisplay from '../components/ZineDisplay';
var contentful = require("contentful")

export default function Home({ feed, latestArticles }) {

  return (
    <div>
      <Head>
        <title>Corcordium</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <HomepageHeader /> */}
      <LatestArticles articles={latestArticles}/>
      <FloatingPics />
      {/* <ZineDisplay /> */}
      {/* <InstaFeed posts={feed}/> */}
    </div>
  )
}


export async function getServerSideProps() {
  var latestArticles = [];
  const feed = [];

  const client = contentful.createClient({
    space: "8nj05hr9nsqo",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN
  })

  await client.getEntries()
  .then(function(res) {
    res.items.forEach(item => {
      latestArticles.push(item.fields);
      latestArticles.reverse();
    })
  })

  await client.getAssets()
  .then((res) => {
    res.items.forEach(item => {
      if (item.fields.title.includes("instagram")) {
        feed.push(item.fields)
      }
    })
  })

  return {
    props: {
      feed,
      latestArticles
    }
  }
}
