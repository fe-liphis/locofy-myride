import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout/RootLayout";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
