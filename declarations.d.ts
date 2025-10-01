import { ShopwareClass } from "@ShopwareSrc/core/shopware"

declare const Shopware: ShopwareClass;

declare module '*.twig' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const content: string;
  export default content;
}