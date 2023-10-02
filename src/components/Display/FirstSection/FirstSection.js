import { Container, Image } from "react-bootstrap";
import leftImg from '../../../Assets/left-view.jpg';
import rightImg from '../../../Assets/right-view.jpg';
import centerImg from '../../../Assets/center-view.jpg';
import centerView from '../../../Assets/center-frame.jpg';

import './FirstSection.css';

const FirstSection = () => {
    return (
        <section className="d-flex justify-content-center">
        <Image src={leftImg} className="left-watch" alt="sfsdf" />
        <Container className="d-flex align-items-center justify-content-center position-relative center-watch">
            <Image style={{ height: "fit-content" }} src={centerImg} alt="fsdf" />
            <Image src={centerView} className="position-absolute" style={{ borderRadius: "25%" }} alt="fsdf" />
        </Container>
        <Image src={rightImg} className="right-watch" alt="sdfds" />
    </section>
    );
}

export default FirstSection;