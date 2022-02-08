import styled from "@emotion/styled";
import { Link as MaterialLink } from "@mui/material";

const Link = styled(MaterialLink)``;

export const LogoLink = styled(Link)`
    text-decoration: none;
    color: var(--orange);
    font-family: DM Serif Display;
    font-size: var(--fs-h4);
    font-style: normal;
    font-weight: var(--semibold-weight);
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
`;

export const MenuLink = styled(Link)`
    text-decoration: none;
    font-size: var(--fs-base);
    font-style: normal;
    font-weight: var(--normal-weight);
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--black);
`;

export default Link;