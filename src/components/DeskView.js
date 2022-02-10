import Box from "./Box";
import Container from "./Container";
import PropTypes from "prop-types";

const DeskView = ({ children }) => {
  return (
    <Box display={["none", "block"]}>
      <Container>{children}</Container>
    </Box>
  );
};

DeskView.propTypes = {
  children: PropTypes.any,
};

export default DeskView;
