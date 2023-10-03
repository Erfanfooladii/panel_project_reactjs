import DialogContent from '@mui/material/DialogContent';
import { Box, TextField , Button } from '@mui/material';
import Profile from '../../../profile/Profile';
import { useId, useState } from 'react';
import "./style.css"

import namelist from '../../../../../../assets/datas/nameData,.json'


export default function Page_edit_m({handleClose}) {
    const [lastname,setLastname]=useState("Emma");
    const [firstname,setFirstname]=useState("Alden");
    const upload=useId()
    const handlear=()=>{
        handleClose()
    }
    return(
        <>
            <DialogContent dividers>
                <Box sx={{
                    maxWidth:'500px',
                    minWidth:{xs:'350px'},lg:'420px',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection:'column'
                }} component="form" onSubmit={handlear}>
                    <Box>
                        <Profile lastname={namelist.list_person.lastneme} firstname={namelist.list_person.firstnsme}/>
                    </Box>
                    <Box sx={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection:'column',
                        gap:'15px'
                    }}>
                        <div className="button-wrap">
                            <label className="button" htmlFor={upload}>Upload Image</label>
                            <input id={upload} type="file"/>
                        </div>
                        <TextField onChange={(e)=>{setFirstname(e.target.value)}} label="Firstname" variant="outlined" />
                        <TextField onChange={(e)=>{setLastname(e.target.value)}}  label="Lastname" variant="outlined" />
                        <Button autoFocus onClick={handlear}>
                            Save changes
                        </Button>
                    </Box>
                </Box>
            </DialogContent>
        </>
    )
}