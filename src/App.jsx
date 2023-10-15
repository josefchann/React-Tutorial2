import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"

export default function App(props) {
    return (
        <div style={props.style}>
            <Navbar />
            <Hero />
        </div>
    )
}
