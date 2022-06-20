import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expnad-sm">
                <div className="container">
                    <Link to={'/'} className="navbar-brand">
                        <i className="fa-solid fa fa-address-book text-warning"></i> Contact <span className="text-warning">Manager Application</span>
                    </Link>
                    <div className="flot-left">
                        <Link to={'/Login'} className="navbar-brand">
                            <i className="fa-solid fa fa-user text-warning"></i> Log<span className="text-warning">in</span>
                        </Link>
                    </div>
                </div>

            </nav>
        </>
    )
}
export default Navbar;