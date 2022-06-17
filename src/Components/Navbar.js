import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expnad-sm">
                <div className="container">
                    <Link to={''} className="navbar-brand">
                        <i className="fa-solid fa fa-address-book text-warning"></i> Contact <span className="text-warning">Manager Application</span>
                    </Link>
                </div>
            </nav><br />
        </>
    )
}
export default Navbar;