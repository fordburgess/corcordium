var contentful = require("contentful");

export async function getArticles() {
  const client = contentful.createClient({
    space: "8nj05hr9nsqo",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN
  })

  const data = [];

  await client.getEntries()
  .then(function(res) {
    res.items.forEach(item => {
      data.push(item.fields)
    })
  })

  return data;
}
