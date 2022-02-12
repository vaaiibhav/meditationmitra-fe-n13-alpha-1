import {
  FormControl,
  FormGroup,
  FormLabel,
  TextField as MaterialTextField,
} from "@mui/material";
import PropTypes from "prop-types";

const TextField = ({ title, placeholder, value }) => (
  <FormControl fullWidth sx={{ margin: "2% 0" }}>
    <FormLabel>{title}</FormLabel>
    <FormGroup>
      <MaterialTextField
        sx={{ background: "var(--white)" }}
        variant="outlined"
        placeholder={placeholder}
        value={value}
      />
    </FormGroup>
  </FormControl>
);

TextField.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default TextField;
