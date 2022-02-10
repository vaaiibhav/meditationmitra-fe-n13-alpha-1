import styled from "@emotion/styled";
import { Container as MaterailContainer } from "@mui/material";

const Container = styled(MaterailContainer)`
  ${({ mobBody }) =>
    mobBody &&
    `
        height: 90%;
        overflow: auto;
        padding-bottom: 10%
    `};
`;

export default Container;
