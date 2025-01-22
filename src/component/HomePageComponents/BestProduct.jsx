import { Box, Container, Typography, Avatar } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Item from '../Constants/Item';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Link from 'next/link';
import Image from 'next/image'


const BestProducts = [
    {
        name: 'Fresh Fruits',
        img: '/images/9.png.png',
    },
    {
        name: 'Sweet Exotic',
        img: '/images/5.png.png',
    },
    {
        name: 'Dairy Products',
        img: '/images/25.png.png',
    },
    {
        name: 'Vegetables',
        img: "/images/Rectangle.png",
    },
];




const BestProduct = () => {
    return (
        <Box sx={{ padding: '80px 0px' }}>
            <Container fixed>
                <Grid container spacing={8} alignItems={"center"}>
                    <Grid size={{ md: 6 }} sx={{ padding: '0px' }}>
                        <Item sx={{ padding: { sm: '30px 60px 60px 45px', xs: '30px 20px 60px 20px' }, position:'relative', borderRadius: '6px', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px' }}  >
                            <Box  sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <Typography variant="subtitle2" sx={{ fontFamily: 'var(--font-shadows_two)', color: '#49A760' }}>Healthy Foods
                                    Healthy Foods
                                </Typography>
                                <Typography variant="h3" sx={{
                                    fontFamily: "var(--font-outfit)", mb: "10px", fontWeight: '600 !important', color: "#04000B", typography: {
                                        lg: 'h3',
                                        sm: 'h4',
                                        xs: 'h5',
                                    },
                                }}>
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
                            <Box sx={{width: { xs: '120px', sm: '150px', },
                                                    height: { xs: '120px', sm: '150px', },
                                                    borderRadius: '80px',
                                                    position: 'absolute',
                                                    bottom:'0px',
                                                    right:'0px'}}>
                            <Image src='/images/wheat.png' alt='Wheat' fill></Image>
                            </Box>
                        </Item>
                    </Grid >
                    <Grid size={{ md: 6 }} sx={{ padding: '0px', width: '100%' }}>
                        <Item>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gap: { sm: 5, xs: 1 },
                                    gridTemplateColumns: {
                                        xs: 'repeat(2, 1fr)',
                                    },
                                }}
                            >
                                {BestProducts.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex', flexDirection: "column",
                                            gap: '20px', alignItems: 'center'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: { xs: 72, md: 122 },
                                                height: { xs: 70, md: 120 },
                                                position: 'relative',
                                            }}
                                        >
                                            <Image
                                                src={item.img}
                                                alt={item.name}
                                                fill
                                            />
                                        </Box>
                                        <Typography variant="h6" sx={{ typography: {
                                        lg: 'h6',
                                        md: 'subtitle1',
                                        xs: 'subtitle2',
                                    }, fontFamily: 'var(--font-outfit) !important', fontWeight: '600 !important', color: '#04000B' }}>{item.name}</Typography>
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
