import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export default function useFeedsSearch(userId, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [feeds, setFeeds] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const reset = useCallback(async () => {
    setFeeds([]);
  }, []);

  useEffect(() => {
    if (pageNumber === 1) {
      reset();
    }

    setLoading(true);
    setError(false);
    let cancel;

    axios({
      method: 'GET',
      url: '/feeds',
      params: { user: userId, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => {
        cancel = c;
      }),
    })
      .then((res) => {
        setFeeds((prevFeeds) => [
          ...new Set([...prevFeeds, ...res.data.feeds]),
        ]);
        setHasMore(res.data.totalPages > res.data.currentPage);
        setLoading(false);
      })
      .catch((thrown) => {
        if (axios.isCancel(thrown)) return;
        setError(true);
      });

    return () => cancel();
  }, [userId, pageNumber, reset]);

  return { loading, error, feeds, hasMore, reset };
}
