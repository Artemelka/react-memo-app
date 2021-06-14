import React, { memo, useMemo } from 'react';
import { fasterClassNames } from '../../../utils';
import { Button } from '../button';
import {
  ButtonAlignText,
  ButtonMouseEvent,
  ButtonSize,
  ButtonThemeColor,
  ButtonVariant,
} from '../button/types';
import { ButtonGroupItem } from './types';
import style from './button-group.module.scss';

const cn = fasterClassNames(style);
const CLASS_NAME = 'Button-group';

type ButtonGroupPropsType = {
  /** Устанавливает флаг isActive у кнопки с переанным id */
  activeId?: string | number;
  /** Задает горизонтальное выравнивание контента кнопок */
  alignText?: ButtonAlignText;
  /** Массив пармаетров для кнопок (принемает не все параметры Button) */
  buttons: Array<ButtonGroupItem>;
  /** Флаг устанавливает свойство width: 100% */
  isFullWidth?: boolean;
  /** Флаг для отображения кнопок с иконками */
  isOnlyIcons?: boolean;
  /** Флаг для отображения кнопок вертикально */
  isVertical?: boolean;
  /** Колбэк события клика по кнопке */
  onClick?: (buttonClickEvent: ButtonMouseEvent) => void;
  /** Задает размер кнопок */
  size?: ButtonSize;
  /** Задает цветовую тему кнопок */
  themeColor?: ButtonThemeColor;
  /** Задает вид кнопок */
  variant?: ButtonVariant;
};

export const ButtonGroup = memo(({
  activeId = '',
  alignText,
  buttons,
  isFullWidth = false,
  isOnlyIcons = false,
  isVertical = false,
  onClick = () => false,
  size,
  themeColor,
  variant,
}: ButtonGroupPropsType) => {
  const startRoundSide = useMemo(() => (isVertical ? 'top' : 'left'), [isVertical]);
  const endRoundSide = useMemo(() => (isVertical ? 'bottom' : 'right'), [isVertical]);

  return (
    <ul
      className={cn(CLASS_NAME, {
        [`${CLASS_NAME}--full-width`]: isFullWidth && !isOnlyIcons && isVertical,
        [`${CLASS_NAME}--vertical`]: isVertical,
      })}
    >
      {buttons.map(({
        disabled,
        icon,
        id,
        onBlur,
        onClick: personalHandler,
        onFocus,
        onKeyPress,
        value,
      }, index) => (
        <li
          key={value || id || index}
          className={cn(`${CLASS_NAME}__item`, {
            [`${CLASS_NAME}__item--separated`]: Boolean(variant === 'only-text' && value),
            [`${CLASS_NAME}__item--separated-filled`]: Boolean(variant === 'filled' && value),
            [`${CLASS_NAME}__item--separated-vertical`]: Boolean(variant === 'only-text' && value && isVertical),
            [`${CLASS_NAME}__item--separated-vertical-filled`]: Boolean(variant === 'filled' && value && isVertical),
            [`${CLASS_NAME}__item--only-icon`]: isOnlyIcons,
            [`${CLASS_NAME}__item--only-icon-vertical`]: isOnlyIcons && isVertical,
            [`${CLASS_NAME}__item--vertical`]: isVertical,
          })}
        >
          <Button
            alignText={alignText}
            disabled={disabled}
            icon={icon}
            id={id}
            isActive={activeId === id}
            isFullWidth={isVertical}
            onBlur={onBlur}
            onClick={personalHandler || onClick}
            onFocus={onFocus}
            onKeyPress={onKeyPress}
            roundSide={
              ((index === 0 && startRoundSide) || (index === buttons.length - 1 && endRoundSide))
              || undefined
            }
            size={size}
            themeColor={themeColor}
            type="button"
            variant={variant}
            {...(isOnlyIcons ? {} : { value })}
            {...(index === 0 ? { roundSide: startRoundSide } : {})}
            {...(index === buttons.length - 1 ? { roundSide: endRoundSide } : {})}
          />
        </li>
      ))}
    </ul>
  );
});
