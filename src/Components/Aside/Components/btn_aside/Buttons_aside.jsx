import { Bento, BuildCircle, EventNote, Feed } from "@mui/icons-material";
import { Box, Button, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import './style.css'// import css file for NavLink

export default function Buttons_aside() {
    const Buttons=styled(Button)({
        maxWidth:'230px',
        minWidth:'200px',
        padding:'15px 20px',
        borderRadius:'15px',
        display:'flex',
        justifyContent:'flex-start',
        textDecoration:'none'
    })
    return(
        <>
            <Box>
                <Box sx={{
                    display:"flex",
                    alignItems:'center',
                    flexDirection:"column",
                    justifyItems:"center",
                    paddingTop:'20px',
                    gap:'8px'
                }}>
                    <NavLink className="btn-link" to="/" end><Buttons startIcon={<Bento/>} >Dashbord</Buttons></NavLink>
                    <NavLink className="btn-link" to="/Activity"><Buttons startIcon={<Feed/>}>Activity</Buttons></NavLink>
                    <NavLink className="btn-link" to="/Schedule"><Buttons startIcon={<EventNote/>}>Schedule</Buttons></NavLink>
                    <NavLink className="btn-link" to="/Setting"><Buttons startIcon={<BuildCircle/>}>Setting</Buttons></NavLink>
                    <a className="btn-link ex" href="https://www.linkedin.com/in/erfan-fooladi-a7593a240/">Exitus</a>
                </Box>
            </Box>
        </>
    )
}