import photoGrid from "../assets/photo-grid.png"
import "./Hero.css"

export default function Hero() {
    return (
        <>
            <section className="heroContainer">
                <div className="hero-image">
                    <img src={photoGrid} alt="" />
                </div>
            </section>
            <div className="hero-text-container">
                <h1 className="hero-header">Online Experiences</h1>
                <p className="hero-text">Join unique interactive activities led by one of a kind hosts- all without leaving home</p>
            </div>
        </>
    )
}
