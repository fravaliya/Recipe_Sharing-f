import "../public/Navbar.css"
import logo from '../assets/logo.png';

export default function Navbar() {
    const listyle = {
        color : "black"
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt="logo" style={{height: "50px"}}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" style={listyle}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={listyle}>Category</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={listyle}>Favourites</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={listyle}>Add Reciep</a>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
            </div>
        </nav>
    );
}