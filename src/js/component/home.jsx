import React from "react";

//include images into your bundle
import Navbar from "./navbar";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
		</div>
	);
};

export default Home;
