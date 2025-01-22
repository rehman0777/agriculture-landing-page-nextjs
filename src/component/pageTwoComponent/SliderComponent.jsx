import Slider from "react-slick";
import React, {useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box,useTheme, useMediaQuery} from '@mui/material';
import Image from 'next/image';

const SliderComponent = ({ images, slidesToShow, responsiveSettings,width, height, useSecondSettings = false }) => {

  const theme = useTheme();

 
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  let responsiveWidth = width;
  let responsiveHeight = height;

  if (typeof width === "object") {
    if (isSmallScreen) {
      responsiveWidth = width.sm;
      responsiveHeight = height.sm;
    } else if (isMediumScreen) {
      responsiveWidth = width.md;
      responsiveHeight = height.md;
    } else if (isLargeScreen) {
      responsiveWidth = width.lg;
      responsiveHeight = height.lg;
    }
  }
  const baseSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    responsive: responsiveSettings,
    accessibility: true,
    focusOnSelect: true,
    speed: 2000,
  };

  
  const settingsComponent1 = {
    ...baseSettings,
    slidesToShow: slidesToShow, 
  };

 
  const settingsComponent2 = {
    ...baseSettings,
    slidesToShow: slidesToShow,
    autoplaySpeed: 1000,
    cssEase: "linear", 
  };

 
  const settings = useSecondSettings ? settingsComponent2 : settingsComponent1;

  return (
    <Slider {...settings}>
    {images.map((image, index) => (
      <Box key={index} sx={{display:'flex !important', justifyContent:'center',}}>
        <Image src={image.src} alt={image.alt}width={responsiveWidth} 
          height={responsiveHeight} 
          style={{ objectFit: "contain" }}  />
      </Box>
    ))}
  </Slider>
    
  );
};

export default SliderComponent;
