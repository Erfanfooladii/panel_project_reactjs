import { Box } from "@mui/material"

export default function Points_item() {
    return(
        <>
            <Box
                sx={{
                    width:'200px',
                    height:'200px',
                    borderRadius:'50%',
                    backgroundColor:'background.item_cr_green',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }}
            >
                <Box fontSize="40px">233P</Box>
            </Box>
        </>
    )
}