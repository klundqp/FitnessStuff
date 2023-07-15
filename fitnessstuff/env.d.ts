/// <reference types="vite/client" />


import {Router} from 'vue-router';

declare module "pinia" {
  export interface PiniaCustomProperties {
    router: Router;
  }
}
