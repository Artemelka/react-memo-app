import React, {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  memo,
  MouseEvent,
  RefObject,
  useCallback,
  useState,
} from 'react';
import { fasterClassNames } from '../../../utils';
import {
  CheckboxChangeEvent,
  CheckboxFocusEvent,
  CheckboxKeyboardEvent,
  CheckboxMouseEvent,
} from './types';
import styles from './checkbox.module.scss';

const cn = fasterClassNames(styles);
const CLASS_NAME = 'Checkbox';

type CheckboxProps = {
  /** Флаг выбранного состояния */
  checked: boolean;
  /** Объект для формирования рефа */
  checkboxRef?: RefObject<HTMLInputElement>;
  /** Флаг неактивного состояния */
  disabled?: boolean;
  /** уникальный идентификатор (возвращается в onChange) */
  id: string | number;
  /** Флаг промежуточного состояния (используется при объединении нескольких компонентов) */
  indeterminate?: boolean;
  /** Задает имя инпута */
  name: string;
  /** Колбек события потери фокуса */
  onBlur?: (checkboxEvent: CheckboxFocusEvent) => void;
  /** Колбэк события изменения значения */
  onChange?: (checkboxEvent: CheckboxChangeEvent) => void;
  /** Колбек события клика */
  onClick?: (checkboxEvent: CheckboxMouseEvent) => void;
  /** Колбек события фокуса */
  onFocus?: (checkboxEvent: CheckboxFocusEvent) => void;
  /** Колбек события клавиатуры (нажатие клавиши) */
  onKeyDown?: (checkboxEvent: CheckboxKeyboardEvent) => void;
  /** Колбек события клавиатуры (общий) */
  onKeyPress?: (checkboxEvent: CheckboxKeyboardEvent) => void;
  /** Колбек события клавиатуры (отпуск клавиши) */
  onKeyUp?: (checkboxEvent: CheckboxKeyboardEvent) => void;
  /** Задает размер кнопки */
  size?: 'small' | 'medium' | 'big';
  /** Задает цветовую тему кнопки */
  themeColor?: 'base' | 'accent' | 'secondary' | 'primary' | 'success' | 'error';
  /** Задает вид кнопки */
  variant?: 'base' | 'filled' | 'only-text';
};

export const Checkbox = memo(({
  checked,
  checkboxRef,
  disabled = false,
  id,
  indeterminate = false,
  name,
  onBlur = () => false,
  onChange = () => false,
  onClick = () => false,
  onFocus = () => false,
  onKeyDown = () => false,
  onKeyPress = () => false,
  onKeyUp = () => false,
  size = 'medium',
  themeColor = 'base',
  variant = 'base',
}: CheckboxProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {
    onBlur({ event, name, checked });
    setIsFocused(false);
  }, [checked, name, onBlur]);

  const handleFocus = useCallback((event: FocusEvent<HTMLInputElement>) => {
    onFocus({ event, name, checked });
    setIsFocused(true);
  }, [checked, name, onFocus]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { checked: checkboxState } = event.currentTarget;

    onChange({ event, checked: checkboxState, name });
  }, [name, onChange]);

  const handleClick = useCallback((event: MouseEvent<HTMLInputElement>) => {
    const { checked: checkboxState } = event.currentTarget;

    onClick({ event, checked: checkboxState, name });
  }, [name, onClick]);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    const { checked: checkboxState } = event.currentTarget;

    onKeyDown({ event, checked: checkboxState, name });
  }, [name, onKeyDown]);

  const handleKeyPress = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    const { checked: checkboxState } = event.currentTarget;

    onKeyPress({ event, checked: checkboxState, name });
  }, [name, onKeyPress]);

  const handleKeyUp = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    const { checked: checkboxState } = event.currentTarget;

    onKeyUp({ event, checked: checkboxState, name });
  }, [name, onKeyUp]);

  return (
    <label
      className={cn(CLASS_NAME, {
        [`${CLASS_NAME}--checked`]: checked,
        [`${CLASS_NAME}--disabled`]: disabled,
        [`${CLASS_NAME}--size-${size}`]: Boolean(size),
        [`${CLASS_NAME}--variant-${variant}`]: Boolean(variant),
        [`${CLASS_NAME}--variant-${variant}-checked`]: variant && checked,
        [`${CLASS_NAME}--theme-${themeColor}`]: Boolean(themeColor),
        [`${CLASS_NAME}--theme-${themeColor}-focused`]: themeColor && isFocused,
      })}
      htmlFor={`${id}`}
    >
      <input
        ref={checkboxRef}
        checked={checked}
        className={cn(`${CLASS_NAME}__input`)}
        disabled={disabled}
        id={`${id}`}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        onClick={handleClick}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onKeyPress={handleKeyPress}
        onKeyUp={handleKeyUp}
        type="checkbox"
      />
      <span
        className={cn(`${CLASS_NAME}__marker`, {
          [`${CLASS_NAME}__marker--checked`]: checked,
          [`${CLASS_NAME}__marker--disabled`]: disabled,
          [`${CLASS_NAME}__marker--indeterminate`]: indeterminate,
          [`${CLASS_NAME}__marker--size-${size}`]: Boolean(size),
          [`${CLASS_NAME}__marker--variant-${variant}`]: Boolean(variant),
          [`${CLASS_NAME}__marker--variant-filled-base`]: variant === 'filled' && themeColor === 'base',
          [`${CLASS_NAME}__marker--theme-${themeColor}`]: Boolean(themeColor),
        })}
      />
    </label>
  );
});
