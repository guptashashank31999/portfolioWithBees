import AllProjects from "./Components/AllProjects/AllProjects";
import FullProjectDiscription from "./Components/FullProjectDiscription/FullProjectDiscription";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import ParentComponents from "./Components/ParentComponents";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ParentComponents />
      </>
    ),
  },
  {
    path: "/projectDiscription",
    element: (
      <>
        <FullProjectDiscription />
      </>
    ),
  },
  {
    path: "/*",
    element: (
      <>
        <PageNotFound />
      </>
    ),
  },
  {
    path: "allProjects",
    element: <><AllProjects/></>,
  },
]);


function App() {
  return  <RouterProvider router={router} />;
}

export default App;
