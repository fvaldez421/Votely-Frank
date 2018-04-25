import React, {Component} from "react";
import { Link } from "react-router-dom";
import './Demoform.css';

import API from "../../../utils/API.js"


class DemoForm extends Component {
	state = {
		userId: this.props.userId,
		userExist: this.props.userExist,
		age: "",
		gender: "",
		education: "",
		income: "", 
		race: "", 
		region: ""
	};
	componentDidMount() {
		if (this.props.userId === "") {
			let userId = window.sessionStorage.getItem("user");
			let userExist = JSON.parse(window.sessionStorage.getItem("userExist"));
			this.setState({ 
				userId: userId, 
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
		if (!this.props.userExist && this.props.userName) {
			API.saveUser({
				userId: this.props.userId,
				userName: this.props.userName,
				age: this.state.age,
				gender: this.state.gender,
				education: this.state.education,
				income: this.state.income,
				race: this.state.race,
				region: this.state.region
			})
			.then(res => console.log("Demos stored"))
			.catch(err => console.log(err));
		} else {
			API.updateUser( this.state.userId, {
				age: this.state.age,
				gender: this.state.gender,
				education: this.state.education,
				income: this.state.income,
				race: this.state.race,
				region: this.state.region
			})
			.then(res => console.log(res))
			.catch(err => console.log(err))
		}
		
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
										<option value="2">22 - 34</option>
										<option value="3">35 - 44</option>
										<option value="4">45 - 54</option>
										<option value="5">55 - 64</option>
										<option value="6">65 and Older</option>
									</select>
								</div>
					
								<div className="form-group">
									<label htmlFor="inputState">Select Your Education Level</label>
									<select onChange={this.handleChange} name="education" id="inputState" className="form-control">
										<option value="pns">Prefer Not to Say</option>
										<option value="1">Some High School</option>
										<option value="2">High School Graduate or GED</option>
										<option value="3">Vocational or Trade School</option>
										<option value="4">Some College</option>
										<option value="5">Undergraduate Degree</option>
										<option value="6">Graduate Degree</option>
										<option value="7">Post Graduate Degree</option>
									</select>
								</div>
					
					
					
								<div className="form-group">
									<label htmlFor="inputState">Select Your Ethnicity</label>
									<select onChange={this.handleChange} name="race" id="inputState" className="form-control">
										<option value="pns">Prefer Not to Say</option>
										<option value="1">American Indian or Alaska Native</option>
										<option value="2">Asian</option>
										<option value="3">Black or African American</option>
										<option value="4">Hispanic or Latino</option>
										<option value="5">White</option> 
										<option value="6">Mixed</option>
										<option value="7">Native American or Other Pacific Islander</option>
									</select>
								</div>
					
					
								<div className="form-group">
									<label htmlFor="inputState">Select Your Gender</label>
									<select onChange={this.handleChange} name="gender" id="inputState" className="form-control">
										<option value="pns">Prefer Not to Say</option>
										<option value="1">Male</option>
										<option value="2">Female</option>
										<option value="3">Trans</option>
										<option value="4">Other</option>
									</select>
								</div>
					
					
								<div className="form-group">
									<label htmlFor="inputState">Select Your Income Range</label>
									<select onChange={this.handleChange} name="income" id="inputState" className="form-control">
										<option value="pns">Prefer Not to Say</option>
										<option value="1">Under $9,525</option>
										<option value="2">$9,525 - $38,699</option>
										<option value="3">$38,700 - $82,499</option>
										<option value="4">$82,500 - $157,499</option>
										<option value="5">$157,500 - $199,999</option>
										<option value="6">$200,000 to $499,999</option>
										<option value="7">Over $500,000</option>
									</select>
								</div>
					
								
					
								<div className="form-group">
									<label htmlFor="inputState">Select Your Region</label>
									<select onChange={this.handleChange} name="region" id="inputState" className="form-control">
										<option value="pns">Prefer Not to Say</option>
										<option value="1">Western</option>
										<option value="2">Mid-Western</option>
										<option value="3">South-Western</option>
										<option value="4">North-Eastern</option>
										<option value="5">South-Eastern</option>
									</select>
								</div>

								<Link to="/region" >
									<button 
										onClick={ () => {this.handleFormSubmit()}} 
										id="submitbtn" type="submit" className="btn btn-primary">
										Submit
									</button>
								</Link>
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
