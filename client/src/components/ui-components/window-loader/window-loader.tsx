import React from 'react';
import { fasterClassNames } from '../../../utils';
import { WindowLoaderThemeColor } from './types';
import style from './window-loader.module.scss';

const cn = fasterClassNames(style);
const loaderCircleItems = [...new Array(5)];
const CLASS_NAME = 'Window-loader';

type LoaderProps = {
  /** Устанавливает цвет лоадера */
  themeColor?: WindowLoaderThemeColor;
};

export const WindowLoader = ({ themeColor = 'main' }: LoaderProps) => (
  <div className={cn(CLASS_NAME)}>
    {loaderCircleItems.map((item, i) => (
      <span
        key={i}
        className={cn(`${CLASS_NAME}__circle`, {
          [`${CLASS_NAME}__circle--${themeColor}`]: Boolean(themeColor),
        })}
      />
    ))}
  </div>
);
