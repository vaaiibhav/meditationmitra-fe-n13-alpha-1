import Courses from "./pages/Courses";
import EnrolledCourses from "./pages/EnrolledCourses";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import PostLogin from "./pages/PostLogin";

const routes = [
  {
    path: "/enrolled-courses",
    element: <EnrolledCourses />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/user/profile",
    element: <Profile />,
  },
  
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/post-login",
    element: <PostLogin />,
  },
  

  // {
  //     path: '*',
  //     element: <NotFound/>
  // }
];

export default routes;
