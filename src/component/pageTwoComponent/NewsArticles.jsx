import { Box, Container, Typography, } from '@mui/material';
import SliderComponent from './SliderComponent'
import imagesSlider from '../../../public/images/imagesSlider.png';
import imagesSlider1 from '../../../public/images/imagesSlider1.png';
import imagesSlider2 from '../../../public/images/imagesSlider2.png';

const images = [
    { src: imagesSlider, alt: 'New & Articles' },
    { src: imagesSlider1, alt: 'New & Articles' },
    { src: imagesSlider2, alt: 'New & Articles' },
    { src: imagesSlider1, alt: 'New & Articles' },

];

const NewsArticles = () => {
    const responsiveSettings = [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            },
        },

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        },

    ];
    return (
        <Box sx={{ padding: '80px 0px' }}>
            <Container fixed>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "var(--font-covered)",
                                color: "#EEC044",
                            }}
                        >
                            From the Blog
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                typography: {
                                    lg: 'h4',
                                    xs: 'h5',
                                }, fontFamily: 'var(--font-manrope) !important', fontWeight: '800 !important',
                                color: "#1F1E17",
                            }}
                        >
                            News & Articles
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <SliderComponent images={images} slidesToShow={3} useSecondSettings={false} width={{
                        sm: 250,
                        md: 280,
                        lg: 360,
                    }}
                        height={{
                            sm: 250,
                            md: 300,
                            lg: 500
                        }} responsiveSettings={responsiveSettings} />
                </Box>
            </Container>
        </Box>
    )
}

export default NewsArticles
