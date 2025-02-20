import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Weather from "../pages/weather";

// import NotFound from "../components/errorsFolder/NotFound";
const Details = lazy(() => import("../pages/Details"));
const TravelList = lazy(() =>
  import("../components/TravelListFolder/TravelList")
);

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
        element: (
          <Suspense fallback={<div>Laddar...</div>}>
            <Details />
          </Suspense>
        ),
      },

      {
        path: "weather",
        element: <Weather />,
      },
      // {
      //   path: "*", // Fångar alla ogiltiga URL:er
      //   element: <NotFound />, // Använd NotFound utan lazy
      // },
    ],
  },
]);

export default router;
