import { Container, Image } from 'react-bootstrap';
import watchFaceLight from '../../../Assets/fifth-section-watch-light.jpg';
import watchFaceDark from '../../../Assets/fifth-section-watch-dark.jpg';
import './FifthSection.css';
import { useEffect, useLayoutEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FifthSection = () => {

    useLayoutEffect(() => {
        AOS.init();
    }, []);

    return (
        <section data-aos="bg-black">
            <Container className='d-flex position-relative align-items-center'>
                <Image data-aos="animate-watch-light" src={watchFaceLight} />
                <Image style={{position: "absolute"}} data-aos="animate-watch-dark" src={watchFaceDark} />
                <span style={{ width: "30%", marginLeft: "5rem" }}>
                    <span data-aos="text-color" style={{ fontWeight: 600, fontSize: "19px" }}>The biggest and brightest Apple Watch display ever.
                    </span>
                    <span data-aos="text-color2"> Powered by the all-new S9 SiP, the Always‑On Retina display is 3000 nits at its peak, making it even more readable in harsh sunlight. In low-light situations, it dims to 1 nit. Night Mode now activates automatically in the dark. The large display gives you room to customize your view to suit almost any activity. And a new watch face shows dynamic info like altitude, depth, or seconds along the outermost edges.
                    </span>
                </span>
            </Container>
        </section>
    );
}

export default FifthSection;