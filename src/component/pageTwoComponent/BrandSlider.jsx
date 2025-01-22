import { Box, Container, } from '@mui/material';
import SliderComponent from './SliderComponent';
import Logo1 from '../../../public/images/partner-06.webp.png';
import Logo2 from '../../../public/images/partner-07.webp.png';
import Logo3 from '../../../public/images/partner-08.webp.png';
import Logo4 from '../../../public/images/partner-09.webp.png';
import Logo5 from '../../../public/images/partner-10.webp.png';

const images = [
  { src: Logo1, alt: 'wheat' },
  { src: Logo2, alt: 'agr' },
  { src: Logo3, alt: 'Ferm' },
  { src: Logo4, alt: 'Rice' },
  { src: Logo5, alt: 'Agric' },
  { src: Logo3, alt: 'Ferm' },
];
const BrandSlider = () => {
  const responsiveSettings = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
      },
    },
  ];
  return (
    <Box className="BrandLogoSec" sx={{padding:'20px 0px', background:'#EEC044'}}>
        <Container fixed>
        <SliderComponent images={images} slidesToShow={5} useSecondSettings={true} responsiveSettings={responsiveSettings} />
        </Container>
    </Box>
  )
}

export default BrandSlider
