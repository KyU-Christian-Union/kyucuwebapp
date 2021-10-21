import React from 'react';
import Container from '@mui/material/Container';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

data = [
    {
        image: 'https://wallpapercave.com/wp/wp9903332.jpg',
        title: 'Welcome To Kirinyaga University Christian Union',
        text: 'Serving God with fervent Worship'
      },
      {
        image:'`https://wallpapercave.com/wp/wp9901724.jpg',
        title: 'Welcome To Kirinyaga University Christian Union',
        text: 'Serving God with fervent Worship'
      },
      {
        image: 'https://wallpapercave.com/wp/wp9901837.jpg',
        title: 'Welcome To Kirinyaga University Christian Union',
        text: 'Serving God with fervent Worship'
      }
]

export default function Slider() {

        return (
            <Container>
                <Carousel>
                { data.map((siide, index) => (
                    <div key={index}>
                        <img src={slide.img} />
                        <p className="legend">Legend 1</p>
                    </div>
                ))}
                </Carousel>
            </Container>
        );
}