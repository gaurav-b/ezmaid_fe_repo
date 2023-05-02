import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="main-color">
            <footer className="container d-flex flex-wrap justify-content-between align-items-center py-5 main-color">
                <p className="col-md-4 mb-0 text-white">© ezMaid App, Inc</p>
                <ul className="nav navbar-dark col-md-4 justify-content-end">
                    <li className="nav-item">
                        <Link to="/contactus" className="nav-link px-2 text-white">
                            Contact Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/aboutus" className="nav-link px-2 text-white">
                            About Us
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}