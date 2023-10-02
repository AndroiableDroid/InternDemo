import { Container, Image } from "react-bootstrap"
import appleLogo from '../../../Assets/second-section-logo.png';

const SecondSection = () => {

    const descStyle = {
        marginTop: "50px",
        width: "60%",
        lineHeight: 1.7,
        letterSpacing: "1px",
        color: "#86868b",
        textAlign: "center"
    };
    return (
        <section>
            <Container className="d-flex justify-content-center align-items-center flex-column" style={{ marginTop: "10rem", marginBottom: "10rem"}}>
                <Container className="d-flex justify-content-center">
                    <Image src={appleLogo} alt="dsfs" />
                </Container>
                <Container className="d-flex justify-content-center" style={{marginTop: "50px"}}>
                    <h1 style={{fontSize: "4.5em"}}>Next level adventure.</h1>
                </Container>
                <Container className="d-flex justify-content-center" style={descStyle}>
                    <p style={{fontSize: "1.5em", fontWeight: 500}}>
                    The most rugged and capable Apple Watch pushes the limits again. Featuring the all-new S9 SiP. A magical new way to use your watch without touching the screen. The brightest Apple display ever. And now you can choose a case and band combination that is carbon neutral.
                    </p>
                </Container>
                <Container className="d-flex justify-content-center">
                    <a style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "2em",
                        fontWeight: 500
                    }} href="/">Watch the event &gt;</a>
                </Container>
            </Container>
        </section>
    )
}

export default SecondSection;