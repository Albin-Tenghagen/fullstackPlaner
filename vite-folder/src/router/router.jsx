import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Details from "../pages/Details";
import Weather from "../pages/weather";

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
        path: "details",
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
