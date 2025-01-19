
import { Box, Typography, Badge, Rating, Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientImage from '@/app/assets/images/Link3.jpg.png'
import Image from 'next/image'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
    {
        id: 1,
        review: "“Greatest consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.”",
        name: "Matthew J. Wyman",
        designation: "SENIOR CONSULTANT",
        avatar: ClientImage,
    },
    {
        id: 2,
        review: "“Greatest consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.”",
        name: "Sarah D. Collins",
        designation: "MARKETING DIRECTOR",
        avatar: ClientImage,
    },
    {
        id: 3,
        review: "“Greatest consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.”",
        name: "James T. Nelson",
        designation: "PROJECT MANAGER",
        avatar: ClientImage,
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
                padding: "80px 0px",
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover'
            }}
        >
            <Container fixed>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
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
                            sx={{
                                fontFamily: "var(--font-outfit)",
                                fontWeight: "600",
                                color: "#04000B",
                            }}
                        >
                            What people say?
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ padding: "40px 0", width: '100%' }}>
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
                                    {/* Card Content */}
                                    <Box
                                        sx={{
                                            backgroundColor: "white",
                                            padding: "60px 40px",
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
                                                color: "#555",
                                                textAlign: "center",
                                                fontFamily:'var(--font-outfit)'
                                            }}
                                        >
                                            {testimonial.review}
                                        </Typography>

                                      
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                bottom: "-100px",
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                            }}
                                        >
                                            <Image
                                                src={testimonial.avatar}
                                                alt="ClientImage"
                                                style={{
                                                    width: "150px",
                                                    height: "150px",
                                                    borderRadius:'80px',
                                                    position:'relative',
                                                    border: "10px solid white",
                                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                                }}
                                            >
                                            
                                            </Image>
                                            <Box sx={{position:'absolute', background:'#49A760', top:'-10px', left:0, right:0, width:'fit-content', margin: '0px auto', padding:'10px', borderRadius:'50px', display:'flex', alignItems:'center'}}>
                                                <FormatQuoteIcon/>
                                            </Box>
                                        </Box>
                                    </Box>

                                  <Box sx={{ margin: "120px 0px 40px 0px",}}>
                                    
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
