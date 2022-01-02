import { Link } from "react-router-dom";

import "../assets/styles/components/header.css";

const Header = () => {
    return (
        <div className="header-container">
            <Link to="/recaptcha" className="link">
                Recaptcha
            </Link>
            <Link to="/redux-persist" className="link">
                Redux Persist
            </Link>
            <Link to="/google-auth" className="link">
                Google Auth
            </Link>
        </div>
    )
}

export default Header;
