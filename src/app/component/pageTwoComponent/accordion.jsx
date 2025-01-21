import React, { useState } from 'react'
import { Box, Container, Typography, } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Item from "../Item";
import Image from "next/image";
import CallUs from '@/app/assets/images/callUs.png';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
    accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
        transform: 'rotate(90deg)',
    },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const accordion = () => {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <Box className='accordionSection' sx={{ padding: '80px 0px', backgroundSize: { md: 'contain', xs: 'cover' } }}>
            <Container fixed>
                <Grid container spacing={5} sx={{ justifyContent: 'center' }}>
                    <Grid size={{ md: 5 }} >
                        <Item>
                            <Box sx={{ position: 'relative', width: "100%" }}>
                                <Image src={CallUs} style={{ width: '100%' }} height={500} alt="Planting"></Image>
                                <Box sx={{
                                    textAlign: 'center', background: '#EEC044', width: 'fit-content', position: 'absolute', bottom: '5px', left: {
                                        lg: '25%', xs: '28%', '@media (max-width: 425px)': {
                                            left: '22%',
                                        },
                                        '@media (max-width: 375px)': {
                                            left: '18%',
                                        },
                                    },
                                    padding: '20px 35px', display: 'flex', flexDirection: 'column', borderRadius: '20px 20px 0px 0px',
                                }}>
                                    <Typography variant="subtitle2" sx={{
                                        fontFamily: "var(--font-covered)",
                                        color: "#FFFFFF",
                                    }} >Call us anytime</Typography>
                                    <Typography variant="h6" sx={{
                                        fontFamily: 'var(--font-manrope) !important', fontWeight: '800 !important',
                                        color: "#FFFFFF",
                                    }}>666 888 0000</Typography>
                                </Box>

                            </Box>
                        </Item>
                    </Grid>
                    <Grid size={{ md: 7 }}>
                        <Item>
                            <Box>
                                <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 5 }}>
                                    <Box sx={{ textAlign: "start" }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontFamily: "var(--font-covered)",
                                                color: "#EEC044",
                                            }}
                                        >
                                            Frequently Asked Questions
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                typography: {
                                                    lg: 'h4',
                                                    xs: 'h5',
                                                }, fontFamily: 'var(--font-manrope) !important', fontWeight: '800 !important',
                                                color: "#1F1E17",
                                            }}
                                        >
                                            You've Any Questions
                                        </Typography>
                                    </Box>
                                </Box>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{
                                    '& .MuiAccordion-root': {
                                        border: '0px !important'
                                    }, border: 'none !important', marginBottom: "10px"
                                }}>
                                    <AccordionSummary aria-controls="panel1d-content" sx={{
                                        flexDirection: 'row', padding: '5px 10px', border: 'none', background: '#F8F7F0',
                                        borderRadius: '6px',
                                        "& .MuiSvgIcon-root": {
                                            fontSize: '52px',
                                            background: '#C5CE38',
                                            borderRadius: '6px',
                                            color: '#ffffff',
                                        },
                                    }} id="panel1d-header">
                                        <Typography component="span" variant='subtitle1' sx={{
                                            fontFamily: 'var(--font-manrope) ', fontWeight: '800',
                                            color: "#1F1E17",
                                        }}>World’s hottest destinations for vegans</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ border: '0px' }}>
                                        <Typography variant='subtitle2' sx={{
                                            fontFamily: 'var(--font-manrope)', fontWeight: '500',
                                            color: "#878680",
                                        }}>
                                            Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo
                                            ligula, molestie ullamcorper vulputate vitae sodales commodo nisl. Nulla
                                            facilisi. Pellentesque est metus many of some form.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{
                                    '& .MuiAccordion-root': {
                                        border: '0px !important'
                                    }, border: 'none !important', marginBottom: "10px"
                                }}>
                                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" sx={{
                                        flexDirection: 'row', padding: '5px 10px', border: 'none', background: '#F8F7F0',
                                        borderRadius: '6px',
                                        "& .MuiSvgIcon-root": {
                                            fontSize: '52px',
                                            background: '#C5CE38',
                                            borderRadius: '6px',
                                            color: '#ffffff',
                                        },
                                    }}>
                                        <Typography component="span" variant='subtitle1' sx={{
                                            fontFamily: 'var(--font-manrope) ', fontWeight: '800',
                                            color: "#1F1E17",
                                        }}>Let’s grow naturaly and live naturaly</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant='subtitle2' sx={{
                                            fontFamily: 'var(--font-manrope)', fontWeight: '500',
                                            color: "#878680",
                                        }}>
                                            Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo
                                            ligula, molestie ullamcorper vulputate vitae sodales commodo nisl. Nulla
                                            facilisi. Pellentesque est metus many of some form.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{
                                    '& .MuiAccordion-root': {
                                        border: '0px !important'
                                    }, border: 'none !important', marginBottom: "10px"
                                }}>
                                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" sx={{
                                        flexDirection: 'row', padding: '5px 10px', border: 'none', background: '#F8F7F0',
                                        borderRadius: '6px',
                                        "& .MuiSvgIcon-root": {
                                            fontSize: '52px',
                                            background: '#C5CE38',
                                            borderRadius: '6px',
                                            color: '#ffffff',
                                        },
                                    }}>
                                        <Typography component="span" variant='subtitle1' sx={{
                                            fontFamily: 'var(--font-manrope) ', fontWeight: '800',
                                            color: "#1F1E17",
                                        }}>Best vegetables for your healthy hair</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant='subtitle2' sx={{
                                            fontFamily: 'var(--font-manrope)', fontWeight: '500',
                                            color: "#878680",
                                        }}>
                                            Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo
                                            ligula, molestie ullamcorper vulputate vitae sodales commodo nisl. Nulla
                                            facilisi. Pellentesque est metus many of some form.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default accordion
