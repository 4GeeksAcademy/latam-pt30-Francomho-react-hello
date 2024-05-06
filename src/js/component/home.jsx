import React from "react"; // Main React.js library

import ReactDOM from "react-dom"; // We use ReactDOM to render into the DOM

import { Navbar } from "./navbar";
import { Card } from "./card";
import { Jumbotron } from "./jumbotron"
import { Footer } from "./footer"

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container pt- px-0">
				<div className="row">
					<div className="col-12 ms-1 ms-md-0">
						<Jumbotron />
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-lg-6 col-xl-3 mb-3 ms-1 ms-md-0">
						<Card />
					</div>
					<div className="col-12 col-lg-6 col-xl-3 mb-3 ms-1 ms-md-0">
						<Card />
					</div>
					<div className="col-12 col-lg-6 col-xl-3 mb-3 ms-1 ms-md-0">
						<Card />
					</div>
					<div className="col-12 col-lg-6 col-xl-3 mb-3 ms-1 ms-md-0">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;