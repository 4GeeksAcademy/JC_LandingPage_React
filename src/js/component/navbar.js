import React from "react";

const Navbar = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12 ">
                <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand mx-3" href="#">My First REACT</a>

                    <ul className="navbar-nav d-flex flex-row justify-content-end">
                            <li className="nav-item mx-3">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-3">
                            <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Contact</a>
                            </li>
                    </ul>

                    
                </div>
                </nav>
                </div>
            </div>
		</div>
    )
}

export default Navbar;