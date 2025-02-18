import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Details from "../pages/Details";
import Weather from "../pages/weather";
//TODO Make a fallback for when there is no travel id to render from. The url is based on travel id in router. So if there is no id the page will return 404 not found.

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "details/:id",
        element: <Details />, // Path för Details-sidan
      },
      {
        path: "weather",
        element: <Weather />,
      },
    ],
  },
]);

export default router;
