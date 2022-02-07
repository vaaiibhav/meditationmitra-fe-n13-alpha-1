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
        fontSize: '1.25rem',
        position: 'absolute',
        top: '21%',
        right: 0,
        padding: 0,
        fontWeight: 600,
        color: 'var(--orange)',
        letterSpacing: '2px'
    })
);
