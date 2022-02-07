import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const CourseCard = function(props) {
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
                    <span> {trainer} </span>
                    <span> <StarBorderIcon/> {rating} <span>All levels</span> </span> 
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