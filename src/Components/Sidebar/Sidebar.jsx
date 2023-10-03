import { Box } from "@mui/material";
import { Routes , Route } from "react-router-dom";
import Dashbord from "./components/Body_pages/Dashbord/Dashbord";
import Schedule from "./components/Body_pages/Schedule/Schedule";
import Activity from "./components/Body_pages/Activity/Activity";
import Setting from "./components/Body_pages/Setting/Setting";
import Header from "./components/Header/Header";
import { style_Sidebar_p1, style_Sidebar_p2 } from "./style";

export default function Sidebar() {
    return(
        <>
            <Box sx={style_Sidebar_p1}>
                <Header/>
                <Box sx={style_Sidebar_p2}>
                    <Routes>
                            <Route path="/" element={<Dashbord/>} />
                            <Route path="/Schedule" Component={Schedule}/>
                            <Route path="/Activity" Component={Activity}/>
                            <Route path="/Setting" Component={Setting}/>
                    </Routes>
                </Box>
            </Box>
        </>
    )
}