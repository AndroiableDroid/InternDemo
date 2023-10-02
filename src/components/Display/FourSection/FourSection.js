import { Container } from 'react-bootstrap';
import bg from '../../../Assets/section-four-bg.jpg';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FourSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const descStyle = {
        marginLeft: "25%",
        width: "30%",
        letterSpacing: "-1.5px",
        color: "#86868b"
    };
    const subDescStyle = {
        marginTop: "3%",
        color: "#F56900"
    }
    return (
        <section style={{ backgroundImage: `url(${bg})`, height: '100vh', backgroundRepeat: "no-repeat", backgroundSize: "150%", backgroundPosition: "center" }}>
            <Container style={{ marginTop: "5%", marginLeft: "25%" }}>
                <h1 data-aos="fade-up" style={{ fontSize: "4em", letterSpacing: "-3px" }}>Looks tough<br />Because it is.</h1>
            </Container>
            <Container className="d-flex justify-content-center flex-column" style={descStyle}>
                <p data-aos="fade-up" style={{ fontSize: "1.5em", fontWeight: 500, marginBottom:"10%" }}>
                    Apple Watch Ultra 2 is crafted for unparalleled performance. The lightweight titanium case is rugged and corrosion resistant, and it's raised to protect the sapphire crystal from edge impacts.
                </p>

                <h4 data-aos="fade-up" style={subDescStyle}>49mm titanium case</h4>
                <h4 data-aos="fade-up" style={subDescStyle}>Water resistance 100m*</h4>
                <h4 data-aos="fade-up" style={subDescStyle}>Tested to MIL-STD 810H</h4>
                <h4 data-aos="fade-up" style={subDescStyle}>IP6X dust resistance</h4>
            </Container>

        </section>
    )
}

export default FourSection;