import { Box, Container, Typography, } from "@mui/material";

const ProjectSection = () => {
    return (
        <Box sx={{ padding: '80px 0px' }}>
            <Container fixed>
                <Typography variant="h6" sx={{
                    fontFamily: "var(--font-covered)",
                    color: "#EEC044",
                    textAlign:{md:'start', xs:'center'}
                }}>Our Recent Work</Typography>
                <Box sx={{ display: 'flex', flexDirection:{md:'row', xs:"column"}, alignItems: 'center', justifyContent: 'space-between', textAlign:{md:'start', xs:'center'}, gap:{md:0, xs:2} }}>
                    <Box sx={{ width: {md:'40%', xs:'100%'} }}>

                        <Typography variant="h4" sx={{
                            typography: {
                                lg: 'h4',
                                xs: 'h5',
                            }, fontFamily: 'var(--font-manrope) !important', fontWeight: '800 !important',
                            color: "#1F1E17",
                        }}>Recently Completed
                            Projects</Typography>
                    </Box>
                    <Box sx={{ width: {md:'40%', xs:'100%'} }}>
                        <Typography variant="subtitle2" sx={{
                            fontFamily: 'var(--font-manrope) !important', fontWeight: '500 !important',
                            color: "#878680",
                        }}>Lorem ipsum dolor sit amet consectetur adipiscing elit penatibsenectus, sem mus etiam pharetra lacus ac tortor vitae, amet tincidunt congue fusce ridiculus cubilia ad feugiat fames placerat</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default ProjectSection
