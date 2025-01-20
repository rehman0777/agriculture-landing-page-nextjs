import { Box, Container, Typography, Button } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Item from './Item'




const FreshNatural = () => {
    return (
        <Box className='freshNaturalBg' sx={{ height: 550, position: 'relative', backgroundSize: 'cover', backgroundPositionX: { md: 'right', xs: 'left' }, backgroundRepeat: "no-repeat" }}>
            <Container fixed sx={{ height: '100%' }}>
                <Grid container spacing={0} sx={{ height: '100%' }}>
                    <Grid size={{ md: 6 }} sx={{ height: '100%' }}>
                        <Item sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                            <Box sx={{
                                display: 'flex', flexDirection: "column", alignItems: 'center', width: 'fit-content', background: "#F7C35F", padding: "30px 42px", position: 'absolute', top: '-20px', ':before': {
                                    content: "''", background: "#f7c35fb5", height: '20px', position: 'absolute', top: '1px', left: '5%', width: '100%', transform: 'skew(40deg,0deg)'
                                }
                            }}>
                                <Typography variant="h4" sx={{ fontFamily: "var(--font-outfit)", fontWeight: "600", color: "#04000B" }}>100</Typography>
                                <Typography variant="h4" sx={{ fontFamily: "var(--font-shadows_two)", color: "#04000B" }}>Organic</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', marginTop: '100px', flexDirection: 'column', gap: '15px', verticalAlign: 'center' }}>
                                <Box>
                                    <Typography variant="h3" sx={{
                                        typography: {
                                            xs: 'h4',
                                            sm: 'h3',
                                        }, fontFamily: 'var(-font-outfit)', fontWeight: '600', color: '#49A760'
                                    }}>Fresh & Natural</Typography>
                                    <Typography variant="h3" sx={{
                                        typography: {
                                            xs: 'h4',
                                            sm: 'h3',
                                        }, fontFamily: 'var(-font-outfit)', fontWeight: '300', color: '#04000B'
                                    }}>Produc in Our Store</Typography>
                                </Box>
                                <Typography variant="subtitle2" sx={{ fontFamily: 'var(-font-outfit)', fontWeight: '500', color: '#666666' }}>Drawings can followed improved out sociable not. Earnestly so do instantly pretended.
                                    See general few civilly amiable pleased account carried. Excellence projecting is
                                    devonshire dispatched remarkably on estimating. Side in so life past.</Typography>
                                <Button variant='Contained' sx={{
                                    background: '#1F4E3D', ':hover': {
                                        background: '#49A760',
                                    }, borderRadius: '6px', width: 'fit-content', padding: '17px 30px'
                                }}>
                                    <Typography variant="subtitle2" sx={{ fontFamily: 'var(-font-outfit)', fontWeight: '600', color: '#FFFFFF' }}>Purchase Now</Typography>
                                </Button>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}

export default FreshNatural
