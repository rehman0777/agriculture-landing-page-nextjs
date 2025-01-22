import { Box, Container, Typography, Button } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Item from '../Constants/Item';
import Image from 'next/image'
import Apple from '../../../public/images/14.png.png'
import Discount from '../../../public/images/Item27.png.png'
import Money from '../../../public/images/Item26.png.png'
import Carrot from '../../../public/images/Link2.png.png'
import Corn from '../../../public/images/Link4.png.png'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


const ProductsData = [
    {
        name: 'Organic Carrot',
        price: '5.00',
        cetagory: [
            'Vegetables',
            'Winter',
        ],
        sale: '1',
        salePrice: '8.00',
        img: Carrot,
    },
    {
        name: 'Organic Sweet Corn',
        price: '8.00',
        cetagory: [
            'Fruits',
            'Juicy',
        ],
        sale: '0',
        salePrice: '8.00',
        img: Corn,
    }
]

const OrganicFreshFruit = () => {
    return (
        <Box sx={{ padding: '80px 0px' }}>
            <Container fixed>
                <Grid container spacing={8}>
                    <Grid size={{ lg: 4, }} sx={{ width: '100%' }}>
                        <Item sx={{ bgcolor: '#49A760', position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', borderRadius: '6px', padding: '40px 30px 280px 30px' }}>
                            <Typography variant="h4" sx={{ textAlign: 'center', fontFamily: 'var(--font-outline)', fontWeight: '600', color: "#FFFFFF" }}>Organic
                                Fresh Fruit</Typography>
                            <Box
                                sx={{
                                    background: '#FFFFFF', mb: 2, position: 'relative', padding: '5px 10px',
                                    ':before': {
                                        content: "''", position: 'absolute', top: '0',
                                        left: '-10px',
                                        clipPath: 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 45% 50%, 0% 0%)',
                                        background: '#FFFFFF',
                                        width: '20px',
                                        height: '100%',
                                    },
                                    ':after': {
                                        content: "''",
                                        position: 'absolute',
                                        top: '0',
                                        right: '-10px',
                                        clipPath: 'polygon(100% 0%, 55% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)',
                                        background: '#FFFFFF',
                                        width: '20px',
                                        height: '100%',
                                    },
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        textAlign: 'center',
                                        fontFamily: 'var(--font-outline)',
                                        fontWeight: '600',
                                        color: '#04000B',
                                    }}
                                >
                                    Save 20% and free delivery
                                </Typography>
                            </Box>

                            <Button variant='contained' sx={{
                                background: '#F7C35F', ':hover': {
                                    background: '#EEC044',
                                }, borderRadius: '6px', width: 'fit-content', padding: '17px 30px'
                            }}>
                                <Typography variant="subtitle2" sx={{ color: '#04000B', fontFamily: 'var(--font-outfit)', fontWeight: '600' }}>All Products</Typography>
                            </Button>
                            <Image src={Apple} style={{ position: 'absolute', bottom: '20px', }} alt='Apple' />
                        </Item>
                    </Grid>
                    <Grid size={{ lg: 8, }} sx={{ display: 'flex', width: '100%', flexDirection: 'column', gap: 4 }}>
                        <Item>
                            <Box sx={{ display: 'flex', gap: '50px', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
                                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <Image src={Money} alt='Money Return' />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontFamily: 'var(--font-oufit)', fontWeight: '600', color: '#04000B' }} color="initial">Money Return</Typography>
                                        <Typography variant='body2' sx={{ fontFamily: 'var(--font-oufit)', fontWeight: '500', color: '#666666' }} color="initial">Back guarantee under 15 days</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                    <Image src={Discount} alt='Member Discount' />
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontFamily: 'var(--font-oufit)', fontWeight: '600', color: '#04000B' }} color="initial">Member Discount</Typography>
                                        <Typography variant='body2' sx={{ fontFamily: 'var(--font-oufit)', fontWeight: '500', color: '#666666' }} color="initial">Big offer for the new memebers</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Item>
                        <Item>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gap: 5,
                                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                                    width: {
                                        xs: '70%',
                                        sm: '100%',
                                    },
                                    '@media (max-width: 425px)': {
                                        width: '85%',
                                    },
                                    '@media (max-width: 375px)': {
                                        width: '100%',
                                    },
                                    margin: '0px auto',
                                }}
                            >
                                {ProductsData.map((product, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            padding: { sm: '20px 40px', xs: '20px 20px' },
                                            alignItems: { sm: 'start', xs: 'center' },
                                            flexDirection: 'column',
                                            gap: '20px',
                                            border: '1px solid #E7E7E7',
                                            borderRadius: '6px',
                                            position: 'relative'
                                        }}
                                    >
                                        {product.sale === '1' && (
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    background: 'linear-gradient(93deg, #49A760 50%, #FCC51B 100%)',
                                                    position: 'absolute',
                                                    top: '10px',
                                                    left: '20px',
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
                                        <Box sx={{ position: 'relative', width: '162px', height: '167px', margin: '0px auto' }}>

                                            <Image src={product.img} alt={product.name} />
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                            <Box sx={{ display: 'flex', alignItems: { md: 'start', xs: 'center' }, flexDirection: 'column', gap: 1 }}>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        fontFamily: 'var(--font-outfit)',
                                                        fontWeight: '600',
                                                        color: '#666666',
                                                    }}
                                                >
                                                    {product.cetagory.join(', ')}
                                                </Typography>
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        fontFamily: 'var(--font-outfit) !important',
                                                        fontWeight: '600 !important',
                                                        color: '#04000B',
                                                        typography: { xs: 'subtitle1', md: 'h6' },
                                                    }}
                                                >
                                                    {product.name}
                                                </Typography>
                                                <Box sx={{ display: 'flex', gap: '10px' }}>
                                                    {product.sale === '1' && (
                                                        <Typography
                                                            variant="subtitle2"
                                                            sx={{
                                                                fontFamily: 'var(--font-outfit)',
                                                                fontWeight: '700',
                                                                color: '#666666',
                                                                textDecoration: 'line-through',
                                                            }}
                                                        >
                                                            ${product.salePrice}
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
                                                        ${product.price}
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
                                ))}
                            </Box>


                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default OrganicFreshFruit
