import { Box, Grid } from "@mui/material"
import Navbar from "../components/Navbar.com"
import Name from "../components/Name.com"
import { About } from "../components/About.com"
import { Project } from "../components/Project.com"
import { Footer } from "../components/Footer.com"


export const Portfolio:React.FC<{}>=()=>{
    return<>
    <Box>
        <Grid>
            <Navbar/>
        </Grid>
        <Grid>
            <Name/>
        </Grid>
        <br />
        <br />
        <Grid>
            <About/>
        </Grid>
        <br />
        <br />
        <Grid>
            <Project/>
        </Grid>
        <br />
        <br />
        <Grid>
            <Footer/>
        </Grid>
    </Box>
    </>
}