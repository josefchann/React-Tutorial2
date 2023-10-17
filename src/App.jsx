import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Stats from "./components/Stats"

export default function App(props) {
    return (
        <div style={props.style}>
            <Navbar />
            <Hero />
            <Stats />
        </div>
    )
}
