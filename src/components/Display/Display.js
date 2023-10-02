import { Container } from "react-bootstrap";
import './Display.css';
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FourSection from "./FourSection/FourSection";
import FifthSection from "./FifthSection/FifthSection";

const Display = () => {

    return (
        <Container style={{ minWidth: "100%", padding: 0 }} className="justify-content-center d-flex flex-column">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourSection />
            <FifthSection />
        </Container>
    )
}

export default Display;