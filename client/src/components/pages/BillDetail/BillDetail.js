import React, { Component } from 'react';
import './BillDetail.css';
import API from "../../../utils/API.js";
import BillInfo from "../../BillInfo";
import Vote from "../../Vote";
import Chart from "../../VoteNumChart";


class BillDetail extends Component {
	
	componentWillMount() {
		this.getBill();		
	};
	
    constructor(props){
        super(props);
    	this.voteYes = this.voteYes.bind(this);
    	this.voteNo = this.voteNo.bind(this);
	    this.voteUndecided = this.voteUndecided.bind(this);

		this.state = {
			isLoggedIn: this.props.isLoggedIn,
			bill_id: this.props.match.params.bill_id,
			bill: [],
			userId: window.sessionStorage.getItem("user"),
			voted: false,
			loaded: false
		};
    }

	getBill() {
		API.checkBill(this.state.bill_id)
			.then(res => {
				this.setState({ bill: res.data[0] });

				if (this.state.bill.votes_no.includes(this.state.userId)) {
					this.setState({ voted: true })
				}else if (this.state.bill.votes_yes.includes(this.state.userId)) {
					this.setState({ voted: true })
				}else if (this.state.bill.votes_undecided.includes(this.state.userId)) {
					this.setState({ voted: true })	
				}
				this.setState({ loaded: true });
			})
	}

	voteYes() { 
		if (!(this.state.bill.votes_yes.includes(this.state.userId))) {
			let bill = this.state.bill;
			bill.votes_yes.push(this.state.userId);
			this.setState({ bill: bill });
		}

		API.voteYes(this.state.bill_id, {
			votes_yes: this.state.bill.votes_yes
		})
		.then(res => {
			this.getBill();
		})
		.catch(err => console.log(err));
	}

	voteNo() {
		if (!(this.state.bill.votes_no.includes(this.state.userId))) {
			let bill = this.state.bill;
			bill.votes_no.push(this.state.userId);
			this.setState({ bill });
		}

		API.voteNo(this.state.bill_id, {
			votes_no: this.state.bill.votes_no
		})
		.then(res => {
			this.getBill();
		})		
		.catch(err => console.log(err));
	}

	voteUndecided() {
		if (!(this.state.bill.votes_undecided.includes(this.state.userId))) {
			let bill = this.state.bill;
			bill.votes_undecided.push(this.state.userId);
			this.setState({ bill });
		}

		API.voteUnde(this.state.bill_id, {
			votes_undecided: this.state.bill.votes_undecided
		})
		.then(res => {
			this.getBill();
		})		
		.catch(err => console.log(err));
	}

	render() {
		return (
			<div className="bill-info">
				
				<BillInfo
					title={this.state.bill.name}
					bill_id={this.state.bill_id}
					sponsor_name={this.state.bill.sponsor_name}
					summary={this.state.bill.summary_short}
					gov_track={this.state.bill.govtrack_url}
					dot_gov={this.state.bill.congressdotgov_url}
				/>
				{
					(this.state.loaded) ?
					(<Vote
						isLoggedIn={this.state.isLoggedIn}
						voted={this.state.voted}
						voteYes={this.voteYes}
						voteNo={this.voteNo}
						voteUndecided={this.voteUndecided}
						>
						{
			                (this.state.bill.votes_yes || 
			                this.state.bill.votes_no ||
			               	this.state.bill.votes_undecided) ?
			                	[
				                	((this.state.bill.votes_yes.length 
				                	+ this.state.bill.votes_no.length 
				                	+ this.state.bill.votes_undecided.length > 0)) ?
										(<Chart
											bill_id={this.state.bill_id}
											votes_yes={this.state.bill.votes_yes}
											votes_no={this.state.bill.votes_no}
											votes_undecided={this.state.bill.votes_undecided}
											location="Votes"
											legendPosition="top"
										/>)
									:
										(<h5>No Votes Yet</h5>)
								]
			                : 
			                	(<h5>Something's wrong with our chart :(</h5>)
		                }
	                </Vote>)
	                :	
	                (<h5>Loading...</h5>)
				}	
			</div>
		)
	}
}

export default BillDetail;
