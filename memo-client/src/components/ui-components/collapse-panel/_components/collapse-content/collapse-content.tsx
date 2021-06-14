import React, { memo, PropsWithChildren, RefObject } from 'react';
import { fasterClassNames } from '../../../../../utils';
import { Button } from '../../../button';
import { ButtonSize, ButtonThemeColor } from '../../../button/types';
import { CollapseContentActionsAlign, ContentButtonGroupItem } from '../../types';
import style from './collapse-content.module.scss';

const cn = fasterClassNames(style);
const CLASS_NAME = 'Collapse-content';

type CollapseContentProps = PropsWithChildren<{
  actionButtons?: Array<ContentButtonGroupItem>;
  actionsAlign?: CollapseContentActionsAlign;
  contentRef: RefObject<HTMLDivElement>;
  disabled?: boolean;
  id?: string | number;
  isClickable?: boolean;
  isOpen?: boolean;
  size?: ButtonSize;
  themeColor?: ButtonThemeColor;
}>;

export const CollapseContent = memo(({
  actionButtons = [],
  actionsAlign = 'left',
  children,
  contentRef,
  disabled: mainDisabled,
  id: mainId,
  isClickable = false,
  isOpen = false,
  size,
  themeColor: mainThemeColor,
}: CollapseContentProps) => (
  <div
    ref={contentRef}
    className={cn(`${CLASS_NAME}`, {
      [`${CLASS_NAME}--clickable`]: isClickable,
    })}
  >
    <div className={cn(`${CLASS_NAME}__main`)}>
      {children}
    </div>
    {Boolean(actionButtons.length) && !mainDisabled && (
      <div
        className={cn(`${CLASS_NAME}__actions`, {
          [`${CLASS_NAME}__actions--align-${actionsAlign}`]: Boolean(actionsAlign),
          [`${CLASS_NAME}__actions--open`]: isOpen,
          [`${CLASS_NAME}__actions--theme-${mainThemeColor}`]: Boolean(mainThemeColor),
        })}
      >
        {actionButtons.map(({
          disabled,
          id,
          onBlur,
          onClick,
          onFocus,
          onKeyPress,
          themeColor,
          value,
          variant,
        }) => (
          <div key={value} className={cn(`${CLASS_NAME}__button`)}>
            <Button
              disabled={disabled}
              id={id || mainId}
              onBlur={onBlur}
              onClick={onClick}
              onFocus={onFocus}
              onKeyPress={onKeyPress}
              size={size}
              themeColor={themeColor || mainThemeColor}
              value={value}
              variant={variant || 'only-text'}
            />
          </div>
        ))}
      </div>
    )}
  </div>
));
