import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './slider.css';
import { Carousel } from 'react-responsive-carousel';

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
export default function Slider() {
    return (
        <Container disableGutters maxWidth='xl' >
            <Carousel showThumbs={false} >
            { data.map(slide => (
                <div key={ slide.id }>
                    <img src={ slide.image } alt='slide' className="slide-image" />
                    <Typography 
                     variant='h1' 
                     component='p'
                     className='slider-title'
                     noWrap
                    > { slide.title } <br /> <Typography variant="h2" noWrap  component="p"> { slide.text} </Typography>
                    </Typography>
                </div>
            ))}
            </Carousel>
        </Container>
    );
}
