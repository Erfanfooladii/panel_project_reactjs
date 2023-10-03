import { Box } from "@mui/material";
import Header from "./Components/Header/Header";
import Aside from "./Aside";
import Buttons_aside from "./Components/btn_aside/Buttons_aside";
import Footer from "./Components/Footer/Footer";
import Search_input from "../Sidebar/components/Header/inp-search/Search_input";



export default function Aside_res({children}) {
    
    return(
      <>
        <Box
        sx={{
          display:{xs:'flex' , lg:'none'},
          overflow:'hidden',
          width:children,
          flexDirection:'column',
          gap:'10px',
          transition:'0.3s',
          zIndex:'100',
          backgroundColor:'background.menu',
          borderRadius:'0px 30px 0px 30px',
          boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
        }}
        >
          <Header/>
          <Search_input/>
          <Buttons_aside/>
          <Footer/>
        </Box>
      </>
    )
}