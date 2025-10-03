import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Portal } from '@/shared/ui';
import classes from './Modal.module.scss';

interface ModalProps
{
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 250;

export default function Modal(props: ModalProps)
{
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const mods: Record<string, boolean> =
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

  return (
    <Portal parent={document.getElementById('modal')}>
      < div className={classNames(classes.modal, mods, [className])} >
        <div className={classes.overlay} onClick={closeHandler}>
          <div className={classes.content} onClick={contentClickHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
}