'use client'
import {Box} from '@mui/material';
import '@/assets/style/globals.css';
import BannerSection from '@/component/HomePageComponents/BannerSection';
import BestProduct from '@/component/HomePageComponents/BestProduct';
import FreshNatural from '@/component/HomePageComponents/FreshNatural';
import OrganicFreshFruit from '@/component/HomePageComponents/OrganicFreshFruit';
import FeatureProducts from '@/component/HomePageComponents/FeatureProducts';
import HealthyLifeSection from '@/component/HomePageComponents/HealthyLifeSection';
import TabFeatureProduct from '@/component/HomePageComponents/TabFeatureProduct';
import OurBlog from '@/component/HomePageComponents/OurBlog';
import TestimonialSlider from '@/component/HomePageComponents/Testimonials';
 

export default function Home() {
  return (
    <>
       <Box>
        <BannerSection/>
        <BestProduct/>
        <FreshNatural/>
        <OrganicFreshFruit/>
        <FeatureProducts/>
        <HealthyLifeSection/>
        <TabFeatureProduct/>
        <TestimonialSlider/>
        <OurBlog/>
      </Box>
    </>
    
  );
}
