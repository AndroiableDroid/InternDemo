import { Container } from "react-bootstrap";
import leftImg from '../../Assets/left-view.jpg';
import rightImg from '../../Assets/right-view.jpg';
import centerImg from '../../Assets/center-view.jpg';
import centerView from '../../Assets/center-frame.jpg';

const Display = () => {
    return (
        <Container style={{ width: "100%" }} className="justify-content-center d-flex">
            <img src={leftImg} alt="sfsdf" />
            <Container className="d-flex align-items-center position-relative">
                <img style={{ height: "fit-content" }} src={centerImg} alt="fsdf" />
                <img src={centerView} className="position-absolute" style={{left: "17%", borderRadius: "25%"}} alt="fsdf" />
            </Container>
            <img src={rightImg} alt="sdfds" />
        </Container>
    )
}

export default Display;