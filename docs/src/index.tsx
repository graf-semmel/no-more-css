/* @refresh reload */
import { render } from "solid-js/web";
import { HashRouter } from "@solidjs/router";
import { lazy } from "solid-js";
import Layout from "./Layout";
import "@acss/all.css";
import "./index.css";

const routes = [
  {
    component: (props: any) => <Layout>{props.children}</Layout>,
    children: [
      {
        path: "/",
        component: lazy(() => import("./App.tsx")),
      },
      {
        path: "/layout",
        component: lazy(() => import("./pages/layout/Layout.tsx")),
      },
      {
        path: "/interactive",
        component: lazy(() => import("./pages/interactive/Interactive.tsx")),
      },
      {
        path: "/typo",
        component: lazy(() => import("./pages/typo/Typo.tsx")),
      },
      {
        path: "/form",
        component: lazy(() => import("./pages/form/Form.tsx")),
      },
    ],
  },
];

render(
  () => <HashRouter>{routes}</HashRouter>,
  document.getElementById("root")!
);
