import React, { memo, useCallback, useState } from 'react';
import { fasterClassNames } from '../../../utils';
import styles from './lazy-image.module.scss';

const cn = fasterClassNames(styles);
const CLASS_NAME = 'Lazy-image';

const PLACEHOLDER_URL = '/placeholders/photo-placeholder.png';

type LazyImageProps = {
  src: string;
  alt: string;
};

export const LazyImage = memo(({ src, alt }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {!isLoaded && <img className={cn(CLASS_NAME)} src={PLACEHOLDER_URL} alt="alt"/>}
      <img
        className={cn(CLASS_NAME, {
          [`${CLASS_NAME}--hidden`]: !isLoaded
        })}
        onLoad={handleLoad}
        src={src}
        alt={alt}
      />
    </>
  );
});