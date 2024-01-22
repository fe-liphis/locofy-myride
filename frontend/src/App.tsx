import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayoutPage from "./pages/LayoutPages/LayoutPage";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
