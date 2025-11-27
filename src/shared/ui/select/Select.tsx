import { ChangeEvent, memo, useMemo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import classes from './Select.module.scss';

interface SelectOption
{
  value: string;
  content: string;
}

interface SelectProps
{
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

const Select = memo(function Select(props: SelectProps)
{
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly,
  } = props;

  const mods: Mods = {};

  function onChangeHandler(e: ChangeEvent<HTMLSelectElement>)
  {
    if (onChange)
      onChange(e.target.value);
  };

  const optionList = useMemo(() =>
  {
    return (
      options?.map(opt =>
      (
        <option
          key={opt.content}
          className={classes.option}
          value={opt.value}
        >
          {opt.content}
        </option>
      ))
    );
  }, [options]);

  return (
    <div className={classNames(classes.wrapper, mods, [className])}>
      {
        label &&
        <span>{`${label}> `}</span>
      }
      <select
        className={classes.select}
        disabled={readonly}
        value={value}
        onChange={onChangeHandler}
      >
        {optionList}
      </select>
    </div>
  );
}
);

export default Select;