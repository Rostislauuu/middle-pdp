import { Link } from "react-router-dom";

import "../assets/styles/components/header.css";

const Header = () => {
    return (
        <div className="header-container">
            <Link to="/recaptcha" className="link">
                Recaptcha
            </Link>
        </div>
    )
}

export default Header;
