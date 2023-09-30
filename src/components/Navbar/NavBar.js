import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import appleLogo from "../../Assets/apple-logo.svg";
import searchIcon from "../../Assets/search-icon.svg";
import storeIcon from "../../Assets/store-icon.svg";
import './Navbar.css'
import { Button } from "react-bootstrap";

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

    return (
        <>
            <Navbar
            >
                <Nav className="navbar-items" defaultActiveKey="#home">
                    <Nav.Item>
                        <img src={appleLogo} alt="brand-logo"/>
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
                    <Nav.Item>
                        <img src={searchIcon} alt="search-logo"/>
                    </Nav.Item>
                    <Nav.Item>
                        <img src={storeIcon} alt="store-logo"/>
                    </Nav.Item>

                </Nav>
            </Navbar>
            <Navbar
                className="sticky">
                <Nav className="navbar-items">
                    <Nav.Item>
                        <h5>Apple Watch Ultra 2</h5>
                    </Nav.Item>
                    <Nav.Item>
                        <Container className="navbar-sec-section2">
                            <h6>Overview</h6> {" "}
                            <p>Why Apple Watch</p> {" "}
                            <Button variant="primary" className="navbar-sec-buy-btn">
                                Buy
                            </Button>

                        </Container>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    );
}

export default NavBar;