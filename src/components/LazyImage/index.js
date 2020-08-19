import { useEffect } from 'react';
import LazyLoad from 'vanilla-lazyload';
import useOnMount from '@/hooks/useOnMount';

export default function LazyImage({ className, placeholder, src, srcset, sizes, width, height, alt }) {
  useOnMount(() => {
    if (!document.lazyLoadInstance) {
      document.lazyLoadInstance = new LazyLoad({
        elements_selector: '.lazy',
      });
    }
  });

  useEffect(() => {
    document.lazyLoadInstance.update();
  });

  // Just render the image with data-src
  return (
    <img
      className={`lazy ${className}`}
      src={placeholder}
      data-src={src}
      data-srcset={srcset}
      data-sizes={sizes}
      width={width}
      height={height}
      alt={alt || 'thumbnail'}
    />
  );
}
