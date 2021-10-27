import React from 'react';
import Typography from '@mui/material/Typography';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './slider.css';
import { Carousel } from 'react-responsive-carousel';
import upcomingeventImage from '../../assets/images/upcomingevent_image.jpg';

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
        image:'`https://wallpapercave.com/wp/wp9901724.jpg',
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
            <Carousel showThumbs={false} >
            { data.map(slide => (
                <div key={ slide.id }>
                    <img src={ upcomingeventImage } alt='slide' className="slide-image" />
                    <Typography 
                     variant='h1' 
                     component='p'
                     className='slider-title'
                    > { slide.title } <br /> <Typography variant="h2" component="p"> { slide.text} </Typography>
                    </Typography>
                </div>
            ))}
            </Carousel>
    );
}
