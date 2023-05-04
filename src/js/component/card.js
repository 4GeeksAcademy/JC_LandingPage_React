import React from "react";

function Card () {
	return (
        <div>
			<div className="col-md-3">
				<div className="card text-center">
					<img src="https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?b=1&k=20&m=1357365823&s=170667a&w=0&h=y6ufWZhEt3vYWetga7F33Unbfta2oQXCZLUsEa67ydM=" className="card-img-top card-image" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<a href="#" className="btn btn-primary">Find Out More!</a>
					</div>
				</div>
			</div>
		</div>
    );
};


export default Card;