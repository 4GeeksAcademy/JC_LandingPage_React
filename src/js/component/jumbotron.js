import React from "react";

const Jumbotron = () => {
    return (
        <div className="row">
            <div className= "col-12 ">
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                <h1 className="display-1 d-flex justify-content-star ">A Warm Welcome!</h1>
                <p className="col-12 fs-4 py-2 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec semper odio. Phasellus nunc dui, ultricies ac tristique at, porttitor in elit. In hac habitasse platea dictumst. Aliquam a hendrerit odio. Maecenas pharetra justo vel.</p>
                <button className="btn btn-primary btn-lg d-flex justify-content-star" type="button">Call to action!</button>
            </div>
            </div>
            </div>
        </div>

    )

}

export default Jumbotron