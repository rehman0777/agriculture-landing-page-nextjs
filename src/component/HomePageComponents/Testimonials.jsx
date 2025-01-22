
import { Box, Typography, Badge, Rating, Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
    {
        id: 1,
        review: "“Greatest consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.”",
        name: "Matthew J. Wyman",
        designation: "SENIOR CONSULTANT",
        avatar: '/images/Link3.jpg.png',
    },
    {
        id: 2,
        review: "“Greatest consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.”",
        name: "Sarah D. Collins",
        designation: "MARKETING DIRECTOR",
        avatar: '/images/Link3.jpg.png',
    },
    {
        id: 3,
        review: "“Greatest consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.”",
        name: "James T. Nelson",
        designation: "PROJECT MANAGER",
        avatar: '/images/Link3.jpg.png',
    },
];

const CustomerReview = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: "10px",
    };

    return (
        <Box className='Slider_section'
            sx={{
                padding: "0px",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <Container fixed>
                <Box sx={{ display: "flex", justifyContent: "center", }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "var(--font-shadows_two)",
                                color: "#49A760",
                            }}
                        >
                            Customers’ Review
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{typography: {
                                lg: 'h4',
                                xs: 'h5',
                            }, fontFamily: 'var(--font-outfit) !important', fontWeight: '600 !important',
                                color: "#04000B",
                            }}
                        >
                            What people say?
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ padding: {sm:"40px 0",xs:"20px 0"}, width: '100%' }}>
                    <Slider {...sliderSettings}>
                        {testimonials.map((testimonial) => (
                            <Box
                                key={testimonial.id}
                                sx={{
                                    padding: "0 10px",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        textAlign: "center",
                                        width: "95%",
                                        margin: "0px auto",
                                        ":before": {
                                            content: "''",
                                            background: "#FFFFFF",
                                            opacity: "60%",
                                            width: "90%",
                                            height: "60px",
                                            position: "absolute",
                                            top: "-20px",
                                            margin: "0px auto",
                                            left: "0",
                                            right: "0",
                                            borderRadius: "10px",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: "white",
                                            padding: {sm:"60px 40px", xs:"30px 20px 45px 20px"},
                                            borderRadius: "15px",
                                            marginTop: "20px",
                                            position: "relative",
                                            width: "100%",
                                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                                        }}
                                    >
                                        <Rating value={5} readOnly sx={{ marginBottom: "10px" }} />
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontFamily: 'var(--font-outfit) !important',
                                                fontWeight: '600 !important',
                                                color: '#04000B',
                                                typography: { xs: 'caption', md: 'h6' },
                                                "@media(max-width: 425px)": {
                                                    fontSize: '12px'
                                                }
                                            }}
                                        >
                                            {testimonial.review}
                                        </Typography>


                                        <Box
                                            sx={{
                                                position: "absolute",
                                                bottom: {md:"-100px", sm:"-65px", xs:"-55px"},
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: { xs: '90px', sm: '100px', md: '150px' },
                                                    height: { xs: '90px', sm: '100px', md: '150px' },
                                                    borderRadius: '80px',
                                                    position: 'relative',
                                                    border: '10px solid white',
                                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                <Image
                                                    src={testimonial.avatar}
                                                    alt="ClientImage"
                                                    fill
                                                />
                                            </Box>

                                            <Box sx={{ position: 'absolute', background: '#49A760', top: '-10px', left: 0, right: 0, width: 'fit-content', margin: '0px auto', padding: {md:'10px', sm:'5px', xs:'3px'}, borderRadius: '50px', display: 'flex', alignItems: 'center' }}>
                                                <FormatQuoteIcon />
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box sx={{ margin: {md:"120px 0px 40px 0px", xs:"74px 0px 20px 0px"}, }}>

                                        <Typography
                                            variant="h6"
                                            sx={{ color: "#333", marginTop: "50px", fontWeight: "bold" }}
                                        >
                                            {testimonial.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "#84B09B" }}>
                                            {testimonial.designation}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Slider>

                </Box>
            </Container>
        </Box>
    );
};

export default CustomerReview;
