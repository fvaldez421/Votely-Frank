import React, {Component} from "react";
// import { Link } from "react-router-dom";
import './Demoform.css';

import API from "../../../utils/API.js"


class DemoForm extends Component {
	state = {
		userId: this.props.userId,
		userExist: this.props.userExist,
		age: "pns",
		gender: "pns",
		education: "pns",
		income: "pns", 
		race: "pns", 
		region: "pns"
	};
	componentDidMount() {
		if (this.props.userId === "") {
			let userId = window.sessionStorage.getItem("user");
			let userExist = JSON.parse(window.sessionStorage.getItem("userExist"));
			this.setState({ 
				userId, 
				userExist
			});
		}
	};

 	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value});
	};

	handleFormSubmit = event => {
		// event.preventDefault();
		// event.stopProbagation();
		// console.log(event);
		// console.log(this.state);
		// debugger;
		if (!this.props.userExist && this.props.userName) {
			API.saveUser({
				userId: this.props.userId,
				userName: this.props.userName,
				age: (this.state.age),
				gender: (this.state.gender),
				education: (this.state.education),
				income: (this.state.income),
				race: (this.state.race),
				region: (this.state.region)
			})
			.then(res => {
				console.log("User stored");
				console.log(this.state);
				this.props.getUser(this.props.userId);
				// debugger;
				// window.location.reload();
			})
			.catch(err => {
				console.log(err);
				// debugger;
			});

		}else {
			API.updateUser( this.state.userId, {
				age: (this.state.age),
				gender: (this.state.gender),
				education: (this.state.education),
				income: (this.state.income),
				race: (this.state.race),
				region: (this.state.region)
			})
			.then(res => {
				console.log("Updated user");
				console.log(this.state);
				// debugger;
				// window.location.reload();
			})
			.catch(err => {
				console.log(err);
				// debugger;
			})
		}
		// debugger;
	};

	render() {
		return (
				<div className="row">
					<div className="col-6 form-panel"> 
					<form>
								<div className="form-group">
									<label htmlFor="inputState">Select Your Age Range</label>
									<select onChange={this.handleChange} name="age" id="inputState" className="form-control">
										<option value="pns">Prefer Not to Say</option>
										<option value="1">16 - 22</option>
										<option value="two">22 - 34</option>
										<option value="three">35 - 44</option>
										<option value="four">45 - 54</option>
										<option value="five">55 - 64</option>
										<option value="six">65 and Older</option>
									</select>
								</div>
					
								<div className="form-group">
									<label htmlFor="inputState">Select Your Education Level</label>
									<select onChange={this.handleChange} name="education" id="inputState" className="form-control">
										<option value="pns">Prefer Not to Say</option>
										<option value="one">Some High School</option>
										<option value="two">High School Graduate or GED</option>
										<option value="three">Vocational or Trade School</option>
										<option value="four">Some College</option>
										<option value="five">Undergraduate Degree</option>
										<option value="six">Graduate Degree</option>
										<option value="seven">Post Graduate Degree</option>
									</select>
								</div>
					
					
					
								<div className="form-group">
									<label htmlFor="inputState">Select Your Ethnicity</label>
									<select onChange={this.handleChange} name="race" id="inputState" className="form-control">
										<option value="pns">Prefer Not to Say</option>
										<option value="one">American Indian or Alaska Native</option>
										<option value="two">Asian</option>
										<option value="three">Black or African American</option>
										<option value="four">Hispanic or Latino</option>
										<option value="five">White</option> 
										<option value="six">Mixed</option>
										<option value="seven">Native American or Other Pacific Islander</option>
									</select>
								</div>
					
					
								<div className="form-group">
									<label htmlFor="inputState">Select Your Gender</label>
									<select onChange={this.handleChange} name="gender" id="inputState" className="form-control">
										<option value="pns">Prefer Not to Say</option>
										<option value="one">Male</option>
										<option value="two">Female</option>
										<option value="three">Trans</option>
										<option value="four">Other</option>
									</select>
								</div>
					
					
								<div className="form-group">
									<label htmlFor="inputState">Select Your Income Range</label>
									<select onChange={this.handleChange} name="income" id="inputState" className="form-control">
										<option value="pns">Prefer Not to Say</option>
										<option value="one">Under $9,525</option>
										<option value="two">$9,525 - $38,699</option>
										<option value="three">$38,700 - $82,499</option>
										<option value="four">$82,500 - $157,499</option>
										<option value="five">$157,500 - $199,999</option>
										<option value="six">$200,000 to $499,999</option>
										<option value="seven">Over $500,000</option>
									</select>
								</div>
					
								
					
								<div className="form-group">
									<label htmlFor="inputState">Select Your Region</label>
									<select onChange={this.handleChange} name="region" id="inputState" className="form-control">
										<option value="pns">Prefer Not to Say</option>
										<option value="one">Western</option>
										<option value="two">Mid-Western</option>
										<option value="three">South-Western</option>
										<option value="four">North-Eastern</option>
										<option value="five">South-Eastern</option>
									</select>
								</div>

									<button 
										onClick={ () => this.handleFormSubmit()} 
										id="submitbtn" className="btn btn-primary">
										Submit
									</button>
						</form>
					</div>
					<div className="col-6 blue full-height">
						<h3 className="panel-title"><strong>Demographics</strong></h3>
						<p>To allow us to track voting trends please enter your census information below. Information is collectged for data purposes only. Nothing is shared</p>	
					</div>
				</div>
		)
	}
}


export default DemoForm;
