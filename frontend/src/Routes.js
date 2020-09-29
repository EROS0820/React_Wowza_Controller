import { DefaultLayout, LandingPageLayout } from "./layouts";

import MentorSession from "./views/MentorSession";
import LandingPage from "./views/LandingPage";


export default [
  {
    path: "/",
    exact: true,
    layout: LandingPageLayout,
    component: LandingPage
  },
  {
    path: "/mentorSession",
    layout: DefaultLayout,
    component: MentorSession
  },
];
