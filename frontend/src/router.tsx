import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout/RootLayout";
import Home from "./pages/Home/Home";
import GettingTaxi from "./pages/GettingTaxi/GettingTaxi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "getting-taxi",
        element: <GettingTaxi />,
      },
    ],
  },
]);

export default router;
