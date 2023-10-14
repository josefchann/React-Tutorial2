import logo from "../assets/airbnb-logo.png"
import "./Navbar.css"

export default function Navbar(){
    return (
        <>
            <nav className="navbar-container">
                <img src={logo} alt="" className="airbnb-logo"/>
            </nav>
        </>
    )
}