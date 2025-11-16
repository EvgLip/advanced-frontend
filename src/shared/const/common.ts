
export const Currrency =
  {
    RUB: 'RUB',
    EUR: 'EUR',
    USD: 'USD',
  } as const;

export type CurrrencyType = typeof Currrency[keyof typeof Currrency];

export const Country =
  {
    Russia: 'Russia',
    Belarus: 'Belarus',
    Ukraine: 'Ukraine',
    Kazakhstan: 'Kazahstan',
    Armenia: 'Armenia',
  } as const;

export type CountryType = typeof Country[keyof typeof Country];

export const TypeOfAlign =
  {
    CENTER: 'center',
    JUSTIFY: 'justify',
    LEFT: 'left',
    RIGHT: 'right',
  } as const;

export type Align = typeof TypeOfAlign[keyof typeof TypeOfAlign];