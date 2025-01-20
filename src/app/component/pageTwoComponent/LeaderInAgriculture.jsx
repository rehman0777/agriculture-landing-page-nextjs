import { Box, Container, Typography, Button, } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import Item from '../Item'
import videoImg from '@/app/assets/images/videoImg.png';
import section2Img3 from '@/app/assets/images/section2Img3.png';
import section2Img1 from '@/app/assets/images/section2Img1.png';
import section2Img2 from '@/app/assets/images/section2Img2.png';


const LeaderInAgriculture = () => {
    return (
        <Box className="LeaderInAgriculture" sx={{ padding: '80px 0px', position: 'relative' }}>
            <Box >
                <Container fixed>
                    <Grid container spacing={8}>
                        <Grid size={{ md: 6 }}>
                            <Item>
                                <Box sx={{display:'flex', flexDirection:'column',gap:3,}}>
                                    <Box sx={{ width: '70%' }}>
                                        <Typography variant="h6" sx={{ fontFamily: 'var(--font-covered)', color: '#EEC044' }}>Get to know us</Typography>
                                        <Typography variant="h4" sx={{ fontFamily: 'var(--font-manrope)', fontWeight: '800', color: '#1F1E17' }}>Leader in Agriculture
                                            Market</Typography>
                                    </Box>
                                    <Typography variant="subtitle2" sx={{ fontFamily: 'var(--font-manrope)', fontWeight: '500', color: '#878680' }}>There are many variations of passages of Lorem Ipsum available
                                        majority have suffered alteration in some form, by injected humour,
                                        or randomised words which don’t look even slightly believable.</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                            <Typography variant="subtitle" sx={{ fontFamily: 'var(--font-covered)', color: '#4BAF47' }}>Modern agriculture types</Typography>
                                            <Typography variant="subtitle" sx={{ fontFamily: 'var(--font-manrope)', fontWeight: '500', color: '#878680' }}>We're here for you from start
                                                to finish</Typography>
                                        </Box>
                                        <Box>
                                            <Image src={videoImg} alt='videoImg'></Image>
                                        </Box>
                                    </Box>
                                    <Button sx={{
                                        background: '#4BAF47', width: 'fit-content', padding: '15px 30px', borderRadius: '6px', ':hover': {
                                            background: '#31782f'
                                        }
                                    }}>
                                        <Typography variant="subtitle2" sx={{ fontFamily: 'var(--font-manrope)', fontWeight: '700', color: '#FFFFFF', textTransform: 'capitalize' }}>Discover More</Typography>
                                    </Button>
                                </Box>

                            </Item>
                        </Grid>
                        <Grid size={{ md: 6 }}>
                            <Item>
                                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                        <Box sx={{display:'flex', justifyContent:'space-between',
                                            flexDirection:'column'
                                        }}>
                                        <Box sx={{width:'230px', height:'225px'}}>
                                            <Image src={section2Img1} style={{width:'100%', height:'100%'}} alt='section2Img1'></Image>
                                        </Box>
                                        <Box sx={{width:'230px', height:'125px'}}>
                                            <Image src={section2Img2} style={{width:'100%', height:'100%'}} alt='section2Img2'></Image>
                                        </Box>
                                        </Box>
                                        <Box sx={{width:'296px', height:'450px'}}>
                                            <Image src={section2Img3} style={{width:'100%', height:'100%'}} alt='section2Img3'></Image>
                                        </Box>
                                    </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default LeaderInAgriculture

