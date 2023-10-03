import { Box } from "@mui/material"

export default function Total_item() {
    return(
        <>
            <Box
                sx={{
                    width:'200px',
                    height:'200px',
                    borderRadius:'50%',
                    backgroundColor:'background.item_cr_red',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                }}
            >
                <Box fontSize="40px">21%</Box>
            </Box>
        </>
    )
}