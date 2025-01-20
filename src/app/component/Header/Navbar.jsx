'use client'
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link'
import { Badge, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CloseIcon from '@mui/icons-material/Close';



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        background: '#F7C35F'
    },
}));


const pages = ['home', 'home2', 'projects', 'services', 'blog', 'shop'];

function Navbar() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
   

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

  

    const DrawerList = (
        <Box sx={{ width: 320, padding: '20px' }} role="presentation" onClick={toggleDrawer(false)}>
            <Box sx={{display:'flex'}}>
                <CloseIcon sx={{ml:'auto', cursor:'pointer'}} onClick={toggleDrawer(true)} />
            </Box>
          <List sx={{marginTop:'30px'}}>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },alignItems:'flex-start', flexDirection:'column', justifyContent: 'center', gap: '10px' }}>
                        {pages.map((page) => (
                            <Link
                                key={page}
                                href={'/'}
                                onClick={handleCloseNavMenu}
                                style={{ my: 0, color: '#232323', display: 'block', textTransform: 'capitalize' }}
                            >
                                <Typography sx={{
                                    textAlign: 'center', fontFamily: 'var(--font-outfit)', fontWeight: '600', ':hover': {
                                        color: '#F7C35F'
                                    }
                                }}>{page}</Typography>
                            </Link>
                        ))}
                    </Box>
          </List>
        </Box>
      );

    return (
        <AppBar position="static" sx={{background:'#ffffff'}}>
            <Container fixed>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <Avatar sx={{ overflow: 'visible', background: '#CCCCCC', width:'45px', height:"42px" }}>
                    <Button  onClick={toggleDrawer(true)}  sx={{display:'flex', flexDirection:'column', gap:'4px', alignItems:'flex-start', minWidth:'fit-content'}}>
                        <Box  sx={{background: '#232323', height: '2px', width:'16px'}}></Box>
                        <Box sx={{background: '#232323', height: '2px', width:'28px'}}></Box>
                        <Box sx={{background: '#232323', height: '2px', width:'22px'}}></Box>
                    </Button>
                            </Avatar>
                        
                        <Drawer open={open} onClose={toggleDrawer(false)}>
                            {DrawerList}
                        </Drawer>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: {
                        lg:'center',
                        md:'flex-start'
                    }, gap: '30px' }}>
                        {pages.map((page) => (
                            <Link
                                key={page}
                                href={page === "home" ? "/" : `/${page}`}
                                onClick={handleCloseNavMenu}
                                style={{ my: 2, color: '#232323', display: 'block', textTransform: 'capitalize' }}
                            >
                                <Typography sx={{
                                    textAlign: 'center', fontFamily: 'var(--font-outfit)', fontWeight: '600', ':hover': {
                                        color: '#F7C35F'
                                    }
                                }}>{page}</Typography>
                            </Link>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', }} gap={2}>
                        <Box>
                            <Avatar sx={{ overflow: 'visible', background: '#CFE6FF', cursor:'pointer' }}>
                                <StyledBadge badgeContent={4}>
                                    <LocalGroceryStoreIcon sx={{ color: '#232323' }} />
                                </StyledBadge>
                            </Avatar>
                        </Box>
                        <Button variant="outlined" sx={{
                            borderRadius: '20px', padding: '5px 30px', borderColor: '#F7C35F', ':hover': {
                                backgroundColor: '#F7C35F',
                            },
                        }}>
                            <Typography variant="subtitle1" sx={{ color: '#04000B', fontFamily: 'var(--font-outfit)', fontWeight: '600', textTransform: 'capitalize' }}>Register</Typography>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;


