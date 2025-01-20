import { Box, Container, Typography,Divider,Stack } from '@mui/material';
import Item from '../Item'
import Link from 'next/link'

const BottomFooter = () => {
  return (
    <Box sx={{padding:'15px 0px', background:'#1F1E17'}}>
      <Container fixed>
        <Box sx={{display:'flex', alignItems:'center', gap:{sm:0 , xs:2}, flexDirection:{sm:'row', xs:'column'}, justifyContent:'space-between'}}>
          <Typography variant='subtitle2' sx={{color:'#A5A49A', fontFamily:'var(--font-outfit)', fontWeight:'500'}}>© All Copyright 2024 by Abdul Rehman</Typography>
          <Box>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical"sx={{color:'#A5A49A'}} flexItem />}
              spacing={2}
            >
              <Item>
                <Link href='#' className='footerBottomLink'  style={{color:'#A5A49A', fontFamily:'var(--font-outfit)', fontWeight:'500'}}>Terms of Use</Link>
              </Item>
              <Item><Link href='#' className='footerBottomLink' style={{color:'#A5A49A', fontFamily:'var(--font-outfit)', fontWeight:'500'}}>Privacy Policy</Link></Item>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default BottomFooter
