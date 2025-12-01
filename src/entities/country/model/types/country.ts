export const Countries = {
  Russia: 'Russia',
  Belarus: 'Belarus',
  Ukraine: 'Ukraine',
  Kazakhstan: 'Kazahstan',
  Armenia: 'Armenia',
} as const;

export type CountryType = (typeof Countries)[keyof typeof Countries];