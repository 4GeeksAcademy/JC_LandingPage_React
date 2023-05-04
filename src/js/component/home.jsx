import React from "react";

//include images into your bundle

import Card from "./card";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className="row" id="card-row">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
		</div>
	);
};

export default Home;
