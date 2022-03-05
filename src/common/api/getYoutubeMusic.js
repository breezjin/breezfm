import YoutubeMusic from 'ytm-search';

import getTimeKeywords from './getTimeKeywords';

export default async function getYoutubeMusic(query) {
  const timeKeyword = getTimeKeywords();
  const queryString = `${query},${timeKeyword.KR}`;
  const ytm = new YoutubeMusic();

  try {
    const playlists = await ytm.findPlaylists(`${queryString}`);

    return playlists;
  } catch (error) {
    return error.message;
  }
}
