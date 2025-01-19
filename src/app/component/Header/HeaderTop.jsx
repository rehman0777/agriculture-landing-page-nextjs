import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import { Box, Link } from '@mui/material/'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import symbolImage from '@/app/assets/images/Symbol.png';
import Logo from '@/app/assets/images/logo.png'



const HeaderTop = () => {
    return (
        <Box sx={{ background: '#1F4E3D', }}>
            <Container fixed sx={{ justifyContent: 'center', textAlign:{sm:'left', xs:'center'}, display: 'flex' }}>
                <Stack
                    direction={{sm:"row", xs:'column'}}
                    divider={<Divider orientation={{sm:"vertical", xs:'horizontal'}} flexItem sx={{background:'#FFFFFF'}} />}
                    justifyContent={'space-between'}
                    width={'100%'}
                >
                    <Box py={2}>
                        <Typography variant="subtitle2" color="white" fontFamily={`var(--font-outfit)`}>Call Anytime</Typography>
                        <Typography variant="subtitle2" color="white">
                            <Link href='' variant='subtitle2' fontFamily={`var(--font-outfit)`} sx={{ color: '#ffffff', textDecoration: 'none', fontWeight:'600', ':hover':{
                                color:'#F7C35F'
                            }}}>+4733378901</Link>
                        </Typography>
                    </Box>
                    <Box py={2}>
                        <Image src={Logo} priority={true} alt='Web Logo'></Image>
                    </Box>

                    <Box py={2} display={'flex'} gap={1} sx={{justifyContent:'center'}}>
                        <Image src={symbolImage} priority={true} width={45} height={40} alt="Picture of the author"></Image>
                        <Box>
                            <Typography variant="subtitle2" color="white" fontFamily={`var(--font-outfit)`}>Write Email</Typography>
                            <Typography variant="subtitle2" color="white">
                                <Link href="mailto:info@agrul.com?subject=Abdul Rehman" fontFamily={`var(--font-outfit)`} variant='subtitle2' sx={{ color: '#ffffff', textDecoration: 'none', fontWeight:'600' ,':hover':{
                                color:'#F7C35F'
                            }}}>info@agrul.com</Link>
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default HeaderTop



