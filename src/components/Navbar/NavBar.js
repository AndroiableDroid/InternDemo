
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import appleLogo from "../../Assets/apple-logo.svg";
import searchIcon from "../../Assets/search-icon.svg";
import storeIcon from "../../Assets/store-icon.svg";
import './Navbar.css'

const NavBar = () => {
    const Items = [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "Vision",
        "AirPods",
        "TV & Home",
        "Entertainment",
        "Accessories",
        "Support"
    ]

    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            // expanded={expand}
            // fixed="top"
            // expand="md"
            // className={navColour ? "sticky" : "navbar"}
        >
            <Container className="navbar-container">
                <Nav className="ms-auto navbar-items" defaultActiveKey="#home">
                    <Nav.Item className="navbar-logo">
                        <img src={appleLogo} />
                    </Nav.Item>
                    {Items.map((item, index) => {
                        return (
                            <Nav.Item key={index}>
                                <div className="navbar-item">
                                    {item}
                                </div>
                            </Nav.Item>
                        );
                    })}
                    <Nav.Item className="navbar-logo">
                        <img src={searchIcon} />
                    </Nav.Item>
                    <Nav.Item className="navbar-logo">
                        <img src={storeIcon} />
                    </Nav.Item>

                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;