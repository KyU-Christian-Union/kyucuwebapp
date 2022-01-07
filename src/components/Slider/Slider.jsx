import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Carousel from 'react-material-ui-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';

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
        width: '100%',
        maxHeight: 480,
        height: 'auto'
    },
    navBtn: {
        '&hover': {
            background: theme.palette.primary.main
        }
    }
}));

// prettier-ignore
export default function Slider() {

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
            <Carousel
                navButtonsAlwaysVisible='true'
                cycleNavigation='true'
                animation='slide'
                duration={1000}
                NextIcon={<NextArrow />}
                PrevIcon={<PrevArrow />}
                // nav button both left and right :)
                navButtonsProps={{ 
                    style: {
                        backgroundColor: '#ffffff',
                        borderRadius: 100
                    }
                }}
                
                indicatorContainerProps={{
                    style: {
                        width: "100%",
                        marginTop: "10px",
                        textAlign: "center",

                    }
            
                }}
            >
                {data.map((item) => (<Slide slide={item} key={item.id} />))}
            </Carousel>
        </Container>
    );
}

// prettier-ignore
const NextArrow = () => {
    const classes = useStyles();
    return (
            <ArrowForwardIosIcon  color="secondary" className={classes.navBtn}/>
    )
}

// prettier-ignore
const PrevArrow = () => {
    const classes = useStyles();
    return (
            <ArrowBackIosIcon color="secondary" className={classes.navBtn} />
    )
}

// prettier-ignore
function Slide({slide}) {
    const classes = useStyles();

    return (
        <Paper>
            <img src={slide.image} alt={slide.id} className={classes.sliderImage} />
            <Typography className={classes.sliderTitle} variant='h5'>
                {slide.title}
                <Typography variant="h6"  component='p' className={classes.sliderTitle}>
                    {slide.text}
                </Typography>
            </Typography>
        </Paper>
    )
}
