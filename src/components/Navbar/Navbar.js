import {AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useState} from "react";
import "./navbar.css";
import AddIcon from "@mui/icons-material/Add";

import LOGO from '../../assets/img/logo.png';
import PostForm from "../PostForm/PostForm";

const Navbar = () => {
    const [menuState, setMenuState] = useState(null);
    const open = Boolean(menuState);
    const [openPopup, setOpenPopup] = useState(false);

    const handleClick = (event) => {
        setMenuState(event.currentTarget);
    };
    const handleClose = () => {
        setMenuState(null);
    };

    const handleOpenPopup = (event) => {
        setOpenPopup(true);
    };

    const handleClosePopup = (event) => {
        setOpenPopup(false);
    };

    return (
        <Box color="primary" sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <img src={LOGO} alt="" width="50px" height="50px"/>
                        <Typography className="app-name" variant="h6" component="div" sx={{flexGrow: 1}}>
                            Vecindario Network
                        </Typography>
                        <Button variant="outlined"
                                color="inherit"
                                startIcon={<AddIcon/>}
                                onClick={handleOpenPopup}>
                            Nuevo post
                        </Button>
                        <IconButton
                            color="inherit"
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <AccountCircleIcon/>
                            <ArrowDropDownIcon/>
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={menuState}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Mi perfil</MenuItem>
                            <MenuItem onClick={handleClose}>Mensajes</MenuItem>
                            <MenuItem onClick={handleClose}>Grupos</MenuItem>
                        </Menu>
                    </Toolbar>
                </Container>
            </AppBar>
            <PostForm
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleClose={handleClosePopup}
            />
        </Box>
    );
}

export default Navbar;