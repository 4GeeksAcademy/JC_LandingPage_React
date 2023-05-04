import React from "react";

//include images into your bundle

import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center ">
			<div className="m-auto w-75 overflow-auto">
				<div className="row" id="card-row">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
