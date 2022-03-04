import axios from 'axios';

import getTimeKeywords from './getTimeKeywords';

const UNSPLASH_APPKEY = process.env.REACT_APP_UNSPLASH_APPKEY;

export default async function getImgs(query) {
  const timeKeyword = getTimeKeywords();

  try {
    const imgs = await axios.get(
      `https://api.unsplash.com/photos/random/?query=${timeKeyword},${query}&w=1920&h=1080&page=1&count=10&client_id=${UNSPLASH_APPKEY}`
    );

    return imgs;
  } catch (error) {
    return error.message;
  }
}
