import axios from 'axios';

export async function getSongCover(artist, title) {
  try {
    const response = await axios.get(
      `https://api.discogs.com/database/search?artist=${artist}&q=${title}&key=${process.env.REACT_APP_DISCOGS_CONSUMER_KEY}&secret=${process.env.REACT_APP_DISCOGS_CONSUMER_SECRET}`
    );

    const cover = response.data.results[0].cover_image;

    return cover;
  } catch (error) {
    return null;
  }
}

export async function getSongInfo() {
  try {
    const response = await axios.get(
      'https://proxy.zeno.fm/api/stations/pe1r8ntrsg0uv/now_playing/?callback=jQuery2130050955653737168705_1647604481984&_=1647604482210'
    );

    const result = JSON.parse(
      response.data
        .replace('jQuery2130050955653737168705_1647604481984(', '')
        .replace(');', '')
    );

    return result;
  } catch (error) {
    return error.message;
  }
}
