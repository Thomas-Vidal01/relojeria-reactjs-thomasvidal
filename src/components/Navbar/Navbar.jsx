import { AppBar, Toolbar, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <AppBar sx={{ backgroundColor: "black" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
                <Typography >
                    WonderWatch
                </Typography>
                <NavLink className="navbar-link" to="/">
                    <Typography >
                        Inicio/Categorías
                    </Typography>
                </NavLink>
                <NavLink className="navbar-link" to="/products">
                    <Typography >
                        Productos
                    </Typography>
                </NavLink>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;