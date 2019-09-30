import { Config } from '@stencil/core';

export const config: Config = {
  outputTargets: [
    {
      type: 'www',
      baseUrl: '/',
      // comment the following line to disable service workers in production
      serviceWorker: null
    }
  ],
  devServer: {
    reloadStrategy: 'hmr',
    openBrowser: false,
    port: 4500
  }
};
