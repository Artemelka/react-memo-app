export const CIRCLE_SIZE: Record<string, 'S' | 'M' | 'L' | 'XL'> = {
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL',
};

export const PROGRESS_STATUSES: Record<
  string,
  'ERROR' | 'SUCCESS' | 'WARNING' | 'PRIMARY' | 'BASE'
> = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  PRIMARY: 'PRIMARY',
  BASE: 'BASE',
};

export const CIRCLE_SIZE_CONFIG = {
  [CIRCLE_SIZE.S]: {
    strokeWidth: 2,
    radius: 20,
  },
  [CIRCLE_SIZE.M]: {
    strokeWidth: 3,
    radius: 40,
  },
  [CIRCLE_SIZE.L]: {
    strokeWidth: 4,
    radius: 60,
  },
  [CIRCLE_SIZE.XL]: {
    strokeWidth: 5,
    radius: 80,
  },
};
