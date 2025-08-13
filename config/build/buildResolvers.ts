import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions
{
  return {
    extensions: ['.tsx', '.ts', '.js',],
    preferAbsolute: true, //?? если алиас {}
    modules: [options.paths.src, 'node_modules'], //?? если алиас {}
    mainFiles: ['index'], //файлы эспорта из модулей
    alias: {}, //можно указать '@': paths.src
  };

}