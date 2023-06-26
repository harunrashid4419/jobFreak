import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/HomePage/Home/Home";
import OutletMain from "./OutletMain/OutletMain";
import Contact from "./Components/ContactPage/Contact/Contact";
import Information from "./Components/Information/Information";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <OutletMain />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/info",
          element: <Information />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
