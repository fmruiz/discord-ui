import Elon from "./components/Elon";
import GeneralChat from "./components/GeneralChat";
import Memes from "./components/Memes";
import MusicRequests from "./components/MusicRequests";
import Welcome from "./components/Welcome";

export const routes = [
  {
    path: "/welcome",
    Component: Welcome,
  },
  {
    path: "/general-chat",
    Component: GeneralChat,
  },
  {
    path: "/music-requests",
    Component: MusicRequests,
  },
  {
    path: "/memes",
    Component: Memes,
  },
  {
    path: "/elon",
    Component: Elon,
  },
];
