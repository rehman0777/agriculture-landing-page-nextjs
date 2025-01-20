'use client'
import '@/app/assets/style/globals.css';
import {Box,} from '@mui/material'
import HeroBanner from '@/app/component/pageTwoComponent/HeroBanner';
import LeaderInAgriculture from '@/app/component/pageTwoComponent/LeaderInAgriculture';
import WeOffer from '@/app/component/pageTwoComponent/WeOffer';
import BrandSlider from '@/app/component/pageTwoComponent/BrandSlider';

const page = () => {
  return (
    <Box>
        <HeroBanner/>
        <LeaderInAgriculture/>
        <WeOffer/>
        <BrandSlider/>
    </Box>
  )
}

export default page
