import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Carousel from 'react-material-ui-carousel';

// prettier-ignore
const useStyles = makeStyles( (theme) => ({
    sliderTitle: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        marginLeft: '-45%',
        width: '90%',
        borderRadius: '10px',
        color: '#ffffffff',
        background: 'transparent',
        padding: theme.spacing(3),
        textAlign: 'center',
        opacity: .8,
        [theme.breakpoints.only("xs") ]: {
            fontSize: theme.spacing(1.45)
        }, 
        [theme.breakpoints.only("sm")]: {
            fontSize: theme.spacing(2.5)
        },
        [theme.breakpoints.only("md")]: {
            fontSize: theme.spacing(4)
        }
    },
    sliderImage: {
        maxWidth: '100%',
        maxHeight: 480,
        height: 'auto'
    }
}));

// prettier-ignore
export default function Slider() {
    const classes = useStyles();

    const data = [
        {
            id: 1,
            image: 'https://wallpapercave.com/wp/wp9903332.jpg',
            title: 'Welcome To Kirinyaga University Christian Union',
            text: 'Serving God with fervent Worship'
          },
          {
              id: 2,
            image:'https://wallpapercave.com/wp/wp9901837.jpg',
            title: 'Welcome To Kirinyaga University Christian Union',
            text: 'Serving God with fervent Worship'
          },
          {
              id: 3,
            image: 'https://wallpapercave.com/wp/wp9901837.jpg',
            title: 'Welcome To Kirinyaga University Christian Union',
            text: 'Serving God with fervent Worship'
        }
    ];
// prettier-ignore
    return (
        <Container disableGutters maxWidth='xl' >
            <Carousel>
                {data.map((item) => (<Slide slide={item} key={item.id} />))}
            </Carousel>
        </Container>
    );
}

// prettier-ignore
function Slide({slide}) {
    const classes = useStyles();

    return (
        <Paper>
            <img src={slide.image} alt={slide.iid} />
            <Typography className={classes.sliderTitle} variant='h5' component='h5'>
                {slide.title}
                <Typography variant="h6"  className={classes.sliderTitle}>
                    {slide.text}
                </Typography>
            </Typography>
        </Paper>
    )
}
