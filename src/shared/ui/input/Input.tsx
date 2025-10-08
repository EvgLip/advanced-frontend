import { classNames } from '@/shared/lib/classNames/classNames';
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputProps
{
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  autofocus?: boolean;
}


export const Input = memo(function Input(props: InputProps)
{
  const
    {
      className,
      value,
      onChange,
      type = 'text',
      placeholder,
      autofocus,
      ...otherProps
    } = props;

  const [isFocus, setIsFocus] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(function ()
  {
    if (autofocus) 
    {
      setIsFocus(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onFocusHandler = () => setIsFocus(true);
  const onBlurHandler = () => setIsFocus(false);
  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) 
  {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelectHandler = (e: any) => setCaretPosition(e.target?.selectionStart || 0);

  return (
    <div className={classNames(classes.inputwrapper, {}, [className])}>
      {placeholder && (
        <div className={classes.placeholder}>
          {`${placeholder} >`}
        </div>
      )}

      <div className={classes.caretwrapper}>
        <input
          ref={ref}
          className={classes.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onSelect={onSelectHandler}
          {...otherProps}
        />
        {isFocus &&
          <span
            className={classes.caret}
            style={{ left: `${caretPosition * 8.8}px` }}
          />
        }
      </div>
    </div>
  );
});