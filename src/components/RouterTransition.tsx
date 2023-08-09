import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { startNavigationProgress, completeNavigationProgress, NavigationProgress } from '@mantine/nprogress';

export function RouterTransition() {
  const { asPath, events } = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => url !== asPath && startNavigationProgress();
    const handleComplete = () => completeNavigationProgress();

    events.on('routeChangeStart', handleStart);
    events.on('routeChangeComplete', handleComplete);
    events.on('routeChangeError', handleComplete);

    return () => {
      events.off('routeChangeStart', handleStart);
      events.off('routeChangeComplete', handleComplete);
      events.off('routeChangeError', handleComplete);
    };
  }, [asPath]);

  return <NavigationProgress autoReset={true} />;
}
