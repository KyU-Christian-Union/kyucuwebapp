import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@mui/styles';

// prettier-ignore
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
    return (
        <Container disableGutters maxWidth='xl' >
            <Carousel showThumbs={false} >
            { data.map(slide => (
                <div key={ slide.id }>
                    <img src={ slide.image } alt='slide' className={classes.sliderImage} />
                    <Typography 
                     variant='h1' 
                     component='p'
                     className= {classes.sliderTitle}
                     noWrap
                    > { slide.title } <br /> <Typography className={classes.sliderTitle} variant="h2" noWrap  component="p"> { slide.text} </Typography>
                    </Typography>
                </div>
            ))}
            </Carousel>
        </Container>
    );
}
