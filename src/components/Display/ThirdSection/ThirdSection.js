import { Container, Image } from "react-bootstrap";
import flatWatch from '../../../Assets/flat-watch.jpg';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ThirdSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section style={{ backgroundColor: "#F7F7F7", width: "100" }}>
            <Container style={{ marginTop: "12%", marginLeft: "25%" }}>
                <h3 data-aos="fade-up">Design</h3>
            </Container>
            <Container style={{ marginLeft: "25%" }}>
                <h1 data-aos="fade-up" style={{ fontSize: "6.5rem" }}>New guts.<br />More glory.</h1>
            </Container>
            <Image data-aos="fade-right" style={{ position: "relative", float: "right" }} src={flatWatch} />
        </section>
    )
}

export default ThirdSection;