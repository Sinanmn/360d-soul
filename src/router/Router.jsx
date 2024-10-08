import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/Error/ErrorPage";
import Root from "../components/Home/Root";
import ExploreUs from "../components/Others/ExploreUs/ExploreUs";
import ITStrategy from "../components/Others/Solutions/IT/ITStrategy";
import HRStrategy from "../components/Others/Solutions/HR/HRStrategy";
import ContactUs from "../components/Others/ContactUs/ContactUs";
import Career from "../components/Others/Career/Career";
import Blogs from "../components/Others/Blogs/Blogs";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/explore",
        element: <ExploreUs />,
      },
      {
        path: "/IT-Strategy",
        element: <ITStrategy></ITStrategy>,
      },
      {
        path: "/HR-Strategy",
        element: <HRStrategy />,
      },
      {
        path: "/contact",
        element: <ContactUs/>
      },
      {
        path: "/career",
        element: <Career/>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
   
    ],
  },
]);

export default router;
