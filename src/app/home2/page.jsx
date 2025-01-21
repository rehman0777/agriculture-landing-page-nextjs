'use client'
import '@/app/assets/style/globals.css';
import {Box,} from '@mui/material'
import HeroBanner from '@/app/component/pageTwoComponent/HeroBanner';
import LeaderInAgriculture from '@/app/component/pageTwoComponent/LeaderInAgriculture';
import WeOffer from '@/app/component/pageTwoComponent/WeOffer';
import BrandSlider from '@/app/component/pageTwoComponent/BrandSlider';
import ProjectSection from '@/app/component/pageTwoComponent/ProjectSection';
import AgricultureMarket from '@/app/component/pageTwoComponent/AgricultureMarket';
import OurFarmer from '@/app/component/pageTwoComponent/OurFarmer';
import NewsArticles from '@/app/component/pageTwoComponent/NewsArticles';
import ContactUs from '@/app/component/pageTwoComponent/ContactUs';
import Accordion from '@/app/component/pageTwoComponent/accordion';
import AgricultureVideoSection from '@/app/component/pageTwoComponent/AgricultureVideoSection';

const page = () => {
  return (
    <Box>
        <HeroBanner/>
        <LeaderInAgriculture/>
        <WeOffer/>
        <Accordion/>
        <ProjectSection/>
        <AgricultureMarket/>
        <OurFarmer/>
        <AgricultureVideoSection/>
        <NewsArticles/>
        <ContactUs/>
        <BrandSlider/>
    </Box>
  )
}

export default page
