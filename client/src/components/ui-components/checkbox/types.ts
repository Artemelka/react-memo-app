import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
} from 'react';

type CheckboxEventParams = {
  name: string;
  checked: boolean;
};
export type CheckboxFocusEvent = CheckboxEventParams & {
  event: FocusEvent<HTMLInputElement>;
};
export type CheckboxChangeEvent = CheckboxEventParams & {
  event: ChangeEvent<HTMLInputElement>;
};
export type CheckboxMouseEvent = CheckboxEventParams & {
  event: MouseEvent<HTMLInputElement>;
};
export type CheckboxKeyboardEvent = CheckboxEventParams & {
  event: KeyboardEvent<HTMLInputElement>;
};
