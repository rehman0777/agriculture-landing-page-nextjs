import { Box, Typography, Container, Button } from '@mui/material'
import Grid from '@mui/material/Grid2';
import Item from '../Constants/Item'



const BannerSection = () => {
    return (
        <Box className='HeroBanner' sx={{
            backgroundPosition:{sm:'center', xs:'right'},
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: 700
        }}
        >
            <Container fixed sx={{ height: '100%' }}>
                <Box
                    display="flex"
                    alignItems="start"
                    justifyContent='center'
                    sx={{ height: '100%', flexDirection: 'column' }}
                >
                    <Grid container spacing={2} sx={{ width:'100%'}}>
                        <Grid size={{ md: 7 }} sx={{ padding: '0px', width:'100%'}}>
                            <Item sx={{
                                display: 'flex', gap: '10px', flexDirection: 'column', alignItems:{sm:'start', xs:'center'}
                            }}>
                                <Typography variant="h6" sx={{ fontFamily: 'var(--font-shadows_two)', color: '#FFFFFF' }}>Best Agro Company</Typography>
                                <Typography variant="h2" sx={{
                                    typography: {
                                        lg: 'h2',
                                        md: 'h3',
                                        xs: 'h4',
                                    }, fontFamily: 'var(--font-outfit) !important', fontWeight: '600 !important', color: '#FFFFFF',textAlign:{sm:'start', xs:'center'}
                                }} >Organic agriculture
                                    farming products</Typography>
                                <Button variant='contained' sx={{
                                    background: '#F7C35F', ':hover': {
                                        background: '#EEC044',
                                    }, borderRadius: '6px', width: 'fit-content', padding: '17px 30px'
                                }}>
                                    <Typography variant="subtitle2" sx={{ color: '#04000B', fontFamily: 'var(--font-outfit)', fontWeight: '600' }}>Discover More</Typography>
                                </Button>
                            </Item>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default BannerSection
