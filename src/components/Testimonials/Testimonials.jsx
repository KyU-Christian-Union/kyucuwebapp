import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation'; // Navigation module
import 'swiper/modules/pagination/pagination';
import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Testimonial from './Testimonial';
import image1 from '../../assets/images/user-1.jpg';
import image2 from '../../assets/images/user2.jpg';
import image3 from '../../assets/images/user3.jpg';
import image4 from '../../assets/images/user4.jpg';

const useStyles = makeStyles(() => ({
  Swiper: {
    '& .swiper-button-next': {
      color: '#008000',
      position: 'absolute',
      top: '90%',
      fontSize: '0.2px',
      height: 1,
      width: 1
    },
    '& .swiper-button-prev': {
      color: '#008000',
      position: 'absolute',
      top: '90%',
      fontSize: '0.2px',
      height: 1,
      width: 1
    },
    '& .swiper-pagination-bullets': {
      '& .swiper-pagination-bullet-active': {
        backgroundColor: '#008000'
      }
    }
  }
}));

const SlideTestimonials = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" align="center" sx={{ lineHeight: '60px' }}>
        Testimonials
      </Typography>
      <Typography variant="h5" align="center" gutterBottom sx={{ lineHeight: '30px' }}>
        Get to know what the Lord has done and is doing in people&apos;s lives
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Swiper
          navigation
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 70
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }}
          modules={[Pagination, Navigation]}
          style={{
            paddingBottom: 20,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          className={classes.Swiper}
        >
          <SwiperSlide>
            <Testimonial
              commentTitle="amazing leadership"
              comment="sometimes in our lives, we all have pain and sorrow, but if we are wise, we know that there is always tomorrow and that is why I decided to become part of the christian union Kirinyaga university"
              commentorProfilePicture={image1}
              commentorName="Kevin Maunga"
              commentorPosition="fourth year student"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              commentTitle="supportive community"
              comment="sometimes in our lives, we all have pain and sorrow, but if we are wise, we know that there is always tomorrow and that is why I decided to become part of the christian union Kirinyaga university"
              commentorProfilePicture={image2}
              commentorName="Jack sylvester"
              commentorPosition="medicine graduate, JKUAT"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              commentTitle="organized order of service"
              comment="sometimes in our lives, we all have pain and sorrow, but if we are wise, we know that there is always tomorrow and that is why I decided to become part of the christian union Kirinyaga university"
              commentorProfilePicture={image4}
              commentorName="Ann Wangari"
              commentorPosition="fourth year student"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              commentTitle="nice ushers"
              comment="sometimes in our lives, we all have pain and sorrow, but if we are wise, we know that there is always tomorrow and that is why I decided to become part of the christian union Kirinyaga university"
              commentorProfilePicture={image3}
              commentorName="claire anita"
              commentorPosition="lecture, University of Nairobi"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              commentTitle="amazing leadership"
              comment="sometimes in our lives, we all have pain and sorrow, but if we are wise, we know that there is always tomorrow and that is why I decided to become part of the christian union Kirinyaga university"
              commentorProfilePicture={image1}
              commentorName="Kevin Maunga"
              commentorPosition="fourth year student"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              commentTitle="amazing leadership"
              comment="sometimes in our lives, we all have pain and sorrow, but if we are wise, we know that there is always tomorrow and that is why I decided to become part of the christian union Kirinyaga university"
              commentorProfilePicture={image1}
              commentorName="Kevin Maunga"
              commentorPosition="fourth year student"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              commentTitle="amazing leadership"
              comment="sometimes in our lives, we all have pain and sorrow, but if we are wise, we know that there is always tomorrow and that is why I decided to become part of the christian union Kirinyaga university"
              commentorProfilePicture={image1}
              commentorName="Kevin Maunga"
              commentorPosition="fourth year student"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Container>
  );
};

export default SlideTestimonials;
