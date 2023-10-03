import { Box } from '@mui/material';
import Profile from '../profile/Profile';
import Button_edit from '../btn_aside/btn_edit/Button_edit';
import namelist from '../../../../assets/datas/nameData,.json'

export default function Header() {
    return(
        <>
            <Box sx={{
                display:'flex',
                alignItems:'center',
                flexDirection:'column',
                gap:"5px"
            }}>
                <Box sx={{
                    width:'100%',
                    padding:'20px 10px',
                    textAlign:'center'
                }}>
                    company name
                </Box>
                <Profile firstname={namelist.list_person.firstnsme} lastname={namelist.list_person.lastneme}/>
                <Button_edit/>
            </Box>
        </>
    )
}