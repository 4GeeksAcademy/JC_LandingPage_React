import React from "react";

const Card = () => {
    return (
        <div>
            <div className="row">
				<div className="card text-center">
					<img src="..." className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" className="btn btn-primary">Find Out More!</a>
					</div>
				</div>
			</div>
        </div>
    )
};

export default Card;