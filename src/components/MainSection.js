import NavBar from "./Navbar/NavBar";
import Display from "./Display/Display";
import './Main.css'

const MainSection = () => {
    return (
        <section className="main-section">
            <NavBar />
            <Display />
        </section>
    )
}

export default MainSection;