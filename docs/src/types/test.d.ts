// import * as React from "react";

declare global {
  declare module "solid-js" {
    namespace JSX {
      interface IntrinsicElements {
        container: HTMLAttributes<HTMLDivElement>;
        card: HTMLAttributes<HTMLDivElement>;
      }
    }
  }
}
