export type Mods = Record<string, string | boolean | undefined>;

export function classNames(className: string, mods: Mods = {}, additional: (string | undefined)[] = []): string
{
  return [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_key, value]) => Boolean(value))
      .map(([key]) => key)
  ].join(' ');
}