import axios from 'axios';

import getTimeKeywords from './getTimeKeywords';

const YOUTUBE_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default async function getYoutube(query) {
  const timeKeyword = getTimeKeywords();

  try {
    const data = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_KEY}&part=snippet&q=playlist,${timeKeyword},${query}&type=video&videoEmbeddable=true`
    );

    return data;
  } catch (error) {
    return error.message;
  }
}
