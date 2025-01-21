import { Box, Container, Typography, } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Item from "../Item";
import Link from "next/link";
import Image from "next/image";
import fruitsbag from '../../assets/images/fruitsbag.png'
import MarketLogo1 from '../../assets/images/MarketLogo1.png'
import MarketLogo2 from '../../assets/images/MarketLogo2.png'
import MarketLogo3 from '../../assets/images/MarketLogo3.png'
import SliderComponent from './SliderComponent';


const images = [
    { src: MarketLogo1, alt: 'Organic' },
    { src: MarketLogo2, alt: 'Barn' },
    { src: MarketLogo3, alt: 'Farm' },
    { src: MarketLogo2, alt: 'Barn' },

];


const AgricultureMarket = () => {
    const responsiveSettings = [

        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
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
        <Box className='agricultureMarketSec' sx={{ padding: '80px 0px' }}>
            <Container fixed>
                <Grid container spacing={2} sx={{alignItems:'center'}}>
                    <Grid size={{ md: 6 }}>
                        <Item>
                            <Box sx={{ padding:{
                                sm:"40px 80px",xs:"40px",
                            } , background: '#49A760', display: 'flex', flexDirection: 'column', gap: 2, borderRadius: '6px' }}>
                                <Typography variant="h4" sx={{
                                    typography: {
                                        lg: 'h4',
                                        xs: 'h5',
                                    }, fontFamily: 'var(--font-manrope) !important', fontWeight: '800 !important',
                                    color: "#FFFFFF",
                                }}>Built the best
                                    agriculture market</Typography>
                                <Typography variant="subtitle2" sx={{
                                    fontFamily: 'var(--font-manrope) !important', fontWeight: '500 !important',
                                    color: "#FFFFFF",
                                }}>Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult.</Typography>
                                <Link href='#' style={{ cursor: 'pointer', width: 'fit-content' }}> <Typography variant="subtitle2" sx={{
                                    fontFamily: 'var(--font-manrope) !important', fontWeight: '600 !important',
                                    color: "#FFFFFF", textTransform: 'uppercase', borderBottom: '1px solid #FFFFFF',
                                }}>Discover More</Typography></Link>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid size={{ md: 6 }}>
                        <Item>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
                                <Box sx={{ width: '80%', height: "auto" }}>
                                    <Image src={fruitsbag} alt='AgricultureMarket' style={{ display: 'flex', margin: '0px auto',width:'100%'}}></Image>
                                </Box>
                                <Box sx={{ width: '80%' }}>
                                    <SliderComponent images={images} width={70}
                                        height={70} slidesToShow={3} responsiveSettings={responsiveSettings} />
                                </Box>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AgricultureMarket
