import { AppBar, Button, Toolbar, Typography} from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {

    return ( <AppBar>
        <Toolbar className='toolbar-navbar' sx={{display:"flex", justifyContent:"space-around"}}>
            <Typography sx={{color:"white"}}>
                WonderWatch
            </Typography>
            <button className='boton-navbar' sx={{color: 'white'}}>
                Inicio
            </button>
            <button className='boton-navbar' sx={{color: 'white'}}>
                Tienda
            </button>
            <button className='boton-navbar' sx={{color: 'white'}}>
                Nosotros
            </button>
            <CartWidget />
        </Toolbar>
    </AppBar> ) ;
}

export default Navbar;