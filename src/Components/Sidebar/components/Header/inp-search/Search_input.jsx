import { TextField } from "@mui/material";


export default function Search_input() {
    return(
        <TextField sx={{padding:{xs:'8px' , lg:'initial'},borderRadius:'15px !important'}}
            type="search"
            placeholder="searching..."
        />
    )
}