import React from 'react';
import './Vote.css';

class Vote extends React.Component {

  constructor(props){
    super(props);
    this.state = {   
      isLoggedIn: this.props.isLoggedIn
    }
  }
  
  componentDidMount(){
    let loggedIn = JSON.parse(window.sessionStorage.getItem("loggedIn"));
    
    if (loggedIn) {
      this.setState({ isLoggedIn: true });
    }
    // console.log(this.props)
  }

  render() {

      return (
       
        <div className="col-md-6 mx-auto voteBlock">
            {
            (!this.state.isLoggedIn) ? 
              <div className=" loggedOut">
                <h4>Login To Vote</h4>
              </div>
            : [
                (!this.props.voted) 
                  ? (
                      <div className="loggedIn">
                  <button onClick={this.props.voteYes} className="btn btn-success btn-yes">YES</button>
                  <button onClick={this.props.voteNo} className="btn btn-danger btn-no">NO</button>
                  <button onClick={this.props.voteUndecided} className="btn btn-secondary btn-maybe">UNDECIDED</button>
                </div>)
                  : (<div>
                      <h4>Thanks for voting!</h4>
                    </div>)
              ]
            }
            <div>
              {this.props.children}
            </div>
        </div>
      )
    }
  }
  
  export default Vote;
