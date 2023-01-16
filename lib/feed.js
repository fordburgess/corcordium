export async function getFeed() {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url,timestamp,username&access_token=${process.env.NEXT_PUBLIC_INSTA_TOKEN}`;
  const data = await fetch(url);
  const feed = await data.json();


  return feed.data;
}
