import React, {
  memo,
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useEffect, useRef,
} from 'react';
import { fasterClassNames } from '../../../utils';
import { KEY_CODES } from '../../../constants';
import style from './overlay.module.scss';

const cn = fasterClassNames(style);
const CLASS_NAME = 'Overlay';
type DocumentKeyboardEvent = Event & {
  keyCode: number;
}
type OverlayProps = PropsWithChildren<{
  /** Изменяет значение свойства position с fixed на absolute */
  inContainer?: boolean;
  /** Флаг для изменения цвета затемнения на светлый */
  isLightColor?: boolean;
  /** Флаг делающий прозрачным слой затемнения */
  isTransparent?: boolean;
  /** Колбэк события клика по слою затемнения (так же вызывается при нажатии клавиши ESC) */
  onOverlayClick?: () => void;
}>;

export const Overlay = memo(({
  children,
  inContainer = false,
  isLightColor = false,
  isTransparent = false,
  onOverlayClick = () => false,
}: OverlayProps) => {
  const overlayRef = useRef(null);
  const handleEscapePress = useCallback((event: DocumentKeyboardEvent) => {
    if (onOverlayClick && event.keyCode === KEY_CODES.ESCAPE) {
      onOverlayClick();
    }
  }, [onOverlayClick]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscapePress);

    return () => {
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, []);// eslint-disable-line

  const handleOverlayClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current) {
      onOverlayClick();
    }
  }, [onOverlayClick]);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      ref={overlayRef}
      className={cn(CLASS_NAME, {
        [`${CLASS_NAME}--in-container`]: inContainer,
        [`${CLASS_NAME}--light-color`]: isLightColor,
        [`${CLASS_NAME}--transparent`]: isTransparent,
      })}
      onClick={handleOverlayClick}
    >
      {children}
    </div>
  );
});
