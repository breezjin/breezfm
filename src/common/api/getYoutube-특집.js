import axios from 'axios';

const YOUTUBE_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export default async function getYoutube(query) {
  const queryString = `[playlist],music,${query}`;

  try {
    const videos = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_KEY}&part=snippet&q=${queryString}`
    );

    const result = {
      data: videos.data,
      queryString,
    };

    return result;
  } catch (error) {
    return error.message;
  }
}
