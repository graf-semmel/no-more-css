/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { lazy } from "solid-js";
import Layout from "./layout.tsx";

const routes = [
  {
    path: "/a-css",
    component: (props: any) => <Layout>{props.children}</Layout>,
    children: [
      {
        path: "/",
        component: lazy(() => import("./App.tsx")),
      },
      {
        path: "/interactive",
        component: lazy(() => import("./pages/Interactive.tsx")),
      },
      {
        path: "/typo",
        component: lazy(() => import("./pages/Typo.tsx")),
      },
    ],
  },
];

render(() => <Router>{routes}</Router>, document.getElementById("root")!);
