declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg"
{
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

// declare module "*.svg" {
//   import React from "react";
//   const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
//   export default SVG;
// }

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

//--------------------------------------------
//для плагина typescript-plugin-css-modules
//--------------------------------------------
declare module '*.module.css' {
  const classes: { [key: string]: string; };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string; };
  export default classes;
}
// declare module '*.module.scss'
// {
//   interface IClassNames
//   {
//     [className: string]: string;
//   }
//   const className: IClassNames;
//   export = className;
// }

declare module '*.module.sass' {
  const classes: { [key: string]: string; };
  export default classes;
}

declare module '*.sass' {
  const classes: { [key: string]: string; };
  export default classes;
}

declare module '*.module.less' {
  const classes: { [key: string]: string; };
  export default classes;
}

declare module '*.module.styl' {
  const classes: { [key: string]: string; };
  export default classes;
}

//частичный тип
type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;