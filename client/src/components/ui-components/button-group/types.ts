import { ReactNode } from 'react';
import {
  ButtonFocusEvent,
  ButtonKeyboardEvent,
  ButtonMouseEvent,
} from '../button/types';

export type ButtonGroupItem = {
  disabled?: boolean;
  icon?: ReactNode;
  id?: string | number;
  onBlur?: (buttonFocusEvent: ButtonFocusEvent) => void;
  onClick?: (buttonClickEvent: ButtonMouseEvent) => void;
  onFocus?: (buttonFocusEvent: ButtonFocusEvent) => void;
  onKeyPress?: (buttonKeyboardEvent: ButtonKeyboardEvent) => void;
  value?: string;
};
