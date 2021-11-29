import { lazy } from "react";
import Welcome from "./components/Welcome";

// lazy components
const LazyGeneralChat = lazy(() =>
  import(/* webpackChunkName: "LazyGeneralChat" */ "./components/GeneralChat")
);

const LazyMusicRequests = lazy(() =>
  import(
    /* webpackChunkName: "LazyMusicRequests" */ "./components/MusicRequests"
  )
);

const LazyMemes = lazy(() =>
  import(/* webpackChunkName: "LazyMemes" */ "./components/Memes")
);

const LazyElon = lazy(() =>
  import(/* webpackChunkName: "LazyElon" */ "./components/Elon")
);

export const routes = [
  {
    path: "/welcome",
    Component: Welcome,
  },
  {
    path: "/general-chat",
    Component: LazyGeneralChat,
  },
  {
    path: "/music-requests",
    Component: LazyMusicRequests,
  },
  {
    path: "/memes",
    Component: LazyMemes,
  },
  {
    path: "/elon",
    Component: LazyElon,
  },
];
