import { Box, Container, } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Logo1 from '../../assets/images/partner-06.webp.png';
import Logo2 from '@/app/assets/images/partner-07.webp.png';
import Logo3 from '@/app/assets/images/partner-08.webp.png';
import Logo4 from '@/app/assets/images/partner-09.webp.png';
import Logo5 from '@/app/assets/images/partner-10.webp.png';


const BrandSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
  return (
    <Box className="BrandLogoSec" sx={{padding:'20px 0px'}}>
        <Container fixed>
          <Box className="slider-container">
          <Slider {...settings}>
        
        <Box>
        <Image src={Logo1} alt='wheat'></Image>
        </Box>
        <Box>
        <Image src={Logo2} alt='agr'></Image>
        </Box>
        <Box>
        <Image src={Logo3} alt='Ferm'></Image>
        </Box>
        <Box>
        <Image src={Logo4} alt='Rice'></Image>
        </Box>
        <Box>
        <Image src={Logo5} alt='Agric'></Image>
        </Box>
        <Box>
        <Image src={Logo3} alt='Ferm'></Image>
        </Box>
      </Slider>
          </Box>
        </Container>
    </Box>
  )
}

export default BrandSlider
