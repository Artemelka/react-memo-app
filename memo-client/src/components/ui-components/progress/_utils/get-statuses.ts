import { PROGRESS_STATUSES } from '../constants';

export const getStatuses = (
  singleColor: boolean,
  value: number,
  status: keyof typeof PROGRESS_STATUSES,
) => ({
  isBase: singleColor && status === PROGRESS_STATUSES.BASE,
  isError:
    (!singleColor && value <= 20)
    || (singleColor && status === PROGRESS_STATUSES.ERROR),
  isPrimary:
    (!singleColor && value > 50 && value < 80)
    || (singleColor && status === PROGRESS_STATUSES.PRIMARY),
  isSuccess:
    (!singleColor && value > 80)
    || (singleColor && status === PROGRESS_STATUSES.SUCCESS),
  isWarning:
    (!singleColor && value > 20 && value <= 50)
    || (singleColor && status === PROGRESS_STATUSES.WARNING),
});
