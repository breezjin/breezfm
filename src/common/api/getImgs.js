import axios from 'axios';

const UNSPLASH_APPKEY = process.env.REACT_APP_UNSPLASH_APPKEY;

export default async function getImgs() {
  const imgs = await axios.get(
    `https://api.unsplash.com/photos/random/?query=day&w=1920&page=1&count=10&client_id=${UNSPLASH_APPKEY}`
  );

  return imgs;
}
