import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[]
{
  const { isDev } = options;

  const svgLoader =
  {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

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

  const cssLoader =
  {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader, //на production извлекаем css файлы из js 
      {
        loader: 'css-loader',
        options:
        {
          modules:
          {
            //Включает модули CSS для файлов, имя, запрос или фрагмент которых соответствуют функции фильтрации.
            auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
            //отключает именованный экспорт
            namedExport: false,
            //для css-модулей генерируем классы по шаблону в зависимости от isDev
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64: 8]',
          }
        }
      },
      'sass-loader',
    ],
  };

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