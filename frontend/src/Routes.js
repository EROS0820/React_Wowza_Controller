import { DefaultLayout, LandingPageLayout } from "./layouts";

import Dashboard from "./views/Dashboard";
import LandingPage from "./views/LandingPage";


export default [
  {
    path: "/",
    exact: true,
    layout: LandingPageLayout,
    component: LandingPage
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    component: Dashboard
  },
];
