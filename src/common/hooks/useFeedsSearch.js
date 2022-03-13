import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFeedsSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [feeds, setFeeds] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const refreshFeeds = () => {
    setFeeds([]);
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;

    axios({
      method: 'GET',
      url: '/feeds',
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => {
        cancel = c;
      }),
    })
      .then((res) => {
        setFeeds((prevFeeds) => [...prevFeeds, ...res.data.feeds]);
        setHasMore(res.data.totalPages > res.data.currentPage);
        setLoading(false);
      })
      .catch((thrown) => {
        if (axios.isCancel(thrown)) return;
        setError(true);
      });

    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, feeds, hasMore, refreshFeeds };
}
