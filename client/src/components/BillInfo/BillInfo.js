import React from 'react';
import './BillInfo.css';
import { Link } from "react-router-dom";


const BillInfo = (props) => (
	<div>
		<div className="billInfo jumbotron blue blueDyna">
			<div className="col-8 mx-auto">
				<div className="full"><h1>{props.title}</h1></div>
			</div>
			<div className="col-10 mx-auto">
				<div className="tablet"><h3>{props.title}</h3></div>
			</div>
				<div className="mobile"><h5>{props.title}</h5></div>

				<a target="_blank" className="btn" href={props.dot_gov}>View Bill</a>
				<a target="_blank" className="btn" href={props.gov_track}>View GovTrack</a>
		</div>
			
		<div className="row BillRow">
			<div className="full">
				<div className="col-10">
					<h6><strong>Bill Sponsor:</strong> {props.sponsor_name}</h6>
				</div>
				<div className="col-2">
					<Link to={'/stats/' + props.bill_id} className="btn btn-primary redBtn">Demographic Stats</Link>
				</div>
			</div>

			<div className="tablet">
				<div className="mr-auto">
					<h6><strong>Bill Sponsor:</strong> {props.sponsor_name}</h6>
				</div>
				<div className="ml-auto">
					<Link to={'/stats/' + props.bill_id} className="btn btn-primary redBtn">Demographic Stats</Link>
				</div>
			</div>

			<div className="mobile">
				<div className="mr-auto">
					<h6><strong>Bill Sponsor:</strong> {props.sponsor_name}</h6>
				</div>
				<div className="ml-auto">
					<Link to={'/stats/' + props.bill_id} className="btn btn-primary demoBtn small">Charts</Link>
					<Link to={'/stats/' + props.bill_id} className="btn btn-primary demoBtn norm">Demographics</Link>
				</div>
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
