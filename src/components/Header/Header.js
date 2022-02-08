import { PROJECT_TITLE } from "../../utils/Constants";
import Box from "../Box";
import Container from "../Container";
import Grid from "../Grid";
import { LogoLink, MenuLink } from "../Link";
import Stack from "../Stack";
import { PrimaryButton } from "../Buttons";

const menuItems = [
    {
        label: 'Home',
        path: '/'
    },
    {
        label: 'Courses',
        path: '/courses'
    },
    {
        label: 'About Us',
        path: '/about'
    },
    {
        label: 'Contact Us',
        path: '/contact'
    }
];
const Header = () => {
    return (
        <Box bg="var(--white)">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Stack direction='row' spacing={4}>
                            <LogoLink to="/">{PROJECT_TITLE}</LogoLink>
                            <Stack direction='row' spacing={3}>
                                {menuItems.map((item) => <MenuLink key={item.label} to={item.path}>{item.label}</MenuLink>)}
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack direction="row" spacing={2} justifyContent="right">
                            <PrimaryButton variant="contained" size='small'>Guest Login</PrimaryButton>
                            <PrimaryButton variant="contained" size='small'>Google Login</PrimaryButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Header;