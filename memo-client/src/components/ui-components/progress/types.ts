export type ProgressStatus =
  | 'ERROR'
  | 'SUCCESS'
  | 'WARNING'
  | 'PRIMARY'
  | 'BASE';

export type ProgressBaseProps = {
  /** Значение индикатора в % */
  percent: number;
  /** Размер индикатора (принимает значения константы CIRCLE_SIZE) */
  size?: 'S' | 'M' | 'L' | 'XL';
  /** параметр цветового отображения индикатора
   * (принимает значения константы PROGRESS_STATUSES, зависит от singleColor)
   * */
  status?: ProgressStatus;
  /** Флаг отображения контура индикатора */
  withContour?: boolean;
};

export type ProgressProps = ProgressBaseProps & {
  /** Флаг одноцветного отображения индикатора (цвет задается через параметр status) */
  singleColor?: boolean;
  /** Флаг отображения числового индикатора в центре */
  withText?: boolean;
};

export type ProgressTextProps = ProgressBaseProps & {
  /** Текст перед индикатором */
  label?: string;
};
