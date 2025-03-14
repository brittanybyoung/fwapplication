import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md" className="mb-4">
            <NavbarBrand tag={Link} to="/">Book Theories</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/">
                            Theories
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/add">
                            Add Theory
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/books">
                            Books
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Navigation; 