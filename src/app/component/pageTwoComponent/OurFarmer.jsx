import { Box, Container, Typography, } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Item from "../Item";
import Image from "next/image";
import Farmer1 from '@/app/assets/images/OurFarmers.png';
import Farmer2 from '@/app/assets/images/OurFarmers1.png';
import Farmer3 from '@/app/assets/images/OurFarmers2.png';
import ShareIcon from '@mui/icons-material/Share';


const OurFarmers = [
    {
        id: 1,
        img: Farmer3,
        name:'Kevin Smith',
        caption: 'Farmer'
    },
    {
        id: 2,
        img: Farmer2,
        name:'Jessica Brown',
        caption: 'Farmer'
    },
    {
        id: 3,
        img: Farmer1,
        name:'David Martin',
        caption: 'Farmer'
    },
]

const OurFarmer = () => {
  return (
    <Box sx={{padding:'80px 0px'}}>
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
                            Team Members
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
                            Meet Our Farmers
                        </Typography>
                    </Box>
            </Box>
            <Grid container spacing={3} sx={{ justifyContent:'center', gap:{md:0, sm:3}}}>
                {OurFarmers.map((farmer)=>{
                    return(
                        <Grid size={{md:4, sm:6}} sx={{marginBottom:{md:0, xs:'50px'}}} key={farmer.id}>
                    <Item>
                        <Box sx={{position:'relative', width:'87%'}}>
                            <Image src={farmer.img} alt="Farmer" style={{borderRadius:'6px',width:'100%'}}></Image>
                            <Box sx={{textAlign:'end', background:'#FFFFFF',borderRadius:'6px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', padding:'22px 60px', position:'absolute', bottom:'-40px', right:'-45px'}}>
                                <Typography variant="subtitle2" sx={{ fontFamily: 'var(--font-manrope)', fontWeight: '800', color: '#1F1E17' }} >{farmer.name}</Typography>
                                <Typography variant="caption" sx={{ fontFamily: 'var(--font-manrope)', fontWeight: '500', color: '#878680' }}>{farmer.caption}</Typography>
                                <Box sx={{background:'#4BAF47', borderRadius:'6px', position:'absolute', top:'30px', left:'-10px', width:30, height:30, display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <ShareIcon sx={{color:'#FFFFFF'}}/>
                                </Box>
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

export default OurFarmer
