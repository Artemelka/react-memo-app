import React, { memo, useMemo } from 'react';
import { fasterClassNames } from '../../../../utils';
import { getValidPercent, getStatuses } from '../_utils';
import { CIRCLE_SIZE_CONFIG, CIRCLE_SIZE, PROGRESS_STATUSES } from '../constants';
import { ProgressProps } from '../types';
import style from '../progress.module.scss';

const cn = fasterClassNames(style);

export const ProgressCircular = memo(
  ({
    percent: value,
    singleColor = true,
    size = CIRCLE_SIZE.L,
    status = PROGRESS_STATUSES.BASE,
    withContour = false,
    withText,
  }: ProgressProps) => {
    const {
      isError, isPrimary, isSuccess, isWarning,
    } = useMemo(
      () => getStatuses(Boolean(singleColor && status), value, status),
      [singleColor, status, value],
    );
    const { radius, strokeWidth } = useMemo(() => CIRCLE_SIZE_CONFIG[size], [
      size,
    ]);
    const percent = useMemo(() => getValidPercent(value), [value]);
    const diameter = useMemo(() => radius * 2, [radius]);
    const dashRadius = useMemo(() => (diameter - strokeWidth) / 2, [
      diameter,
      strokeWidth,
    ]);
    const dashArray = useMemo(() => dashRadius * Math.PI * 2, [dashRadius]);
    const dashOffset = useMemo(() => dashArray - (dashArray * percent) / 100, [
      dashArray,
      percent,
    ]);

    return (
      <div className={cn('Progress', { 'Progress--circular': true })}>
        <svg
          className={cn('Progress__circle')}
          height={diameter}
          viewBox={`0 0 ${diameter} ${diameter}`}
          width={diameter}
        >
          <circle
            className={cn('Progress__circle-line', {
              'Progress__circle-line--with-contour': withContour,
            })}
            cx={radius}
            cy={radius}
            r={dashRadius}
            strokeWidth={`${strokeWidth}px`}
          />
          <circle
            className={cn('Progress__circle-status', {
              'Progress__circle-status--error': isError,
              'Progress__circle-status--primary': isPrimary,
              'Progress__circle-status--success': isSuccess,
              'Progress__circle-status--warning': isWarning,
            })}
            cx={radius}
            cy={radius}
            r={dashRadius}
            strokeDasharray={dashArray}
            strokeWidth={`${strokeWidth}px`}
            style={{ strokeDashoffset: dashOffset }}
            transform={`rotate(-90 ${radius} ${radius})`}
          />
          {withText && (
            <text
              className={cn('Progress__circle-text')}
              dy=".3em"
              style={{ fontSize: `${radius / 2}` }}
              textAnchor="middle"
              x="50%"
              y="50%"
            >
              {`${percent}%`}
            </text>
          )}
        </svg>
      </div>
    );
  },
);
