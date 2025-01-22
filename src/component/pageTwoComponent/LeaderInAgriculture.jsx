import { Box, Container, Typography, Button, } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import Item from '../Constants/Item'
import videoImg from '../../../public/images/videoImg.png';
import section2Img3 from '../../../public/images/section2Img3.png';
import section2Img1 from '../../../public/images/section2Img1.png';
import section2Img2 from '../../../public/images/section2Img2.png';


const LeaderInAgriculture = () => {
    return (
        <Box className="LeaderInAgriculture" sx={{ padding: '80px 0px', position: 'relative' }}>
            <Box >
                <Container fixed>
                    <Grid container spacing={8}>
                        <Grid size={{ md: 6, xs:12 }}>
                            <Item>
                                <Box sx={{display:'flex', flexDirection:'column',gap:{lg:3, xs:2},}}>
                                    <Box sx={{ width: {lg:'70%',xs:'100%'} }}>
                                        <Typography variant="h6" sx={{ fontFamily: 'var(--font-covered)', color: '#EEC044' }}>Get to know us</Typography>
                                        <Typography variant="h4" sx={{typography: {
                                        lg: 'h4',
                                        xs: 'h5',
                                    },fontFamily:'var(--font-manrope) !important', fontWeight:'800 !important', color: '#1F1E17' }}>Leader in Agriculture
                                            Market</Typography>
                                    </Box>
                                    <Typography variant="subtitle2" sx={{ fontFamily: 'var(--font-manrope)', fontWeight: '500', color: '#878680' }}>There are many variations of passages of Lorem Ipsum available
                                        majority have suffered alteration in some form, by injected humour,
                                        or randomised words which don’t look even slightly believable.</Typography>
                                    <Box sx={{ display: 'flex',  justifyContent: 'space-between', flexDirection:{sm:'row', xs:'column'}, alignItems: {sm:'center' ,xs:'start'}, gap:{lg:'0', xs:'10px' }}}>
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
                        <Grid size={{ md: 6, xs:12}}>
                            <Item>
                                    <Box sx={{display:'flex', justifyContent:'space-between', gap:{lg:2 , xs:'10px'}}}>
                                        <Box sx={{display:'flex', justifyContent:'space-between',
                                            flexDirection:'column'
                                        }}>
                                        <Box sx={{width:{lg:'230px', md:'160px', xs:"100%"}, height:'225px'}}>
                                            <Image src={section2Img1} style={{width:'100%', height:'100%'}} alt='section2Img1'></Image>
                                        </Box>
                                        <Box sx={{width:{lg:'230px', md:'160px', xs:"100%"}, height:'165px', display:'flex', alignItems:'center', gap:'20px', flexDirection:'column'}}>
                                            <Box sx={{textAlign:'end'}}>
                                                <Typography variant="h3" sx={{fontFamily: 'var(--font-covered)', fontWeight: '500', color:'#4BAF47', lineHeight:'20px'}} >+</Typography>
                                                <Typography variant="h1" sx={{fontFamily: 'var(--font-covered)', fontWeight: '500', lineHeight:'70px'}} >20</Typography>
                                            </Box>
                                            <Typography variant="body1" sx={{typography:{
                                                lg:'body1',
                                                xs:{
                                                    fontSize:'12px'
                                                }
                                            }, textAlign:'center',
                                                fontFamily: 'var(--font-menrope) !important', fontWeight: '600 !important', color:'#4BAF47'}} >PARTNERS IN WORLD WIDE</Typography>
                                        </Box>
                                        </Box>
                                        <Box sx={{width:{
                                            md:'296px', xs:'65%'
                                        }, height:'450px'}}>
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

