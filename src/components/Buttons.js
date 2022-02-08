import styled from "@emotion/styled";
import  {Button as MaterialButton} from "@mui/material";

export const Button = styled(MaterialButton)`
    box-shadow: none;
    color: var(--white);
`

export const PrimaryButton = styled(Button)`
    background: var(--orange);
    border: none;
    &:hover{
        background: var(--orange);
        border: none;
    }
`

export const PrimaryTransparentButton = styled(Button)`
    border-color: var(--white);
`

export const SecondaryButton = styled(Button)(() => ({
        fontSize: 'var(--fs-h4)',
        position: 'absolute',
        top: '21%',
        right: 0,
        padding: 0,
        fontWeight: 'var(--semibold-weight)',
        color: 'var(--orange)',
        letterSpacing: '2px'
    })
);
