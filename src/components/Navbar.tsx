import {Container, Nav, Navbar as NavbarBs} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {createSvgIcon} from '@mui/material/utils'

import {Button} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export function Navbar() {

    return (
        <NavbarBs className="bg-white shadow-small mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/home" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link to="/checkout" as={NavLink}>
                        <Button>
                            <ShoppingCartIcon></ShoppingCartIcon>
                        </Button>
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}