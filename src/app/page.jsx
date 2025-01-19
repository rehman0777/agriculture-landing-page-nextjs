'use client'
import {Box} from '@mui/material';
import '@/app/assets/style/globals.css';
import BannerSection from '@/app/component/BannerSection';
import BestProduct from '@/app/component/BestProduct';
import FreshNatural from '@/app/component/FreshNatural';
import OrganicFreshFruit from '@/app/component/OrganicFreshFruit';
import FeatureProducts from '@/app/component/FeatureProducts';
import HealthyLifeSection from '@/app/component/HealthyLifeSection';
import TabFeatureProduct from '@/app/component/TabFeatureProduct';
import OurBlog from '@/app/component/OurBlog';
import TestimonialSlider from '@/app/component/Testimonials';
 

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
