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

                // nav button both left and right :)
                navButtonsProps={{ 
                    style: {
                        backgroundColor: '#ffffff',
                        color: 'rgba(51, 199, 34, 1)',
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
