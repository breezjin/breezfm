import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

export default async function getSongInfo() {
  try {
    const response = await axios({
      url: `https://proxy.radiojar.com/api/stations/${process.env.REACT_APP_RADIOJAR_STATION}/now_playing/?_=${process.env.REACT_APP_RADIOJAR_MOUNT}`,
      adapter: jsonpAdapter,
    });

    const id = response.data.guid;

    const result = await axios.get(
      `https://radiojar-lib.appspot.com/getmediapublicdetails/?guid=${id}`
    );

    return result.data;
  } catch (error) {
    return error.message;
  }
}
