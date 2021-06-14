import { ReactNode } from 'react';
import { ButtonThemeColor, ButtonVariant } from '../button/types';
import { ButtonGroupItem } from '../button-group/types';

export type ContentButtonGroupItem = ButtonGroupItem & {
  themeColor?: ButtonThemeColor;
  variant?: ButtonVariant;
};

export type CollapseHeaderActionConfig = {
  openIcon: ReactNode;
  closeIcon: ReactNode;
  actionsConfig?: Array<ContentButtonGroupItem>;
};

export type CollapseContentActionsAlign = 'left' | 'center' | 'right';
