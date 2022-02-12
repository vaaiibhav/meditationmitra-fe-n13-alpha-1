import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import PropTypes from "prop-types";
import SideBarFilter from "./SideBarFilter";
import Container from "../Container";
import Drawer from "./Drawer";
import Stack from "../Stack";
import Box from "../Box";

const SearchFilter = ({ filters = [] }) => (
  <Stack direction="row">
    <Box display={["block", "block", "none"]} mt="4rem">
      <Drawer>
        <SideBarFilter />
      </Drawer>
    </Box>
    <Container mt="3rem">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={filters}
        sx={{ width: "60%", margin: "auto" }}
        renderInput={(params) => {
          return <TextField {...params} label="Search for Courses" />;
        }}
      />
    </Container>
  </Stack>
);

SearchFilter.propTypes = {
  filters: PropTypes.array,
};

export default SearchFilter;
