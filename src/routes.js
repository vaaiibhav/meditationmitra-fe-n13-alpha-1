import Courses from "./pages/Courses";
import EnrolledCourses from "./pages/EnrolledCourses";
import Profile from "./pages/Profile";

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
  // {
  //     path: '*',
  //     element: <NotFound/>
  // }
];

export default routes;
