import React, {
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  RefObject,
  useState,
} from 'react';
import { fasterClassNames } from '../../../utils';
import { KEY_CODES } from '../../../constants';
import {
  ButtonAlignText,
  ButtonFocusEvent,
  ButtonKeyboardEvent,
  ButtonMouseEvent,
  ButtonRound,
  ButtonSize,
  ButtonThemeColor,
  ButtonVariant,
} from './types';
import style from './button.module.scss';

const cn = fasterClassNames(style);
const CLASS_NAME = 'Button';

type ButtonProps = {
  /** Задает горизонтальное выравнивание контента (работает только при isFullWidth: true) */
  alignText?: ButtonAlignText;
  /** Объект для формирования рефа */
  buttonRef?: RefObject<HTMLButtonElement>;
  /** Флаг неактивного состояния */
  disabled?: boolean;
  /** Елемент иконки */
  icon?: ReactNode;
  /** уникальный идентификатор (возвращается в onClick) */
  id?: string | number;
  /** Флаг активного состояния кнопки */
  isActive?: boolean;
  /** Флаг устанавливает свойство width: 100% */
  isFullWidth?: boolean;
  /** Колбек события потери фокуса */
  onBlur?: (buttonFocusEvent: ButtonFocusEvent) => void;
  /** Колбек события клика */
  onClick?: (buttonClickEvent: ButtonMouseEvent) => void;
  /** Колбек события фокуса */
  onFocus?: (buttonFocusEvent: ButtonFocusEvent) => void;
  /** Колбек события клавиатуры (нажатие клавиши) */
  onKeyDown?: (buttonKeyboardEvent: ButtonKeyboardEvent) => void;
  /** Колбек события клавиатуры (общий) */
  onKeyPress?: (buttonKeyboardEvent: ButtonKeyboardEvent) => void;
  /** Колбек события клавиатуры (отпуск клавиши) */
  onKeyUp?: (buttonKeyboardEvent: ButtonKeyboardEvent) => void;
  /** Задает сторону скругления углов кнопки */
  roundSide?: ButtonRound;
  /** Задает размер кнопки */
  size?: ButtonSize;
  /** Задает цветовую тему кнопки */
  themeColor?: ButtonThemeColor;
  /**  */
  type?: 'button' | 'submit' | 'reset';
  /** Содержимое кнопки */
  value?: string;
  /** Задает вид кнопки */
  variant?: ButtonVariant;
};

export const ButtonComponent = ({
  alignText = 'center',
  buttonRef,
  disabled = false,
  icon,
  id,
  isActive = false,
  isFullWidth = false,
  onBlur = () => false,
  onClick = () => false,
  onFocus = () => false,
  onKeyDown = () => false,
  onKeyPress = () => false,
  onKeyUp = () => false,
  roundSide,
  size = 'medium',
  themeColor = 'base',
  type = 'button',
  value,
  variant = 'base',
}: ButtonProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = (event: FocusEvent<HTMLButtonElement>) => {
    onBlur({ event, id });
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onClick({ event, id });
    }
  };

  const handleFocus = (event: FocusEvent<HTMLButtonElement>) => {
    onFocus({ event, id });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!disabled) {
      if (KEY_CODES.ENTER === event.keyCode) {
        setIsFocused(true);
      }

      onKeyDown({ event, id });
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onKeyPress({ event, id });
    }
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!disabled) {
      if (KEY_CODES.ENTER === event.keyCode) {
        setIsFocused(false);
      }

      onKeyUp({ event, id });
    }
  };

  return (
    <button
      ref={buttonRef}
      className={cn(CLASS_NAME, {
        [`${CLASS_NAME}--active`]: isActive,
        [`${CLASS_NAME}--active-disabled`]: isActive && disabled,
        [`${CLASS_NAME}--align-${alignText}`]: Boolean(alignText),
        [`${CLASS_NAME}--disabled`]: disabled,
        [`${CLASS_NAME}--focused`]: isFocused,
        [`${CLASS_NAME}--full-width`]: isFullWidth,
        [`${CLASS_NAME}--rounded`]: Boolean(roundSide),
        [`${CLASS_NAME}--round-${roundSide}`]: Boolean(roundSide),
        [`${CLASS_NAME}--icon`]: Boolean(!value),
        [`${CLASS_NAME}--icon-${size}`]: Boolean(!value && size),
        [`${CLASS_NAME}--theme-${themeColor}`]: Boolean(themeColor),
        [`${CLASS_NAME}--size-${size}`]: Boolean(size),
        [`${CLASS_NAME}--size-${size}-base`]: Boolean(size && variant === 'base'),
        [`${CLASS_NAME}--variant-${variant}`]: Boolean(variant),
        [`${CLASS_NAME}--variant-${variant}-no-icon`]: Boolean(themeColor === 'base' && value),
      })}
      disabled={disabled || isActive}
      onBlur={handleBlur}
      onClick={handleClick}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      onKeyPress={handleKeyPress}
      onKeyUp={handleKeyUp}
      type={type}// eslint-disable-line react/button-has-type
    >
      <span
        className={cn(`${CLASS_NAME}__content`, {
          [`${CLASS_NAME}__content--only-icon`]: !value,
        })}
      >
        {icon && (
          <span
            className={cn(`${CLASS_NAME}__icon-left`, {
              [`${CLASS_NAME}__icon-left--only`]: !value,
            })}
          >
            {icon}
          </span>
        )}
        {value}
      </span>
    </button>
  );
};

export const Button = ButtonComponent;