import { Box, Container, Typography, useTheme, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material'
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import Link from 'next/link';
import BlogMianImage from '@/app/assets/images/1.jpg.png'
import Blog1 from '@/app/assets/images/Link3.jpg.png'
import Blog2 from '@/app/assets/images/Link2.jpg.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const blogData = [
    {
        blogName: 'Expression acceptance imprudence particular',
        authorName: 'Md Sohag',
        blogImg: Blog1,
        postDate: {
            day: '26',
            month: 'april',
            year: '2023'
        },
    },
    {
        blogName: 'Considered imprudence of technical friendship.',
        authorName: 'Md Sohag',
        blogImg: Blog2,
        postDate: {
            day: '25',
            month: 'Dec',
            year: '2023'
        },
    },
]


const OurBlog = () => {
    const theme = useTheme();
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
                        <Grid size={{ lg: 6 }} sx={{width:'100%'}}>
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
                        <Grid size={{ lg: 6 }}>
                            <Box>
                                <Grid container spacing={2}>
                                    {blogData.map((blogItem, index) => {
                                        return (
                                            <Grid size={{ md: 6 }} key={index} sx={{width:"100%"}}>
                                                <Box sx={{ width: '100%' }}>
                                                    <Box sx={{ position: 'relative', width: '100%' }}>
                                                        <Image
                                                            style={{ width: '100%', overflow: 'hidden', borderRadius: '6px' }}
                                                            src={blogItem.blogImg}
                                                            alt='blogImg'
                                                        />
                                                        <Box sx={{ position: 'absolute', width: {md:'35%', xs:'20%'},[theme.breakpoints.down(426)]: {
                        width: '30%'
                      }, bottom: '-32px', left: '0', }}>
                                                            <Box sx={{ background: '#F7C35F', textAlign:'center', width: '100%', borderTopRightRadius: '6px', padding: '20px' }}>
                                                                <Typography variant="h4" sx={{ fontFamily: 'var(--font-outline)', fontWeight: '600' }}>{blogItem.postDate.day}</Typography>
                                                            </Box>
                                                            <Box sx={{ background: '#49A760', width: '100%', borderTopRightRadius: '6px', borderRadius: '0px 0px 6px 6px', position: 'relative', top: '-4px', left: '0', textAlign:'center', padding: '5px 10px' }}>
                                                                <Typography variant='caption' sx={{ fontFamily: 'var(--font-outline)', color: '#FFFFFF' }}>{blogItem.postDate.month}, {blogItem.postDate.year}</Typography>
                                                            </Box>
                                                        </Box>

                                                    </Box>
                                                    <Box sx={{ position: 'relative', mt: 5 }}>

                                                        <Box sx={{ display: 'flex', mt: 2, alignItems: 'center' }}>
                                                            <Typography variant='subtitle2' sx={{ color: '#666666', fontFamily: 'var(--font-outline)', }}>{blogItem.authorName}</Typography>
                                                            <Typography variant='subtitle2' sx={{
                                                                ':before': {
                                                                    content: "''",
                                                                    background: "#04000B",
                                                                    width: '5px',
                                                                    height: '5px',
                                                                    borderRadius: '50px',
                                                                    display: 'flex',
                                                                    margin: '0px 10px'
                                                                }, display: 'flex', color: '#666666', fontFamily: 'var(--font-outline)', alignItems: 'center'
                                                            }}>
                                                                {`${blogItem.postDate.day} ${blogItem.postDate.month}, ${blogItem.postDate.year}`}
                                                            </Typography>
                                                        </Box>
                                                        <Typography variant="h6" sx={{ fontFamily: 'var(--font-outline)', color: '#04000B', fontWeight: '600', marginBottom: "5px" }}>
                                                            {blogItem.blogName}
                                                        </Typography>
                                                        <Link href='' className='linkArrow' style={{ color: '#04000B', textTransform: 'uppercase', }}>
                                                            Continue Reading
                                                            <ArrowForwardIcon className='linkArrowIcon' />
                                                        </Link>
                                                    </Box>

                                                </Box>
                                            </Grid>
                                        )
                                    })}
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
