import axios from 'axios';

export async function getFeed(feedId) {
  try {
    return await axios.get(`/feeds/${feedId}`);
  } catch (error) {
    return error.message;
  }
}

export async function saveFeed(newFeed) {
  const BREEZ_TOKEN = localStorage.getItem('BREEZ_TOKEN');

  try {
    const response = await axios.post('/feeds', newFeed, {
      headers: {
        Authorization: `Bearer ${BREEZ_TOKEN}`,
      },
    });

    return response;
  } catch (error) {
    return error.message;
  }
}

export async function editFeed(feed) {
  const BREEZ_TOKEN = localStorage.getItem('BREEZ_TOKEN');

  try {
    const response = await axios.post(`/feeds/${feed._id}`, feed, {
      headers: {
        Authorization: `Bearer ${BREEZ_TOKEN}`,
      },
    });

    return response;
  } catch (error) {
    return error.message;
  }
}

export async function deleteFeed(feed) {
  const BREEZ_TOKEN = localStorage.getItem('BREEZ_TOKEN');

  try {
    const response = await axios.post(`/feeds/${feed._id}`, {
      headers: {
        Authorization: `Bearer ${BREEZ_TOKEN}`,
      },
    });

    return response;
  } catch (error) {
    return error.message;
  }
}
