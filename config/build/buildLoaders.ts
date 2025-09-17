import webpack from 'webpack';
import { BuildOptions } from './types/config';
import buildCssLoader from './loaders/buildCssLoader';
import buildSvgLoader from './loaders/buildSvgLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[]
{
  const { isDev } = options;

  const svgLoader = buildSvgLoader();

  const fileLoader =
  {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelLoader =
  {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        "plugins":
          [
            [
              "i18next-extract",
              {
                locales: ['ru', 'en'],
                keyAsDefaultValue: true
              }
            ],
          ]
      }
    }
  };

  const cssLoader = buildCssLoader(isDev);

  const tsLoader =
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };



  return [
    babelLoader,
    tsLoader,
    cssLoader,
    svgLoader,
    fileLoader,
  ];
}