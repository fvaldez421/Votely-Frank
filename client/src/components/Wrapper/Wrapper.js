import React from "react";
import "./Wrapper.css";

const Wrapper = (props) => (
	<div className="container billwrap">
		{props.children}
	</div>
	);

export default Wrapper;