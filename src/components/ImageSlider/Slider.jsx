import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
// prettier-ignore
const data = [
  {
    id: 1,
    image: `https://wallpapercave.com/wp/wp9903332.jpg`,
    title: `Welcome To Kirinyaga University Christian Union`,
    text: `Serving God with fervent Worship`
  },
  {
    id: 2,
    image: `https://wallpapercave.com/wp/wp9901724.jpg`,
    title: `Welcome To Kirinyaga University Christian Union`,
    text: `Serving God with fervent Worship`
  },
  {
    id: 3,
    image: `https://wallpapercave.com/wp/wp9901837.jpg`,
    title: `Welcome To Kirinyaga University Christian Union`,
    text: `Serving God with fervent Worship`
  }
];
// prettier-ignore
function Slider() {
  return  (
    <div>
      <Carousel>
          {data.map((item) => (
                <div key={item.id}>
                    <img src={item.image} alt='img' />
                    <p  className="legend">
                    <h3 > {item.title} </h3>
                    <p> {item.text} </p>
                    </p>
                </div>
          ))}
            </Carousel>
    </div>
  );
}
// prettier-ignore
export default Slider;
