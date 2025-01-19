import { Box, Container, Typography, Avatar } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Item from './Item';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Link from 'next/link';
import Image from 'next/image'
import Fruits from '@/app/assets/images/9.png.png';
import SweetExotic from '@/app/assets/images/5.png.png';
import DairyProducts from '@/app/assets/images/25.png.png';
import Vegetables from '@/app/assets/images/Rectangle.png';

const BestProducts = [
    {
        name: 'Fresh Fruits',
        img: Fruits,
    },
    {
        name: 'Sweet Exotic',
        img: SweetExotic,
    },
    {
        name: 'Dairy Products',
        img: DairyProducts,
    },
    {
        name: 'Vegetables',
        img: Vegetables,
    },
];




const BestProduct = () => {
    return (
        <Box sx={{ padding: '80px 0px' }}>
            <Container fixed>
                <Grid container spacing={8} alignItems={"center"}>
                    <Grid size={{ md: 6 }} sx={{ padding: '0px' }}>
                        <Item sx={{ padding: '30px 60px 60px 45px', borderRadius: '6px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px' }}  >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <Typography variant="subtitle2" sx={{ fontFamily: 'var(--font-shadows_two)', color: '#49A760' }}>Healthy Foods
                                    Healthy Foods
                                </Typography>
                                <Typography variant="h3" sx={{typography: {
      xs: 'h4', 
      sm: 'h2',
    }, fontFamily: "var(--font-outfit)", mb: "10px", fontWeight: '600', color: "#04000B" }}>
                                    Best Organic
                                    Agriculture Firms
                                </Typography>
                                <Typography variant="subtitle2" sx={{ fontFamily: "var(--font-outfit)", fontWeight: '500', color: "#666666" }}>
                                    Give lady of they such they sure it. Me contained explained
                                    my education. Vulgar as hearts by garret. Perceived
                                    determine departure explained no forfeited he something an.
                                    Contrasted dissimilar get joy you instrument out.
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box sx={{ position: "relative", width: '55px' }}>
                                        <Avatar sx={{ bgcolor: '#49A760' }}>
                                            <PlayArrowIcon />
                                        </Avatar>
                                        <Box sx={{
                                            bgcolor: '#49A760', width: '40px', borderRadius: '20px', height: '40px', position: "absolute", bottom: '-55%',
                                            left: '25%'
                                        }}>
                                        </Box>
                                    </Box>
                                    <Link href={''}>
                                        <Typography variant="subtitle2" sx={{
                                            fontFamily: 'var(--font-outfit)', fontWeight: '500', ":hover": {
                                                color: '#49A760', textDecoration: "underline"
                                            }, color: '#04000B', textTransform: "uppercase"
                                        }} >OUR STORY</Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Item>
                    </Grid >
                    <Grid size={{ md: 6 }} sx={{ padding: '0px', width:'100%' }}>
                        <Item>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gap: 5,
                                    gridTemplateColumns: {
                                        // xs: '1fr',
                                        xs: 'repeat(2, 1fr)',
                                    },
                                }}
                            >
                                {BestProducts.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display:'flex', flexDirection:"column",
                                            gap:'20px', alignItems:'center'
                                        }}
                                    >
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                            width={122}
                                            height={120}
                                            style={{ objectFit: 'contain' }}
                                        />
                                        <Typography variant="h6" sx={{fontFamily:'var(--font-outfit)', fontWeight:"600", color:'#04000B'}}>{item.name}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default BestProduct
