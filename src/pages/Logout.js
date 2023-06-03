import {Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../state/hooks';
import { userLogOut } from '../state/credentials';


function Logout() {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleChange = (event) => {
        navigate('/');
        dispatch(userLogOut())
      };


    return (
        <Button style={{float:'right', backgroundColor:'#DC354B',marginTop:'2%', marginLeft:'75%'}} size="small" variant="contained" onClick={handleChange}>Logout</Button>
    )
}

export default Logout