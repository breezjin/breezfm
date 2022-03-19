import axios from 'axios';

export async function getSongCover() {
  try {
    return await axios.get(
      `https://radiojar-lib.appspot.com/get_media_image?size=custom&guid=586cd58e-a73c-11ec-8825-fa163eb018f7&w=300&h=300`
    );
  } catch (error) {
    return null;
  }
}

export async function getSongInfo() {
  try {
    const response = await axios.get(
      'https://proxy.radiojar.com/api/stations/61qtsv9abkhvv/now_playing/?callback=jQuery21308417471474422513_1647663979087&_=1647663979088',
      { headers: { 'Access-Control-Allow-Origin': '*' } }
    );

    const result = JSON.parse(
      response.data
        .replace('jQuery2130050955653737168705_1647604481984(', '')
        .replace(');', '')
    );

    // eslint-disable-next-line no-console
    console.log(result);

    return result;
  } catch (error) {
    return error.message;
  }
}

// export async function getSongCover(artist, title) {
//   try {
//     const response = await axios.get(
//       `https://api.discogs.com/database/search?artist=${artist}&q=${title}&key=${process.env.REACT_APP_DISCOGS_CONSUMER_KEY}&secret=${process.env.REACT_APP_DISCOGS_CONSUMER_SECRET}`
//     );

//     const cover = response.data.results[0].cover_image;

//     return cover;
//   } catch (error) {
//     return null;
//   }
// }

// export async function getSongInfo() {
//   try {
//     const response = await axios.get(
//       'https://proxy.zeno.fm/api/stations/pe1r8ntrsg0uv/now_playing/?callback=jQuery2130050955653737168705_1647604481984&_=1647604482210'
//     );

//     const result = JSON.parse(
//       response.data
//         .replace('jQuery2130050955653737168705_1647604481984(', '')
//         .replace(');', '')
//     );

//     return result;
//   } catch (error) {
//     return error.message;
//   }
// }
