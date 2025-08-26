declare module '*.module.scss'
{
  interface IClassNames
  {
    [className: string]: string;
  }

  const className: IClassNames;
  export = className;
}

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