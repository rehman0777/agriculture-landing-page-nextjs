import React, { useState } from "react";
import { Box, Container, Typography, useTheme, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Image from "next/image";
import FeatureProductsData from "./FeatureProductsData";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const ProductGrid = ({ products }) => (
  <Grid
    container
    spacing={3}
    sx={{
      justifyContent: "space-between",
    }}
  >
    {products.map((product, index) => (
      <Grid
        size={{ md: 6 }}
        sx={{
          width: {
            xs: '70%',
            sm: '100%',
            md: '48%'
          },
          '@media (max-width: 425px)': {
            width: '85%',
          },
          '@media (max-width: 375px)': {
            width: '100%',
          },
          margin: '0px auto', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px 3px, rgba(0, 0, 0, 0.05) 0px 4px 6px 2px', borderRadius: "6px"
        }}
        key={index}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: { sm: "flex-start", xs: "center" },
            flexDirection: { sm: "row", xs: "column" },
            position: 'relative',
            padding: "50px 20px 50px 20px",
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          {product.sale === "1" && (
            <Typography
              variant="caption"
              sx={{
                background: "linear-gradient(93deg, #49A760 50%, #FCC51B 100%)",
                position: "absolute",
                top: "10px",
                left: "20px",
                fontFamily: "var(--font-outfit)",
                fontWeight: "700",
                padding: "2px 10px",
                color: "#FFFFFF",
                textTransform: "uppercase",
                borderRadius: "12px",
              }}
            >
              Sale!
            </Typography>
          )}
          <Box sx={{ position: "relative", width: "50%", height: "167px", margin: "0px auto" }}>

            <Image src={product.img} style={{ display: 'flex', margin: '0px auto' }} alt={product.name} />
          </Box>

          <Box sx={{ display: "flex", margin: '0px auto', width: { md: '50%', sm: '40%' }, textAlign: { sm: "start", xs: "center" }, flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: "600",
                  color: "#666666",
                  textTransform: "uppercase",
                }}
              >
                {product.cetagory.join(", ")}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'var(--font-outfit) !important',
                  fontWeight: '600 !important',
                  color: '#04000B',
                  typography: { xs: 'subtitle1', md: 'h6' },
                }}
              >
                {product.name}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: { sm: "flex-start", xs: "center" }, gap: "10px" }}>
                {product.sale === "1" && (
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: "var(--font-outfit)",
                      fontWeight: "700",
                      color: "#666666",
                      textDecoration: "line-through",
                    }}
                  >
                    ${product.salePrice}
                  </Typography>
                )}
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: "700",
                    color: "#49A760",
                  }}
                >
                  ${product.price}
                </Typography>
              </Box>
            </Box>
            <Button
              variant="outlined"
              sx={{
                color: "#04000B",
                borderColor: "#F7C35F",
                display: "flex",
                alignItems: "center",
                ":hover": {
                  background: "#F7C35F",
                },
                borderRadius: "30px",
                width: "fit-content",
                padding: "10px 20px",
              }}
              startIcon={<ShoppingBagIcon />}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: "700",
                  textTransform: "uppercase",
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
  const theme = useTheme();
  const [value, setValue] = useState("all");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getFilteredProducts = () => {
    if (value === "all") return FeatureProductsData;
    return FeatureProductsData.filter((product) => product.cetagory.includes(value));
  };

  const filteredProducts = getFilteredProducts().slice(0, 4);

  return (
    <Box sx={{ width: "100%", padding: "80px 0px" }}>
      <Container fixed>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 4,
            gap: { md: 0, xs: 4 },
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Box sx={{ textAlign: { md: "start", xs: "center" } }}>
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
              sx={{typography: {
                lg: 'h4',
                xs: 'h5',
            }, fontFamily: 'var(--font-outfit) !important', fontWeight: '600 !important',
                color: "#04000B",
              }}
            >
              Featured Products
            </Typography>
          </Box>
          <Box
            sx={{
              width: { lg: "30%", md: "40%", sm: "60%", xs: "80%" },
              margin: { md: "0", xs: "0px auto" },

              [theme.breakpoints.down(426)]: {
                width: "100%",
              },
            }}
          >
            <TabContext value={value} sx={{ width: "100%" }}>
              <TabList
                onChange={handleChange}
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#2ec025",
                    display: "none",
                  },
                  "& .Mui-selected": {
                    color: "#FFFFFF !important",
                    background: "#49A760",
                  },
                  display: "flex",
                  color: "#04000B",
                  justifyContent: "center",
                }}
                aria-label="Product Tabs"
              >
                <Tab
                  label="All"
                  value="all"
                  indicatorcolor=""
                  sx={{
                    ":focus-within": {
                      background: "#49A760",
                      color: "#FFFFFF",
                    },
                    border: "1px solid #A6B5AF",
                    fontFamily: "var(--font-outfit)",
                    fontWeight: "600",
                    color: "#04000B",
                    borderRadius: "6px",
                    padding: "15px 0px",
                    [theme.breakpoints.down(426)]: {
                      minWidth: '68px'
                    },
                  }}
                />
                <Tab
                  label="Fruits"
                  value="fruit"
                  sx={{
                    ":focus-within": {
                      background: "#49A760",
                      color: "#FFFFFF",
                    },
                    border: "1px solid #A6B5AF",
                    fontFamily: "var(--font-outfit)",
                    fontWeight: "600",
                    color: "#04000B",
                    borderRadius: "6px",
                    padding: "15px 10px",

                  }}
                />
                <Tab
                  label="Vegetables"
                  value="vegetable"
                  sx={{
                    ":focus-within": {
                      background: "#49A760",
                      color: "#FFFFFF",
                    },
                    border: "1px solid #A6B5AF",
                    fontFamily: "var(--font-outfit)",
                    fontWeight: "600",
                    color: "#04000B",
                    borderRadius: "6px",
                    padding: "15px 10px",
                  }}
                />
              </TabList>
            </TabContext>
          </Box>
        </Box>
        <TabContext value={value}>
          <TabPanel value="all" sx={{ padding: "0px" }}>
            <ProductGrid products={filteredProducts} />
          </TabPanel>
          <TabPanel value="fruit" sx={{ padding: "0px" }}>
            <ProductGrid products={filteredProducts} />
          </TabPanel>
          <TabPanel value="vegetable" sx={{ padding: "0px" }}>
            <ProductGrid products={filteredProducts} />
          </TabPanel>
        </TabContext>
      </Container>
    </Box>
  );
};

export default TabFeatureProduct;
