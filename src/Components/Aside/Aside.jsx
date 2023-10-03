import { Box } from "@mui/material";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Buttons_aside from "./Components/btn_aside/Buttons_aside";
export default function Aside() {
    return(
        <>
            <Box 
                sx={{
                    display:{xs:'none' , lg:'block'},
                    height:'100%'
                }}
            >
                <Box component="aside" 
                sx={{
                    display:"grid",
                    gridTemplateRows:'40% 53% 7%',
                    padding:'0 25px',
                    borderRight:'0.5px solid',
                    borderColor:'border.primary',
                    height:'100%'
                    }}
                    >
                    <Header/>
                    <Buttons_aside/>
                    <Footer/>
                </Box>
            </Box>
        </>
    )
}