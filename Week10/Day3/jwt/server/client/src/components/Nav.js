import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Nav = (props) => {
    return(
        <div>
            <Stack spacing={2} direction="row">
                <Button component={Link} to='/'>Home</Button>
                <Button component={Link} to='/admin'>Admin</Button>
                <Button component={Link} to='/login'>Login</Button>
                <Button component={Link} to='/register'>Register</Button>
            </Stack>
        </div>
    )
}



export default Nav;