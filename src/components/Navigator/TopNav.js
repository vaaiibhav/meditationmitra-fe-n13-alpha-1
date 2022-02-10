import PropTypes from "prop-types";
import Stack from "../Stack";
import { MenuLink } from "../Link";
const TopNav = ({ items = [], onNavigate }) => {
  return (
    <Stack direction="row" spacing={3}>
      {items.map((item) => (
        <MenuLink
          component="button"
          key={item.label}
          to={item.path}
          selected={window.location.pathname === item.path}
          onClick={() => onNavigate(item.path)}
        >
          {item.label}
        </MenuLink>
      ))}
    </Stack>
  );
};

TopNav.propTypes = {
  items: PropTypes.any,
  onNavigate: PropTypes.func,
};

export default TopNav;
