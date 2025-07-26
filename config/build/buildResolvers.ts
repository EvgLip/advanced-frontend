import { ResolveOptions } from 'webpack';

export function buildResolvers(): ResolveOptions
{
  const extensions =
    [
      '.tsx',
      '.ts',
      '.js',
    ];

  return { extensions };

}