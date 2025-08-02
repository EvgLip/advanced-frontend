import { ResolveOptions } from 'webpack';
<<<<<<< HEAD

export function buildResolvers(): ResolveOptions
{
  const extensions =
    [
      '.tsx',
      '.ts',
      '.js',
    ];

  return { extensions };
=======
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions
{
  return {
    extensions: ['.tsx', '.ts', '.js',],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'], //файлы эспорта из модулей
    alias: {},
  };
>>>>>>> createBrowserRouter

}