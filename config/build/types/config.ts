
export type BuildMode = 'production' | 'development';

export interface BuildPaths
{
  entry: string;
  build: string;
  html: string;
<<<<<<< HEAD
=======
  src: string;
>>>>>>> createBrowserRouter
}

export interface BuildOptions
{
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}

export interface BuildEnv
{
  mode: BuildMode;
  port: number;
}