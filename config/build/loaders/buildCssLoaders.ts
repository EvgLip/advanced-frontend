import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default function buildCssLoaders(isDev: boolean)
{
  return (
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
              //для css-модулей генерируем классы по шаблону в зависимости от isDev
              auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
              localIdentName: isDev
                ? '[path][name]__[local]--[hash:base64:5]'
                : '[hash:base64: 8]',
            }
          }
        },
        'sass-loader',
      ],
    }
  );
}