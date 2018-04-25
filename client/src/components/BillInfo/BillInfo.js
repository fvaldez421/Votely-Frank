import React from 'react';
import './BillInfo.css';
import { Link } from "react-router-dom";


const BillInfo = (props) => (
	<div>
		<div className="billInfo jumbotron blue">
			<div className="col-8 mx-auto">
				<h1>{props.title}</h1>
				<a target="_blank" className="btn" href={props.dot_gov}>View Bill</a>
				<a target="_blank" className="btn" href={props.gov_track}>View GovTrack</a>
			</div>
		</div>
		<div className="row BillRow">
			<div className="col-10">
				<h6><strong>Bill Sponsor:</strong> {props.sponsor_name}</h6>
			</div>
			<div className="col-2">
				<Link to={'/stats/' + props.bill_id} className="btn btn-primary redBtn">Demographic Stats</Link>
			</div>
		</div>
		<div className="container">
			<div className="col-8 mx-auto">
				<img src="" alt=""/>
				<p className="bill-summary">{props.summary}</p>
			</div>
		</div>
	</div>
		
)

export default BillInfo;
