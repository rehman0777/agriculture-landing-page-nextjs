import { Box, Container, Typography,Button } from '@mui/material'

const HeroBanner = () => {
  return (
    <Box className="pageTwoBanner" sx={{display:'flex', alignItems:'center'}}>
        <Container fixed>
          <Box sx={{width:{lg:'40%', md:'60%'}, margin:'0px auto', textAlign:'center', display:'flex', flexDirection:'column', gap:3}}>
                <Typography variant="h3" sx={{ typography: {
                                        lg: 'h3',
                                        xs: 'h4',
                                    },fontFamily:'var(--font-manrope) !important', fontWeight:'800 !important', letterSpacing:'-3px',color:'#FFFFFF',}}>Natural Products For Lovers of 
                    <Typography variant="h3" sx={{typography: {
                                        lg: 'h3',
                                        xs: 'h4',
                                    },fontFamily:'var(--font-manrope) !important', fontWeight:'800 !important', color:'#EEC044', letterSpacing:'-2px'}} component='span'> Healthy
                        </Typography> Organic Food
                        </Typography>
                <Button sx={{background:'#4BAF47',width:'fit-content', margin:'0px auto',  padding:'15px 30px', borderRadius:'6px', ':hover':{
                    background:'#31782f'
                }}}>
                    <Typography variant="subtitle2" sx={{fontFamily:'var(--font-manrope)', fontWeight:'700',color:'#FFFFFF', textTransform:'capitalize'}}>Discover More</Typography>
                </Button>
          </Box>
        </Container>
    </Box>
  )
}

export default HeroBanner
