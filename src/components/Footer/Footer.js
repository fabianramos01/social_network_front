import {Container, Grid, Box} from "@mui/material";
import {Link} from "react-router-dom";


const Navbar = () => {

    return (
        <footer>
            <Box px={{xs: 3, sm: 10}} py={{xs: 5, sm: 10}} bgcolor="text.secondary" color="white" style={{padding: 20}}>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                Más
                            </Box>
                            <Box color="inherit">
                                <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                                    Inicio
                                </Link>
                            </Box>
                            <Box color="inherit">
                                <Link to="#" style={{textDecoration: 'none', color: 'inherit'}}>
                                    Contacto
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                Vecindario
                            </Box>
                            <Box color="inherit">
                                <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                                    Página oficial
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                Redes sociales
                            </Box>
                            <Box color="inherit">
                                <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                                    Facebook
                                </Link>
                            </Box>
                            <Box color="inherit">
                                <Link to="#" style={{textDecoration: 'none', color: 'inherit'}}>
                                    LinkedIn
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{xs:0, sm:1}}>
                        Vecindario network &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    );
}

export default Navbar;