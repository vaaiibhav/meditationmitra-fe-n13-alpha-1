import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from './Box';

const CourseCard = (props) => {
    const {name, image, trainer, rating, price} = props.course;
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="300"
                image={image}
                alt={name}
            />
            <CardContent>
                <Stack direction='row' spacing={10} mb={2}>
                    <Box component='span'> {trainer} </Box>
                    <Box component='span'> <StarBorderIcon/> {rating} </Box> <Box component='span'>All levels</Box>  
                </Stack>
                <Typography variant='body1' mb={2}>
                    {name}
                </Typography>
                <Typography variant='body2'>
                    Rs. {price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CourseCard;