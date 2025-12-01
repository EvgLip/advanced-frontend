export const TypeOfAlign =
  {
    CENTER: 'center',
    JUSTIFY: 'justify',
    LEFT: 'left',
    RIGHT: 'right',
  } as const;

export type Align = typeof TypeOfAlign[keyof typeof TypeOfAlign];
