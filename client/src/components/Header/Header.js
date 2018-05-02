import React from 'react';
import './Header.css';
import LoginControl from "../LoginControl";
import logo from "./logo-white.png";


const Header = (props) => (
	<nav className="navbar navbar-expand-sm navbar-dark noPad">
		<a className="navbar-brand noMarg noPad" href="/">
			<img src={logo} alt="Democracy app logo"/>
		</a>

		<button className="navbar-toggler" type="button" data-toggle="collapse" 
			data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
			aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>

		<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav ml-auto">
				{props.isLoggedIn && props.userExist && props.newDems ?
					(<li className="nav-item"><a className="nav-link active noMarg" href="/demoform">Me</a></li>)
					:
					(<p className="showNone"></p>)
				}
				{!props.isLoggedIn ?
					(<li className="nav-item"><a className="nav-link active noMarg" href="/bills">Bills</a></li>)
					:
					(<p className="showNone"></p>)
				}
				{!props.isLoggedIn ?
					(<li className="nav-item"><a className="nav-link active noMarg" href="/about">About</a></li>)
					:
					(<p className="showNone"></p>)
				}
				{props.isLoggedIn && props.userExist && props.newDems ?
					(<li className="nav-item"><a className="nav-link active noMarg" href="/bills">Bills</a></li>)
					:
					(<p className="showNone"></p>)
				}
				{props.isLoggedIn && props.userExist && props.newDems ?
					(<li className="nav-item"><a className="nav-link active noMarg" href="/about">About</a></li>)
					:
					(<p className="showNone"></p>)
				}
				<LoginControl 
					handleLoginClick={props.handleLoginClick}
					handleLogoutClick={props.handleLogoutClick}
					isLoggedIn={props.isLoggedIn}
				/>
			</ul>
		</div>
	</nav>
)
export default Header;