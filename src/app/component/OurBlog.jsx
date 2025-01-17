import { Box, Container, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material'
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import Link from 'next/link';
import BlogMianImage from '@/app/assets/images/1.jpg.png'
import Blog1 from '@/app/assets/images/Link3.jpg.png'
import Blog2 from '@/app/assets/images/Link2.jpg.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const OurBlog = () => {
    return (
        <Box sx={{ padding: '80px 0px' }}>
            <Container fixed>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "var(--font-shadows_two)",
                                color: "#49A760",
                            }}
                        >
                            Latest News
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: "var(--font-outfit)",
                                fontWeight: "600",
                                color: "#04000B",
                            }}
                        >
                            Check out our blog posts
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Grid container spacing={2}>
                        <Grid size={{ md: 6 }}>
                            <Box
                                sx={{
                                    width: "100%",
                                    position: "relative",
                                    overflow: "hidden",
                                    display: "flex",
                                    alignItems: "flex-end",
                                    "&:hover .overlay": {
                                        opacity: 1,
                                    },
                                    "&:hover .text-content": {
                                        opacity: 1,
                                        transform: "translateY(0px)",
                                    },
                                }}
                            >
                                <Image
                                    src={BlogMianImage}
                                    alt="BlogMianImage"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "6px",
                                        objectFit: "cover",
                                    }}
                                />
                                <Box
                                    className="overlay"
                                    sx={{
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "6px",
                                        background: "linear-gradient(180deg, #1a1c21 0%, rgba(0, 0, 0, 0) 100%)",
                                        zIndex: 2,
                                        transition: "0.5s",
                                        opacity: 0,
                                    }}
                                />
                                <Box
                                    className="text-content"
                                    sx={{
                                        position: "absolute",
                                        bottom: "100px",
                                        left: "20px",
                                        zIndex: 3,
                                        color: "#FFFFFF",
                                        opacity: 0,
                                        transform: "translateY(260px)",
                                        transition: "0.5s",
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '20px'
                                    }}
                                >
                                    <Typography variant="h4" sx={{ fontFamily: ' var(--font-outfit', fontWeight: '600' }}>Miscovery incommode earnestly
                                        commanded if.</Typography>
                                    <Typography variant='subtitle2' sx={{ fontFamily: ' var(--font-outfit', fontWeight: '400' }} >Seeing rather her you not esteem men settle genius excuse. Deal say over
                                        you age from. Comparison new ham melancholy son themselves.</Typography>
                                    <Link href='' style={{ fontFamily: ' var(--font-outfit', textTransform: 'uppercase', fontWeight: '600' }} className='linkArrow'>Continue Reading <ArrowForwardIcon className='linkArrowIcon' /></Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ md: 6 }}>
                            <Box>
                                <Grid container spacing={2}>
                                    <Grid size={{ md: 6 }}>
                                        <Box sx={{width:'100%'}}>
                                            <Box sx={{position:'relative'}}>
                                            <Image
                                                style={{width:'100%', overflow:'hidden',  borderRadius:'6px'}}
                                                src={Blog1}
                                                alt='blogImg'
                                            />
                                            <Box sx={{background:'#F7C35F', borderTopRightRadius:'6px',  position:'absolute', bottom:'4px', left:'0', padding:'20px'}}>
                                                <Typography variant="h4" sx={{fontFamily:'var(--font-outline)', fontWeight:'600'}}>26</Typography>
                                            </Box>
                                            </Box>
                                            <Box sx={{position:'relative'}}>
                                                <Box sx={{background:'#49A760', borderTopRightRadius:'6px', borderRadius:'0px 0px 6px 6px', position:'relative', top:'-4px', left:'0', width:'fit-content', padding:'5px 10px'}}>
                                                    <Typography variant='caption' sx={{fontFamily:'var(--font-outline)', color:'#FFFFFF'}}>Aug, 2023</Typography>
                                                </Box>
                                                <Box>
                                                <Box sx={{display:'flex', mt:2, alignItems:'center'}}>
                                                    <Typography variant='subtitle2' sx={{ color:'#666666', fontFamily:'var(--font-outline)',}}>Md Sohag</Typography>
                                                    <Typography variant='subtitle2' sx={{':before':{
                                                        content:"''",
                                                        background:"#04000B",
                                                        width:'5px',
                                                        height:'5px',
                                                        borderRadius:'50px',
                                                        display:'flex',
                                                        margin:'0px 10px'
                                                    }, display:'flex', color:'#666666', fontFamily:'var(--font-outline)', alignItems:'center'}}>25 April, 2023</Typography>
                                                </Box>
                                                <Typography variant="h6" sx={{ fontFamily:'var(--font-outline)', color:'#04000B',fontWeight:'600', marginBottom:"5px"}}>
                                                Expression acceptance
                                                imprudence particular
                                                </Typography>
                                                <Link href=''className='linkArrow'> 
                                                <Typography variant='subtitle2' sx={{ fontFamily: ' var(--font-outfit', fontWeight:'600',  textTransform: 'uppercase', }}>Continue Reading</Typography> 
                                                <ArrowForwardIcon className='linkArrowIcon' />
                                                </Link>
                                            </Box>
                                            </Box>
                                            
                                        </Box>
                                    </Grid>
                                    <Grid size={{ md: 6 }}> </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default OurBlog
