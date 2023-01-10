export async function getPhotos() {
  const imgIds = [];

  const URL_START = "https://www.googleapis.com/drive/v2/files?q=%27";
  const URL_END = "%27+in+parents&key=";

  await fetch(URL_START + process.env.NEXT_PUBLIC_DIR_ID + URL_END + process.env.NEXT_PUBLIC_G_KEY)
    .then(res => res.json())
    .then(jsonRes => imgIds.push(...jsonRes.items));

  return imgIds;
}
