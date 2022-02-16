import PropTypes from "prop-types";
import Grid from "./Grid";
import CourseCard from "./CourseCard";
import Container from "./Container";

const CourseList = ({ courses = [], mobile = false }) => {
  const desktopView = () => (
    <Container mt="3rem">
      <Grid container spacing={4} mb={10}>
        {courses.map((course) => (
          <Grid item key={course.id}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );

  const mobileView = () => (
    <>
      {courses.map((course) => (
        <CourseCard mobile={true} key={course.id} course={course} />
      ))}
    </>
  );

  return mobile ? mobileView() : desktopView();
};

CourseList.propTypes = {
  courses: PropTypes.array,
  isMobile: PropTypes.bool,
};

export default CourseList;
