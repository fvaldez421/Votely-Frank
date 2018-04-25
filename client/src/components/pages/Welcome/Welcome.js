import React from 'react';
import './Welcome.css';
//import Wrapper from "../../Wrapper";
import WelcomeDetail from "../../WelcomeDetail";
import bgImage from './sol1.png';

const Welcome = (props) => (
	<div>
		<div className="jumbotron blue row">
			<div className="col-6">
				<img src={bgImage} alt="Vote.ly" className="mainImage"/>
			</div>
			<div className="col-6">
				<h1>MAKE YOUR VOICE HEARD.</h1>
				<p className="headertext">Does our government work for you? See real bills and vote to see what would pass if the people were in charge. </p>
			</div>
		</div>
		<WelcomeDetail />
	</div>
) 
export default Welcome;
