'use client'
import '@/assets/style/globals.css';
import {Box,} from '@mui/material'
import HeroBanner from '@/component/pageTwoComponent/HeroBanner';
import LeaderInAgriculture from '@/component/pageTwoComponent/LeaderInAgriculture';
import WeOffer from '@/component/pageTwoComponent/WeOffer';
import BrandSlider from '@/component/pageTwoComponent/BrandSlider';
import ProjectSection from '@/component/pageTwoComponent/ProjectSection';
import AgricultureMarket from '@/component/pageTwoComponent/AgricultureMarket';
import OurFarmer from '@/component/pageTwoComponent/OurFarmer';
import NewsArticles from '@/component/pageTwoComponent/NewsArticles';
import ContactUs from '@/component/pageTwoComponent/ContactUs';
import Accordion from '@/component/pageTwoComponent/accordion';
import AgricultureVideoSection from '@/component/pageTwoComponent/AgricultureVideoSection';

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
