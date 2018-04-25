import React from 'react';
import './About.css';
import Wrapper from "../../Wrapper";

const About = (props) => (
	<Wrapper>
	<h1>About</h1>
		<div id="accordion">

			<div class="card">
				<div class="card-header">
					<a class="card-link" data-toggle="collapse" href="#collapseOne">
						About Vote.ly
                </a>
				</div>
				<div id="collapseOne" class="collapse show" data-parent="#accordion">
					<div class="card-body">
						<p>	
						Representative democracy made the most sense when people were not physically able to vote on every issue. It was once hard to research a topic and become truly informed. Times have changed! These days everybody is walking around with a portable voting machine in their pocket and information has never been more accessible. Vote.ly aims to bring true democracy back to the people. Sign in with google, and fill out a short demographics form. Your information will be kept completely private. Select your region to see current bills you care about on city, state, and federal levels. Choose the bills you want to vote on and click in for greater detail. Vote to see how the people really feel!
                    </p>

					</div>
				</div>
			</div>

			<div class="card">
				<div class="card-header">
					<a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
						Privacy
                </a>
				</div>
				<div id="collapseTwo" class="collapse" data-parent="#accordion">
					<div class="card-body">
						<p>We ask for the login and demographics so those looking for more information on the bill
						can get a more accurate pulse on the country. That being said, your information will never
                    be shared with a third-party for any reason.</p>
					</div>
				</div>
			</div>

			<div class="card">
				<div class="card-header">
					<a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
						Authors
                </a>
				</div>
				<div id="collapseThree" class="collapse" data-parent="#accordion">
					<div class="card-body">
						<ul>
							<li>Ryan Brownlow</li>
							<li>Frank Valdez</li>
							<li>Jason Kunkel</li>
							<li>Daniel Murray</li>
							<li>Abdel Rahman</li>
							<li>David Morrill</li>
						</ul>
					</div>
				</div>
			</div>
		</div>


	</Wrapper>
) 
export default About;