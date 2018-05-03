import React from "react";
import "./WelcomeDetail.css";
import bgImage from './sol1.png';

const WelcomeDetail = () => (
	<div>
		<div className="full">
			<div className="jumbotron blue row">
				<div className="col-4">
					<img src={bgImage} alt="Vote.ly" className="mainImage"/>
				</div>
				<div className="col-8">
					<h1 className="autoMarg">MAKE YOUR VOICE HEARD.</h1>
					<p className="headertext">Does our government work for you? See real bills and vote to see what would pass if the people were in charge. </p>
				</div>
			</div>

			<div className="jumbotron red">
				<h2>61% OF AMERICANS SAY NEITHER POLITICAL PARTY REFLECTS THEIR OPINIONS TODAY, ACCORDING TO THE AMERICAN VALUES SURVERY.</h2>
				<p>Does our government work for you? See real bills and vote to see what would pass if the people were in charge.</p>
			</div>

			<div className="jumbotron blue">
				<h2>VOTE ON WHAT YOU BELIEVE MATTERS AND TOGETHER WE CAN MAKE THIS A REAL DEMOCRACY!</h2>
				<p>Does our government work for you? See real bills and vote to see what would pass if the people were in charge.</p>
			</div>
		</div>

		<div className="tablet">
			<div className="row jumbotron blueTab">
				<img src={bgImage} alt="Vote.ly" className="mainImageTab"/>
				<div className="col-12">
					<h2 className="hTab autoMarg">MAKE YOUR VOICE HEARD.</h2>
					<p className="pTab">Does our government work for you? See real bills and vote to see what would pass if the people were in charge. </p>
				</div>
			</div>

			<div className="jumbotron redTab">
				<h3 className="hTab">61% OF AMERICANS SAY NEITHER POLITICAL PARTY REFLECTS THEIR OPINIONS TODAY, ACCORDING TO THE AMERICAN VALUES SURVERY.</h3>
				<p className="pTab">Does our government work for you? See real bills and vote to see what would pass if the people were in charge.</p>
			</div>

			<div className="jumbotron blueTab">
				<h3 className="hTab">VOTE ON WHAT YOU BELIEVE MATTERS AND TOGETHER WE CAN MAKE THIS A REAL DEMOCRACY!</h3>
				<p className="pTab">Does our government work for you? See real bills and vote to see what would pass if the people were in charge.</p>
			</div>
		</div>

		<div className="mobile">
			<div className="row jumbotron blueMob">
				<img src={bgImage} alt="Vote.ly" className="mainImageMob"/>
				<div className="col-12">
					<h5 className="autoMarg">MAKE YOUR VOICE HEARD.</h5>
					<p className="pMob">Does our government work for you? See real bills and vote to see what would pass if the people were in charge. </p>
				</div>
			</div>

			<div className="jumbotron redMob">
				<h5 className="hMob">61% OF AMERICANS SAY NEITHER POLITICAL PARTY REFLECTS THEIR OPINIONS TODAY, ACCORDING TO THE AMERICAN VALUES SURVERY.</h5>
				<p className="pMob">Does our government work for you? See real bills and vote to see what would pass if the people were in charge.</p>
			</div>

			<div className="jumbotron blueMob">
				<h5>VOTE ON WHAT YOU BELIEVE MATTERS AND TOGETHER WE CAN MAKE THIS A REAL DEMOCRACY!</h5>
				<p className="pMob">Does our government work for you? See real bills and vote to see what would pass if the people were in charge.</p>
			</div>
		</div>

	</div>
	
);

export default WelcomeDetail;
