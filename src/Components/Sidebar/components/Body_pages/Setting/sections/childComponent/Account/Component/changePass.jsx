import React from "react";
import { useState } from "react";
import { Box, Button, TextField, Snackbar, Alert } from "@mui/material";
import { styles_ChangePass_p1 } from "./styles";
export default function ChangePass() {
    const [error,setError]=useState(false)
    const [suss,setSuss]=useState(false)
    const [pass,setPass]=useState("")
    const [repass,setRepass]=useState("")
    const [bepass,setBePass]=useState("")
    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {return;}
        setError(false);
    };
    const handleCloseSuss = (event, reason) => {
        if (reason === 'clickaway') {return;}
        setSuss(false)
    };
    const submithandlear=(e)=>{
        e.preventDefault();
        if (pass === "" ) {
            setError(true)
        }else if (repass === "") {
            setError(true)
        }else if (bepass === "") {
            setError(true)
        }else{
            setSuss(true)
        }
    }
    return(
        <>
            <Box
                sx={styles_ChangePass_p1}
                component="form"
                onSubmit={submithandlear}
                >
                    <TextField type="password" onChange={(e)=>{setBePass(e.target.value)}} label="Password" variant="outlined"/>
                    <TextField type="password" onChange={(e)=>{setPass(e.target.value)}} label="new Password" variant="outlined"/>
                    <TextField type="password" onChange={(e)=>{setRepass(e.target.value)}} label="Repeat Password" variant="outlined"/>
                    <Button type="submit">change password</Button>
                    <Snackbar
                        onClose={handleCloseError}
                        open={error}
                        autoHideDuration={2000}
                        message="Note archived"
                    >
                        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
                            Please complete the fields.
                        </Alert>
                    </Snackbar> 
                    <Snackbar
                        onClose={handleCloseSuss}
                        open={suss}
                        autoHideDuration={2000}
                        message="Note chived"
                    >
                        <Alert onClose={handleCloseSuss} severity="success" sx={{ width: '100%' }}>
                            Your password has been changed.
                        </Alert>
                    </Snackbar>
            </Box>        
        </>
    )
}