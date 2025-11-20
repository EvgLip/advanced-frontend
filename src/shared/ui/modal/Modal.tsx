import { MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Portal } from '@/shared/ui';
import classes from './Modal.module.scss';

interface ModalProps
{
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 290;
const modalParent = document.getElementById('modal');

export default function Modal(props: ModalProps)
{
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const mods: Mods =
  {
    [classes.opened]: isOpen,
    [classes.closing]: isClosing,
  };

  const closeHandler = useCallback(() =>
  {
    if (onClose) 
    {
      setIsClosing(true);
      timerRef.current = setTimeout(() =>
      {
        onClose();
        setIsClosing(false);
      },
        ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) =>
  { if (e.key === 'Escape') closeHandler(); },
    [closeHandler]);

  const contentClickHandler = (e: React.MouseEvent) => { e.stopPropagation(); };

  useEffect(
    function ()
    {
      if (isOpen) window.addEventListener('keydown', onKeyDown);
      return () => 
      {
        clearTimeout(timerRef.current);
        window.removeEventListener('keydown', onKeyDown);
      };
    }, [isOpen, onKeyDown]);

  useEffect(
    function ()
    {
      if (isOpen) setIsMounted(true);
    }, [isOpen]);

  if (lazy && !isMounted) return null;
  if (!modalParent) throw new Error('В докуметне отсутствует родительский элемент для модального окна. Как правило это div с классом "modal"');

  return (
    <Portal parent={modalParent}>
      <div className={classNames(classes.modal, mods, [className])} >
        <div className={classes.overlay} onClick={closeHandler}>
          <div className={classes.content} onClick={contentClickHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
}