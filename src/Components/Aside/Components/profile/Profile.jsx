import { Box } from "@mui/material";
//import image file
import img_profile from "../../../../assets/images/profile.png"
import { style_Profile_p1, style_Profile_p2, style_Profile_p3 } from "./style";

export default function Profile({firstname,lastname}) {
    return(
        <>
            <Box sx={style_Profile_p1}>
                <Box sx={style_Profile_p2}>
                    <Box sx={style_Profile_p3} component='img' src={img_profile} />
                </Box>
                <h3>{firstname} {lastname}</h3>
            </Box>
        </>
    )
}