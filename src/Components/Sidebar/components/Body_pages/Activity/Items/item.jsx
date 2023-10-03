import { Box } from "@mui/material";

export default function Item_Act({CHcomponent,title,color}) {
    return (
        <Box
            sx={{
                width:'270px',
                height:'300px',
                backgroundColor: color/* 'background.default' */,
                display:'flex',
                alignItems:'center',
                borderRadius:'30px',
                justifyContent:'center',
                flexDirection:'column',
                gap:'10px'
            }}
        >
            {title}
            {CHcomponent}
        </Box>
    )
}