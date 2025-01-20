
import React, { useEffect, useState, useRef } from 'react';
import { Box, Container, Typography, Stack, List, Divider, CircularProgress, } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Farmer from '@/app/assets/images/div.shape.png';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import Item from './Item';
import Image from 'next/image';
import SectionImage from '@/app/assets/images/17.png.png'


const HealthyLifeSection = () => {
    const sectionRef = useRef(null);
    const [isCounting, setIsCounting] = useState(false);
    const [progress, setProgress] = useState(0);


    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsCounting(true);
                }
            },
            { threshold: 0 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isCounting) {
            const timer = setInterval(() => {
                setProgress((prev) => (prev >= 87 ? 87 : prev + 5));
            }, 100);
            return () => clearInterval(timer);
        }
    }, [isCounting]);

    return (
        <Box ref={sectionRef} sx={{ position: 'relative', pb: '80px' }}>
            <Grid container spacing={0}>
                <Grid size={{ md: 5 }} sx={{ width: '100%', marginBottom: { md: '0px', xs: '-10px' } }}>
                    <Item >
                        <Box sx={{ height: 'fit-content' }}>

                            <Image
                                src={Farmer}
                                alt="Farmer"
                                style={{ height: '600px', width: '100%', objectFit: 'cover' }}
                            />
                        </Box>
                    </Item>
                </Grid>

                <Grid size={{ md: 7 }} sx={{ width: '100%', background: '#4BAF47', display: 'flex', height: { sm: '600px', xs: '660px' }, justifyContent: 'center' }}>
                    <Item sx={{ display: 'flex', alignItems: 'center' }}>
                        <Container maxWidth="sm">
                            <Typography
                                variant="h4"
                                sx={{
                                    mb: 2,
                                    fontFamily: 'var(--font-outfit)',
                                    fontWeight: '600',
                                    color: '#FFFFFF',
                                }}
                            >
                                Healthy life with fresh products
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontFamily: 'var(--font-outfit)',
                                    fontWeight: '500',
                                    color: '#CCCCCC',
                                    mb: 4,
                                }}
                            >
                                Consume ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illo ullam
                                harum et fuga suscipit quibusdam sapiente. Corrupti ut consequatur magni minus! Iusto
                                eos consectetur similique minus culpa odio temporibus.
                            </Typography>
                            <Stack
                                direction={{ sm: "row", xs: 'column' }}
                                spacing={4}
                                sx={{ alignItems: 'center', }}
                                divider={<Divider orientation={{ sm: "vertical", xs: 'horizontal' }} flexItem sx={{ borderColor: '#FFFFFF', }} />}
                            >
                                <Box sx={{ display: 'flex', py: 1, flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                                    <Box sx={{ position: 'relative', textAlign: 'center' }}>
                                        <CircularProgress
                                            size={130}
                                            variant="determinate"
                                            value={progress}
                                            thickness={0.9}
                                            sx={{
                                                color: '#2a7d3e',
                                                position: 'absolute',
                                                zIndex: 1,
                                            }}
                                        />
                                        <CircularProgress
                                            size={130}
                                            variant="determinate"
                                            value={100}
                                            thickness={0.5}
                                            sx={{
                                                color: '#FFFFFF',
                                                padding: '1px'
                                            }}
                                        />
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                fontWeight: '600',
                                                fontFamily: 'var(--font-outline)',
                                                color: '#F7C35F',
                                            }}
                                        >
                                            {progress}%
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle2" sx={{
                                        fontFamily: 'var(--font-outfit)',
                                        fontWeight: '600',
                                        color: '#FFFFFF',
                                    }}>Organic Solutions</Typography>
                                </Box>

                                <Box>
                                    <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                            <CheckBoxOutlinedIcon sx={{
                                                color: '#F8F9FA',
                                            }} />

                                            <Typography variant="subtitle2" sx={{
                                                fontFamily: 'var(--font-outfit)',
                                                fontWeight: '500',
                                                color: '#F8F9FA',
                                            }} >Biodynamic food</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                            <CheckBoxOutlinedIcon sx={{
                                                color: '#F8F9FA',
                                            }} />

                                            <Typography variant="subtitle2" sx={{
                                                fontFamily: 'var(--font-outfit)',
                                                fontWeight: '500',
                                                color: '#F8F9FA',
                                            }} >Organic gardening</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                            <CheckBoxOutlinedIcon sx={{
                                                color: '#F8F9FA',
                                            }} />

                                            <Typography variant="subtitle2" sx={{
                                                fontFamily: 'var(--font-outfit)',
                                                fontWeight: '500',
                                                color: '#F8F9FA',
                                            }} >Organic food certification</Typography>
                                        </Box>
                                    </List>
                                </Box>
                            </Stack>
                        </Container>
                    </Item>
                </Grid>
            </Grid>
            <Box sx={{
                position: 'absolute', width: { xs: 250, md: 350 },
                height: { xs: 250, md: 350 },
                 bottom: '-50px', right: {
                    sm: '0', 
                    xs: '-40px',
                  },
                  '@media (max-width: 450px)': {
                    right: '-80px',
                  },
                  '@media (max-width: 375px)': {
                    right: '-100px',
                  },
            }}>
                <Image src={SectionImage} layout="fill"
                    objectFit="contain" alt='SectionImage'></Image>
            </Box>

        </Box>
    );
};

export default HealthyLifeSection;
