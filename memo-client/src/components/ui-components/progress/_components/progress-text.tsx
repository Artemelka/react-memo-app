import React, { memo } from 'react';
import { fasterClassNames } from '../../../../utils';
import { CIRCLE_SIZE, PROGRESS_STATUSES } from '../constants';
import { ProgressTextProps } from '../types';
import style from '../progress.module.scss';

const cn = fasterClassNames(style);

export const ProgressText = memo(({
  label,
  percent,
  status = PROGRESS_STATUSES.BASE,
  size = CIRCLE_SIZE.L,
  withContour = false,
}: ProgressTextProps) => (
  <div className={cn('Progress')}>
    <p
      className={cn('Progress__title', {
        'Progress__title--with-contour': withContour,
        'Progress__title--error': status === PROGRESS_STATUSES.ERROR,
        'Progress__title--primary': status === PROGRESS_STATUSES.PRIMARY,
        'Progress__title--success': status === PROGRESS_STATUSES.SUCCESS,
        'Progress__title--warning': status === PROGRESS_STATUSES.WARNING,
        'Progress__title--size-s': size === CIRCLE_SIZE.S,
        'Progress__title--size-m': size === CIRCLE_SIZE.M,
        'Progress__title--size-l': size === CIRCLE_SIZE.L,
        'Progress__title--size-xl': size === CIRCLE_SIZE.XL,
      })}
    >
      {label ? `${label}: ${percent}%` : `${percent}%`}
    </p>
  </div>
));
