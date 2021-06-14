import React, { memo } from 'react';
import { fasterClassNames } from '../../../../utils';
import { getValidPercent, getStatuses } from '../_utils';
import { CIRCLE_SIZE, PROGRESS_STATUSES } from '../constants';
import { ProgressProps } from '../types';
import style from '../progress.module.scss';

const cn = fasterClassNames(style);

export const ProgressLinear = memo(({
  percent,
  singleColor = true,
  status = PROGRESS_STATUSES.BASE,
  size = CIRCLE_SIZE.S,
  withContour = false,
  withText,
}: ProgressProps) => {
  const value = getValidPercent(percent);
  const {
    isBase, isError, isPrimary, isSuccess, isWarning,
  } = getStatuses(
    Boolean(singleColor && status),
    value,
    status,
  );

  return (
    <div className={cn('Progress', { 'Progress--linear': true })}>
      <div
        className={cn('Progress__line', {
          'Progress__line--size-x': size === CIRCLE_SIZE.S,
          'Progress__line--size-m': size === CIRCLE_SIZE.M,
          'Progress__line--size-l': size === CIRCLE_SIZE.L,
          'Progress__line--size-xl': size === CIRCLE_SIZE.XL,
          'Progress__line--with-contour': withContour,
        })}
      >
        <div
          className={cn('Progress__status', {
            'Progress__status--base': isBase,
            'Progress__status--primary': isPrimary,
            'Progress__status--error': isError,
            'Progress__status--success': isSuccess,
            'Progress__status--warning': isWarning,
          })}
          style={{ width: `${value}%` }}
        />
        {withText && size !== CIRCLE_SIZE.S && (
          <div className={cn('Progress__text')}>{`${value}%`}</div>
        )}
      </div>
    </div>
  );
});
