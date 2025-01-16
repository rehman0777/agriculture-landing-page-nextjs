'use client'
import {Box, Typography} from '@mui/material'
import '@/app/assets/style/globals.css'
import BannerSection from '@/app/component/BannerSection'
import BestProduct from '@/app/component/BestProduct'
import FreshNatural from '@/app/component/FreshNatural'
import OrganicFreshFruit from '@/app/component/OrganicFreshFruit'
 

export default function Home() {
  return (
    <>
       <Box>
        <BannerSection/>
        <BestProduct/>
        <FreshNatural/>
        <OrganicFreshFruit/>
      </Box>
    </>
    
  );
}
