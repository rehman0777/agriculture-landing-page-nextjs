import { Box, Container, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import Item from './Item';
import FeatureProductsData from './FeatureProductsData';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const FeatureProducts = () => {
    return (
        <Box sx={{ background: '#E9F1EE', padding:'80px 0px' }}>
            <Container fixed>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'center', mb:4 }}>
                    <Typography variant="h6" sx={{ fontFamily: 'var(--font-shadows_two)', color: '#49A760' }}>Customers’ Choice</Typography>
                    <Typography variant="h4" sx={{ fontFamily: 'var(--font-outfit)', fontWeight: '600', color: '#04000B' }}>Featured Products</Typography>
                </Box>
                <Grid container spacing={2} sx={{justifyContent:'center'}}>
                    {FeatureProductsData.map((featureProduct, index) => (
                        <Grid size={{ lg: 3, md: 4, sm:6 }} key={index} sx={{width:'100%'}}>
                            <Item >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        padding: '40px 40px',
                                        gap: '20px',
                                        alignItems: {sm:'start', xs:'center'},
                                        background: '#FFFFFF',
                                        borderRadius: '6px',
                                        height: {sm:'420px', xs:'auto'},
                                        flexDirection:"column"
                                    }}
                                >
                                    <Box sx={{ position: 'relative', width: '162px', height: '167px', margin: '0px auto' }}>
                                        {featureProduct.sale === '1' && (
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    background: 'linear-gradient(93deg, #49A760 50%, #FCC51B 100%)',
                                                    position: 'absolute',
                                                    top: '-10px',
                                                    left: '-40px',
                                                    fontFamily: 'var(--font-outfit)',
                                                    fontWeight: '700',
                                                    padding: '2px 10px',
                                                    color: '#FFFFFF',
                                                    textTransform: 'uppercase',
                                                    borderRadius: '12px',
                                                }}
                                            >
                                                Sale!
                                            </Typography>
                                        )}
                                        <Image src={featureProduct.img} alt={featureProduct.name} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontFamily: 'var(--font-outfit)',
                                                    fontWeight: '600',
                                                    color: '#666666',
                                                }}
                                            >
                                                {featureProduct.cetagory.join(', ')}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontFamily: 'var(--font-outfit)',
                                                    fontWeight: '600',
                                                    color: '#04000B',
                                                }}
                                            >
                                                {featureProduct.name}
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                                {featureProduct.sale === '1' && (
                                                    <Typography
                                                        variant="subtitle2"
                                                        sx={{
                                                            fontFamily: 'var(--font-outfit)',
                                                            fontWeight: '700',
                                                            color: '#666666',
                                                            textDecoration: 'line-through',
                                                        }}
                                                    >
                                                        ${featureProduct.salePrice}
                                                    </Typography>
                                                )}
                                                <Typography
                                                    variant="subtitle2"
                                                    sx={{
                                                        fontFamily: 'var(--font-outfit)',
                                                        fontWeight: '700',
                                                        color: '#49A760',
                                                    }}
                                                >
                                                    ${featureProduct.price}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                color: '#04000B',
                                                borderColor: '#F7C35F',
                                                display: 'flex',
                                                alignItems: 'center',
                                                ':hover': {
                                                    background: '#F7C35F',
                                                },
                                                borderRadius: '30px',
                                                width: 'fit-content',
                                                padding: '10px 20px',
                                            }}
                                            startIcon={<ShoppingBagIcon />}
                                        >
                                            <Typography
                                                variant="subtitle1"
                                                sx={{
                                                    fontFamily: 'var(--font-outfit)',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                }}
                                            >
                                                Add to cart
                                            </Typography>
                                        </Button>
                                    </Box>
                                </Box>
                            </Item>

                        </Grid>
                    ))}

                </Grid>
            </Container>
        </Box>
    )
}

export default FeatureProducts
