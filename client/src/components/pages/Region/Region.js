import React from 'react';
import './Region.css';
//import Wrapper from "../../Wrapper";

const Region = (props) => (
    <div>
        <div className="jumbotron blue region">
            <h2 className="panel-title">CHOOSE YOUR REGION</h2>
            <div className="row">
                <div className="col-4">
                    <div className="card bill not-active">
                        <a className="nav-link"><span>City(coming soon)</span></a>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card bill not-active">
                        <a className="nav-link"><span>State(coming soon)</span></a>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card bill">
                        <a className="nav-link" href="/bills">Federal</a>
                    </div>
                </div>
            </div>
        </div> 
    </div>
);

export default Region;