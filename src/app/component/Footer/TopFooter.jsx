import { Box, Container, Typography, IconButton, Button, TextField, InputAdornment, Stack, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Item from '../Item'
import Image from 'next/image'
import FooterLogo from '@/app/assets/images/logo.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import Link from '@mui/material/Link';

const footerMenuItems = [
    "About",
    "Services",
    "Our Projects",
    "Meet the Farmers",
    "Latest News",
    "Contact",
];
const contactDetails = [
    {
        icon: (
            <PhoneIcon
                sx={{
                    color: '#EEC044',
                }}
            />
        ),
        text: (
            <Link
                href="tel:6668880000"
                sx={{
                    color: '#A5A49A',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: '500',
                    ':hover': {
                        color: '#FFFFFF',
                    },
                }}
            >
                666 888 0000
            </Link>
        ),
    },
    {
        icon: (
            <EmailIcon
                sx={{
                    color: '#EEC044',
                }}
            />
        ),
        text: (
            <Link
                href="mailto:needhelp@company.com?subject=Abdul Rehman"
                sx={{
                    color: '#A5A49A',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: '500',
                    ':hover': {
                        color: '#FFFFFF',
                    },
                }}
            >
                needhelp@company.com
            </Link>
        ),
    },
    {
        icon: (
            <LocationOnIcon
                sx={{
                    color: '#EEC044',
                }}
            />
        ),
        text: "80 Brooklyn Golden Street Line, New York, USA",
    },
];

const TopFooter = () => {

    return (
        <Box sx={{ background: '#24231D', py: '80px' }}>
            <Container fixed>
                <Grid container spacing={{lg:2, xs:5}}>
                    <Grid size={{lg:3, sm: 6}} sx={{width:'100%'}}>
                        <Item sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Image src={FooterLogo} alt='FooterLogo'></Image>
                            <Typography variant='subtitle2' sx={{
                                color: '#A5A49A', fontFamily: 'var(--font-outfit)', fontWeight: '500'
                            }}>There are many variations of passages of lorem ipsum available, but the majority suffered.
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <Item >
                                    <IconButton aria-label="Twiiter" sx={{
                                        padding: '10px', display: 'flex', alignItems: 'center', ':hover': {
                                            background: '#1F1E17',
                                        }, borderRadius: '50px', color: "#FFFFFF"
                                    }} size="small">
                                        <TwitterIcon sx={{ color: '#FFFFFF' }} />
                                    </IconButton>
                                </Item>
                                <Item>
                                    <IconButton aria-label="Facebook" sx={{
                                        padding: '10px', display: 'flex', alignItems: 'center', ':hover': {
                                            background: '#1F1E17',
                                        }, borderRadius: '50px', color: "#FFFFFF"
                                    }} size="small">
                                        <FacebookIcon sx={{ color: '#FFFFFF' }} />
                                    </IconButton>
                                </Item>
                                <Item>
                                    <IconButton aria-label="Pinterest" sx={{
                                        padding: '10px', display: 'flex', alignItems: 'center', ':hover': {
                                            background: '#1F1E17',
                                        }, borderRadius: '50px', color: "#FFFFFF"
                                    }} size="small">
                                        <PinterestIcon sx={{ color: '#FFFFFF' }} />
                                    </IconButton>
                                </Item>
                                <Item>
                                    <IconButton aria-label="Instagram" sx={{
                                        padding: '10px', display: 'flex', alignItems: 'center', ':hover': {
                                            background: '#1F1E17',
                                        }, borderRadius: '50px', color: "#FFFFFF"
                                    }} size="small">
                                        <InstagramIcon sx={{ color: '#FFFFFF' }} />
                                    </IconButton>
                                </Item>
                            </Stack>
                        </Item>
                    </Grid>
                    <Grid size={{lg:3, sm: 6 }} sx={{width:'100%'}}>
                        <Item>
                            <Typography variant='h6' sx={{ fontFamily: 'var(--font-outfit)', fontWeight: '700', color: '#FFFFFF', pb: '5px', mb: 3, borderBottom: '2px solid #4BAF47', width: 'fit-content' }}>Explore</Typography>
                            <List
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    padding: 0,
                                }}
                            >
                                {footerMenuItems.map((item, index) => (
                                    <ListItem key={index} disablePadding>
                                        <ListItemIcon sx={{
                                            minWidth: '40px',

                                        }}>
                                            <EnergySavingsLeafIcon sx={{ color: '#A5A49A' }} />
                                        </ListItemIcon>
                                        <ListItemText primary={item} sx={{
                                            color: '#A5A49A', cursor: 'pointer', ':hover': {
                                                color: '#FFFFFF'
                                            }, fontFamily: 'var(--font-outfit)', fontWeight: '500'
                                        }} />
                                    </ListItem>
                                ))}
                            </List>
                        </Item>
                    </Grid>
                    <Grid size={{lg:3, sm: 6}} sx={{width:'100%'}}>
                        <Typography variant='h6' sx={{ fontFamily: 'var(--font-outfit)', fontWeight: '700', color: '#FFFFFF', pb: '5px', mb: 3, borderBottom: '2px solid #4BAF47', width: 'fit-content' }}>News</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <Box>
                                <Typography variant='subtitle2' sx={{ fontFamily: 'var(--font-outfit)', fontWeight: '700', color: '#ffffff' }}>Bringing Food Production
                                    Back To Cities</Typography>
                                <Typography variant='subtitle2' sx={{ fontFamily: 'var(--font-outfit)', fontWeight: '400', color: '#EEC044' }}>July 5, 2022</Typography>
                            </Box>
                            <Box>
                                <Typography variant='subtitle2' sx={{ fontFamily: 'var(--font-outfit)', fontWeight: '700', color: '#ffffff' }}>The Future of Farming,
                                    Smart Irrigation Solutions</Typography>
                                <Typography variant='subtitle2' sx={{ fontFamily: 'var(--font-outfit)', fontWeight: '400', color: '#EEC044' }}>July 5, 2022</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{lg:3, sm: 6}} sx={{width:'100%'}}>
                        <Item>
                            <Typography variant='h6' sx={{ fontFamily: 'var(--font-outfit)', fontWeight: '700', color: '#FFFFFF', pb: '5px', mb: 3, borderBottom: '2px solid #4BAF47', width: 'fit-content' }}>Contact</Typography>
                            <List
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    padding: 0,
                                }}
                            >
                                {contactDetails.map((detail, index) => (
                                    <ListItem key={index} disablePadding>
                                        <ListItemIcon
                                            sx={{
                                                minWidth: '40px',
                                            }}
                                        >
                                            {detail.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={detail.text}
                                            sx={{
                                                color: '#A5A49A',
                                                cursor: detail.text.type === 'a' ? 'pointer' : 'default',
                                                fontFamily: 'var(--font-outfit)',
                                                fontWeight: '500',
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>;
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: 3,
                                }}
                            >
                                <TextField
                                    placeholder="Your Email Address"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "12px",
                                            paddingRight: 0,
                                            backgroundColor: "#FFFFFF",
                                            border: "none",
                                            boxShadow: "none",
                                        },
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            border: "none",
                                        },
                                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                            border: "none",
                                        },
                                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            border: "none",
                                        },
                                        "& input": {
                                            padding: "10px 20px",
                                            border: "none",
                                            outline: "none",
                                            boxShadow: "none",
                                        },
                                        width: "100%",
                                        maxWidth: "400px",
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Button
                                                    sx={{
                                                        borderRadius: "0 12px 12px 0",
                                                        height: "100%",
                                                        backgroundColor: "#4BAF47",
                                                        color: "#FFFFFF",
                                                        padding: "10px 16px",
                                                        minWidth: "unset",
                                                        border: "none",
                                                        outline: "none",
                                                        boxShadow: "none",
                                                        "&:hover": {
                                                            backgroundColor: "#3E9B3D",
                                                            border: "none",
                                                            boxShadow: "none",
                                                            outline: "none",
                                                        },
                                                        "&:focus": {
                                                            border: "none",
                                                            boxShadow: "none",
                                                            outline: "none",
                                                        },
                                                    }}
                                                >
                                                    <SendIcon
                                                        sx={{
                                                            transform: "rotate(-45deg)",
                                                        }}
                                                    />
                                                </Button>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>

                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default TopFooter
