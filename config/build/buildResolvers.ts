import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

export function buildResolvers(options: BuildOptions): ResolveOptions
{
  return {
    extensions: ['.tsx', '.ts', '.js', '.jsx',],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules',],
    mainFiles: ['index'], //файлы эспорта из модулей
    alias: {
      '@/$*': `${options.paths.src}/*`,
    },
    plugins: [new TsconfigPathsPlugin()]
  };

}


// return {
//   extensions: ['.tsx', '.ts', '.js',],
//   preferAbsolute: true, //?? если алиас {}
//   modules: [options.paths.src, 'node_modules'], //?? если алиас {}
//   mainFiles: ['index'], //файлы эспорта из модулей
//   alias: {}, //можно указать '@': paths.src
// };