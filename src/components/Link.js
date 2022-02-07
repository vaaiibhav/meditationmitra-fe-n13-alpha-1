import styled from "@emotion/styled";
import { Link as MaterialLink } from "@mui/material";

const Link = styled(MaterialLink);

export const LogoLink = styled(Link)`
    color: var(--orange);
    font-family: DM Serif Display;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
`;

export const MenuLink = styled(Link)`
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--black);
`;

export default Link;