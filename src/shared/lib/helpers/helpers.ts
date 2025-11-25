// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isNumber(value: any): boolean
{
  const regex = /^[0-9]+$/;
  if (value.match(regex))
    return true;
  else
    return false;
};