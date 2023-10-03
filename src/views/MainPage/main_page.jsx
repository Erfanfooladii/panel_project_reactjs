import { Box, Container } from "@mui/material";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Export_aside from "../../Components/Aside/Export_aside";
import { useState } from "react";
import { ScaleLoader } from "react-spinners";
import "./style_spinner.css"
import { style_MainPage_p1, style_MainPage_p2 } from "./style";
//This is component main
export default function Page_main() {
  const [loader,setLoader]=useState(false)
  setInterval(() => {setLoader(true)}, 1500);
  return(
    <>
      {
        loader === true ? 
        <>
          <Container maxWidth="lg" sx={style_MainPage_p1}>
            <Box sx={style_MainPage_p2}>
                <Export_aside/>
                <Sidebar/>  
            </Box>
          </Container>`
        </> 
        :<><ScaleLoader className="spinner" color="#1978d7"/></>
      }
    </>
  )
}