type Mods = Record<string, string | boolean>;

export function classNames(className: string, mods: Mods = {}, additional: string[] = []): string
{
  return [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_key, value]) => Boolean(value))
      .map(([key]) => key)
  ].join(' ');
}