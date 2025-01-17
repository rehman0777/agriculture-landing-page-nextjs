import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Image from "next/image";
import FeatureProductsData from "./FeatureProductsData";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


const ProductGrid = ({ products }) => (
    <Grid container spacing={3}>
        {products.map((product, index) => (
            <Grid size={{md:6}} sx={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px', borderRadius: "6px"}} key={index}>
                <Box sx={{  display:'flex', padding:'50px 50px 50px 0px'}}>
                    <Box sx={{ position: 'relative', width: '162px', height: '167px', margin: '0px auto' }}>
                        {product.sale === '1' && (
                            <Typography
                                variant="caption"
                                sx={{
                                    background: 'linear-gradient(93deg, #49A760 50%, #FCC51B 100%)',
                                    position: 'absolute',
                                    top: '-10px',
                                    left: '-40px',
                                    fontFamily: 'var(--font-outfit)',
                                    fontWeight: '700',
                                    padding: '2px 10px',
                                    color: '#FFFFFF',
                                    textTransform: 'uppercase',
                                    borderRadius: '12px',
                                }}
                            >
                                Sale!
                            </Typography>
                        )}
                        <Image src={product.img} alt={product.name} />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: 'var(--font-outfit)',
                                    fontWeight: '600',
                                    color: '#666666',
                                    textTransform: 'uppercase'
                                }}
                            >
                                {product.cetagory.join(', ')}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: 'var(--font-outfit)',
                                    fontWeight: '600',
                                    color: '#04000B',
                                }}
                            >
                                {product.name}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                {product.sale === '1' && (
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            fontFamily: 'var(--font-outfit)',
                                            fontWeight: '700',
                                            color: '#666666',
                                            textDecoration: 'line-through',
                                        }}
                                    >
                                        ${product.salePrice}
                                    </Typography>
                                )}
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontFamily: 'var(--font-outfit)',
                                        fontWeight: '700',
                                        color: '#49A760',
                                    }}
                                >
                                    ${product.price}
                                </Typography>
                            </Box>
                        </Box>
                        <Button
                            variant="outlined"
                            sx={{
                                color: '#04000B',
                                borderColor: '#F7C35F',
                                display: 'flex',
                                alignItems: 'center',
                                ':hover': {
                                    background: '#F7C35F',
                                },
                                borderRadius: '30px',
                                width: 'fit-content',
                                padding: '10px 20px',
                            }}
                            startIcon={<ShoppingBagIcon />}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontFamily: 'var(--font-outfit)',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Add to cart
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Grid>
        ))}
    </Grid>
);

const TabFeatureProduct = () => {
    const [value, setValue] = useState("all");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getFilteredProducts = () => {
        if (value === "all") return FeatureProductsData;
        return FeatureProductsData.filter((product) =>
            product.cetagory.includes(value)
        );
    };

    const filteredProducts = getFilteredProducts().slice(0, 4);

    return (
        <Box sx={{ width: "100%", padding: "80px 0px" }}>
            <Container fixed>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
                    <Box sx={{ textAlign: "start" }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: "var(--font-shadows_two)",
                                color: "#49A760",
                            }}
                        >
                            Seasonal Fruits
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: "var(--font-outfit)",
                                fontWeight: "600",
                                color: "#04000B",
                            }}
                        >
                            Featured Products
                        </Typography>
                    </Box>
                    <Box sx={{width:'30%'}}>
                        <TabContext value={value} sx={{width:'100%'}}>
                            <TabList onChange={handleChange} sx={{'& .MuiTabs-indicator':{
                                backgroundColor: '#2ec025',
                                display:"none"
                            },display:'flex', justifyContent:'center'}}  aria-label="Product Tabs" >
                                <Tab label="All" value="all" indicatorcolor="" sx={{':focus-within':{
                                    background:'#49A760',
                                    color:'#FFFFFF',
                                },
                                border:'1px solid #A6B5AF',
                                fontFamily:'var(--font-outfit)',
                                fontWeight:'600',
                                color:'#04000B',
                                borderRadius:'6px',
                                padding:'15px 20px'
                                }} />
                                <Tab label="Fruits"  value="fruit" sx={{':focus-within':{
                                    background:'#49A760'
                                    ,color:'#FFFFFF'
                                },
                                border:'1px solid #A6B5AF',
                                fontFamily:'var(--font-outfit)',
                                fontWeight:'600',
                                color:'#04000B',
                                borderRadius:'6px',
                                padding:'15px 20px'
                                }} />
                                <Tab label="Vegetables"  value="vegetable" sx={{':focus-within':{
                                    background:'#49A760',
                                    color:'#FFFFFF'
                                },
                                border:'1px solid #A6B5AF',
                                fontFamily:'var(--font-outfit)',
                                fontWeight:'600',
                                color:'#04000B',
                                borderRadius:'6px',
                                padding:'15px 20px'
                                }}/>
                            </TabList>
                        </TabContext>
                    </Box>
                </Box>
                <TabContext value={value} >
                    <TabPanel value="all">
                        <ProductGrid products={filteredProducts} />
                    </TabPanel>
                    <TabPanel value="fruit">
                        <ProductGrid products={filteredProducts} />
                    </TabPanel>
                    <TabPanel value="vegetable">
                        <ProductGrid products={filteredProducts} />
                    </TabPanel>
                </TabContext>
            </Container>
        </Box>
    );
};

export default TabFeatureProduct;
