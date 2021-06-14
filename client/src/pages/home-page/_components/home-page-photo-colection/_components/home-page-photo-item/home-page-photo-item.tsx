import React from 'react';
import { fasterClassNames } from '../../../../../../utils';
import { LazyImage, Text } from '../../../../../../components';
import styles from './home-page-photo-item.module.scss';

const cn = fasterClassNames(styles);
const CLASS_NAME = 'Home-page-photo-item';

type HomePagePhotoItemProps = {
  name: string;
  onClick: (url: string) => void;
  url: string;
};

export const HomePagePhotoItem = ({
  name,
  onClick,
  url,
}: HomePagePhotoItemProps) => {
  const handlePhotoClick = () => {
    onClick(url);
  };

  return (
    <button
      className={cn(`${CLASS_NAME}`)}
      onClick={handlePhotoClick}
      type="button"
    >
      <LazyImage src={url} alt={name}/>
      <span className={cn(`${CLASS_NAME}__name`)}>
        <Text>{name}</Text>
      </span>
    </button>
  );
};