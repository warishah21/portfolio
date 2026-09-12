import './index.css';

export const Navbar = () => {
    return (
        <div className="navbar">
            <h2>Protfolio</h2>
            <ul className="navlinks">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#certificates">Certification</a></li>
                <li><a href="#projects">My Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}