import { Container, Image } from "react-bootstrap";
import flatWatch from '../../../Assets/flat-watch.jpg';

const ThirdSection = () => {
    return (
        <section style={{ backgroundColor: "#F7F7F7", width: "100" }}>
            <Container style={{ marginTop: "12%", marginLeft: "25%" }}>
                <h3>Design</h3>
            </Container>
            <Container style={{ marginLeft: "25%" }}>
                <h1 style={{ fontSize: "6.5rem" }}>New guts.<br />More glory.</h1>
            </Container>
            <Image style={{ position: "relative", float: "right" }} src={flatWatch} />
        </section>
    )
}

export default ThirdSection;