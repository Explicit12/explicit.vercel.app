declare module "*.svg" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}

declare module "*.glb" {
  const src: string;
  export default src;
}
