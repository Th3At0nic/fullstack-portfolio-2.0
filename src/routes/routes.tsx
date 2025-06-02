import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenerator } from "../utils/routesGenerator";
import { homePaths } from "./homeRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routesGenerator(homePaths),
  },
]);
