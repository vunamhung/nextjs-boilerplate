import { useState, useEffect } from 'react';
import { debounce } from '@/utilities/debounce';

// More info: https://hackernoon.com/builing-an-infinite-scroll-using-react-hooks-pe113urj

export default function useInfiniteScroll(callback) {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement?.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement?.scrollHeight || document.body.scrollHeight;

    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setIsFetching(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 500));
    return () => window.removeEventListener('scroll', debounce(handleScroll, 500));
  }, []);

  useEffect(() => {
    if (!isFetching) return;

    callback(() => {
      console.log('called back');
    });
  }, [isFetching]);

  return [isFetching, setIsFetching];
}
