import { Box, Container, Typography, } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import Item from '../Constants/Item'
import service from '../../../public/images/service.png';
import service2 from '../../../public/images/service2.png';
import service3 from '../../../public/images/service3.png';
import serviceIcon from '../../../public/images/Icon.png';
import serviceIcon1 from '../../../public/images/Icon1.png';
import serviceIcon2 from '../../../public/images/Icon2.png';


const ServicesCardDate = [
    {
        id: 1,
        name: 'Agriculture Products',
        description: 'Lorem ipsum is simply free available. Aenean leo quam. Pellentesque semornare vestibulum.',
        img: service,
        icon: serviceIcon,
    },
    {
        id: 2,
        name: 'Organic Products',
        description: 'Lorem ipsum is simply free available. Aenean leo quam. Pellentesque semornare vestibulum.',
        img: service2,
        icon: serviceIcon1,
    },
    {
        id: 3,
        name: 'Dairy Products',
        description: 'Lorem ipsum is simply free available. Aenean leo quam. Pellentesque semornare vestibulum.',
        img: service3,
        icon: serviceIcon2,
    },
]

console.log('/assets/images/service.png')
const WeOffer = () => {
    return (
        <Box className="weOfferSection" sx={{ padding: '80px 0px', position: 'relative' }}>
            <Container fixed>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "var(--font-covered)",
                                color: "#EEC044",
                            }}
                        >
                            Our Services
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                typography: {
                                    lg: 'h4',
                                    xs: 'h5',
                                }, fontFamily: 'var(--font-manrope) !important', fontWeight: '800 !important',
                                color: "#1F1E17",
                            }}
                        >
                            What We Offer
                        </Typography>
                    </Box>
                </Box>
                <Grid container spacing={2}>
                    {ServicesCardDate.map((CardItem) => {
                        const { id, name, description, img, icon } = CardItem;
                        return (
                            <Grid size={{ md: 4 }} key={id}>
                                <Item>
                                    <Box sx={{borderRadius:'6px', overflow:'hidden'}}>
                                        <Box sx={{  height: '255px', position: 'relative' }}>
                                            <Image src={img} alt='service' style={{ width: '100%', }}></Image>
                                            <Box sx={{
                                                position: 'absolute',
                                                bottom: '-35px', right: '20px', background: '#C5CE38', borderRadius: '6px', padding: '5px'
                                            }}>
                                                <Image src={icon} alt='ServiceIcon'></Image>
                                            </Box>
                                        </Box>
                                        <Box sx={{ padding: '30px 30px', background: '#FFFFFF', display: 'flex', flexDirection: 'column', gap: 1 }}>
                                            <Typography variant="h6" sx={{ fontFamily: 'var(--font-manrope)', fontWeight: '800', color: '#1F1E17' }}>{name}</Typography>
                                            <Typography variant="subtitle" sx={{ fontFamily: 'var(--font-manrope)', fontWeight: '500', color: '#878680' }}>{description}</Typography>
                                        </Box>
                                    </Box>

                                </Item>
                            </Grid>
                        )

                    })}
                </Grid>
            </Container>
        </Box>
    )
}

export default WeOffer
