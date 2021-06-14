import React from 'react';
import { fasterClassNames } from '../../../utils';
import style from './label.module.scss';

const cn = fasterClassNames(style);
const CLASS_NAME = 'Label';

type LabelProps = {
  /** Текстовое содержимое лейбла */
  children: string;
  /** Флаг неактивного состояния */
  disabled?: boolean;
  /** id инпута для которого предназначен лейбл */
  htmlFor?: string | number;
  /** Флаг активного состояния */
  isActive?: boolean;
  /** Флаг состояния ошибки */
  isError?: boolean;
  /** Флаг устанавливает свойство width: 100% */
  isFullWidth?: boolean;
  /** Задает отступ лейбла в зависимости от позици расположения */
  position?: 'left' | 'right' |'top' ;
  /** Задает размер лейбла */
  size?: 'big' | 'medium' | 'small';
  /** Задает цветовую тему лейбла */
  themeColor?: 'base' | 'accent' | 'main' | 'primary' | 'secondary';
};

export const Label = ({
  children,
  disabled = false,
  htmlFor,
  isActive = false,
  isError = false,
  isFullWidth = false,
  position = 'top',
  size = 'medium',
  themeColor = 'main',
}: LabelProps) => (
  <label
    className={cn(CLASS_NAME, {
      [`${CLASS_NAME}--clickable`]: Boolean(htmlFor),
      [`${CLASS_NAME}--disabled`]: disabled,
      [`${CLASS_NAME}--active`]: isActive,
      [`${CLASS_NAME}--error`]: isError,
      [`${CLASS_NAME}--full-width`]: isFullWidth,
      [`${CLASS_NAME}--size-${size}`]: Boolean(size),
      [`${CLASS_NAME}--position-${position}`]: Boolean(position),
      [`${CLASS_NAME}--theme-${themeColor}`]: Boolean(themeColor),
    })}
    htmlFor={`${htmlFor}`}
  >
    {children}
  </label>
);
