import { Box, Container, Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Item from "../Item";
import Image from "next/image";
import map from '@/app/assets/images/map.png';

const ContactUs = () => {
    return (
        <Box sx={{ pb: '80px' }}>
            <Container fixed>
                <Grid container spacing={0} sx={{ borderRadius: '6px', overflow: 'hidden' }}>
                    <Grid size={{ md: 5, xs:12 }} sx={{ marginBottom: {md:'-10px', xs: '10px'} }}>
                        <Item>
                            <Box sx={{width:'100%',height:{lg:'619px', md:'610px'} }}>
                                <Image src={map} style={{width:'100%', height:'100%'}} alt="map"></Image>
                            </Box>
                        </Item>
                    </Grid>
                    <Grid size={{ md: 7, xs:12 }} sx={{ marginBottom: '-10px' }}>
                        <Item>
                            <Box className="ContactFormBg" sx={{ padding: {lg:'60px 80px 130px 80px', md:'60px 60px 130px 60px', xs:'60px 40px 130px 40px'} }}>
                                <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 5 }}>
                                    <Box sx={{ textAlign: 'start' }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontFamily: "var(--font-covered)",
                                                color: "#EEC044",
                                            }}
                                        >
                                            Contact us
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
                                            Write a Message
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box component="form" noValidate autoComplete="off">
                                    <Grid
                                        container
                                        spacing={3}
                                        direction="row">
                                        <Grid size={{ md: 6, xs:12 }}>
                                            <Item>
                                                <TextField
                                                    id="name"
                                                    label="Name"
                                                    variant="filled"
                                                    sx={{
                                                        width: '100%',
                                                        "& .MuiInputBase-input": {
                                                            background: '#FFFFFF',
                                                            borderRadius: '6px',
                                                        },
                                                        "& .MuiFilledInput-root:before": {
                                                            borderBottom: '0px !important',
                                                        },
                                                        "& .MuiFilledInput-root:after": {
                                                            borderBottom: 'none',
                                                        },
                                                        '& .MuiInputLabel-root':{
                                                            color: '#878680',
                                                        },
                                                        "& .Mui-focused": {
                                                            color: '#878680 !important',
                                                        },
                                                    }}
                                                />

                                            </Item>
                                        </Grid>
                                        <Grid size={{ md: 6, xs:12 }}>
                                            <Item>
                                                <TextField id="email" label="Email Address" variant="filled" sx={{
                                                        width: '100%',
                                                        "& .MuiInputBase-input": {
                                                            background: '#FFFFFF',
                                                            borderRadius: '6px',
                                                        },
                                                        "& .MuiFilledInput-root:before": {
                                                            borderBottom: '0px !important',
                                                        },
                                                        "& .MuiFilledInput-root:after": {
                                                            borderBottom: 'none',
                                                        },
                                                        '& .MuiInputLabel-root':{
                                                            color: '#878680',
                                                        },
                                                        "& .Mui-focused": {
                                                            color: '#878680 !important',
                                                        },
                                                    }} />
                                            </Item>
                                        </Grid>
                                        <Grid size={12}>
                                            <Item>
                                                <TextField id="textare" rows={5} multiline placeholder="Write a Message" variant="filled" sx={{
                                                    width: '100%',
                                                    "& .MuiInputBase-input": {
                                                        background: '#FFFFFF',
                                                        borderRadius: '6px',
                                                    },
                                                    "& .MuiFilledInput-root":{
                                                        padding:'0px'
                                                    },
                                                    "& .MuiFilledInput-root:before": {
                                                        borderBottom: '0px !important',
                                                    },
                                                    "& .MuiFilledInput-root:after": {
                                                        borderBottom: 'none',
                                                    },
                                                    "& .Mui-focused": {
                                                        color: '#878680'
                                                    },
                                                    "& .MuiInputBase-inputMultiline":{
                                                        padding:'20px',
                                                    }
                                                }} />
                                            </Item>
                                        </Grid>
                                        <Grid size={12}>
                                            <Button sx={{
                                                background: '#4BAF47', width: 'fit-content', margin: '0px auto', padding: '15px 30px', borderRadius: '6px', ':hover': {
                                                    background: '#31782f'
                                                }
                                            }}>
                                                <Typography variant="subtitle2" sx={{ fontFamily: 'var(--font-manrope)', fontWeight: '700', color: '#FFFFFF', textTransform: 'capitalize' }}>Send a Message</Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ContactUs
