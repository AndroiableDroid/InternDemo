import { Container, Image } from 'react-bootstrap';
import watchFace from '../../../Assets/fifth-section-watch.jpg';

const FifthSection = () => {
    return (
        <section style={{ backgroundColor: "#F7F7F7" }}>
            <Container className='d-flex align-items-center'>
                <Image src={watchFace} />
                <span style={{ width: "30%", marginLeft: "5rem" }}>
                <span style={{ color: "#1d1d1f", fontWeight: 600, fontSize: "19px" }}>The biggest and brightest Apple Watch display ever.</span> <span>Powered by the all-new S9 SiP, the Always‑On Retina display is 3000 nits at its peak, making it even more readable in harsh sunlight. In low-light situations, it dims to 1 nit. Night Mode now activates automatically in the dark. The large display gives you room to customize your view to suit almost any activity. And a new watch face shows dynamic info like altitude, depth, or seconds along the outermost edges.</span>
                </span>
            </Container>
        </section>
    );
}

export default FifthSection;