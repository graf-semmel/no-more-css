/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { lazy } from "solid-js";
import Layout from "./layout.tsx";

const routes = [
  {
    path: "/a-css/",
    component: (props: any) => <Layout>{props.children}</Layout>,
    children: [
      {
        path: "/",
        component: lazy(() => import("./App.tsx")),
      },
      {
        path: "/typo",
        component: lazy(() => import("./Typo.tsx")),
      },
    ],
  },
];

render(() => <Router>{routes}</Router>, document.getElementById("root")!);
