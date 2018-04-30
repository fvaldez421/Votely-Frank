import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/pages/Welcome";
import About from "./components/pages/About";
import Region from "./components/pages/Region";
import Bills from "./components/pages/Bills";
import BillDetail from "./components/pages/BillDetail";
import API from "./utils/API.js";
import DemoForm from "./components/pages/DemoForm";
import Stats from "./components/pages/Stats";

import "./App.css";


class App extends Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { 
      isLoggedIn: false,
      userId: "", 
      userName: "", 
      userExist: false,
      newDems: false 
    };
  }

  componentDidMount() {
    let loginBool = (window.sessionStorage.getItem("loggedIn"));
    let userBool = (window.sessionStorage.getItem("userExist"));

   if (JSON.parse(loginBool) === true) {
      this.setState({ isLoggedIn: true });
      this.handleLoginClick();
      // console.log("logging in!");
    }else {
      this.setState({ isLoggedIn: false });
      // this.handleLogoutClick();
      // console.log(window.sessionStorage.getItem("loggedIn"));
    };
    if (JSON.parse(userBool) === true) {
      this.setState({ userExist: true });
    }else {
      this.setState({ userExist: false });
    };
    // console.log(this.state);
  }
// <<<<<handle change in state, state controls which button is displayed>>>>>
  handleLoginClick(response) {
    if(response) {
      // console.log("finding user, ID: " + response.getId());
      window.sessionStorage.setItem("loggedIn", true);
      window.sessionStorage.setItem("user", response.getId());
      this.setState({ isLoggedIn: true, userId: response.getId(), userName: response.w3.ig });
      this.getUser();
    }
    // console.log(this.state);
  }
  
  handleLogoutClick() {
    this.setState({ isLoggedIn: false, userExist: false, userId: "", userName: "" });
    window.sessionStorage.setItem("loggedIn", false);
    window.sessionStorage.setItem("userExist", false);
    // console.log("logging user out");
    // console.log(this.state);
  }

  getUser(id) {
    // console.log("Get User");
    let userId;
    if (this.state) {
      userId = this.state.userId; 
    }else {
      userId = id;
    };

    API.getUser(userId)
      .then(res => {
        let valueTest = (res.data[0].age).toString();
        let valBool = valueTest.includes(1);
        // console.log(valueTest);
        // console.log(valBool);
        // console.log(res.data[0]);
        if (res.data[0]) {
          // window.sessionStorage.setItem("userExist", true);
          if (this.state){
            this.setState({ userExist: true }); 
            // console.log(this.state.userExist);           
          }
        };
        // if (valBool) {
        //   this.setState({ newDems: false });
        //   console.log(this.state.newDems);
        // }else 
        if (!valBool) {
          this.setState({ newDems: true });
          // console.log(this.state.newDems);
        };
      })
      .catch(err => console.log(err));
  }

  render() {

    return (
      <Router>
        <div>
          <Header 
            handleLoginClick={this.handleLoginClick}
            handleLogoutClick={this.handleLogoutClick}
            isLoggedIn={this.state.isLoggedIn}
            userId={this.state.userId}
            userExist={this.state.userExist}
            newDems={this.state.newDems}
            getUser={this.getUser()}
          />
          <Route exact path="/" 
            render={() => this.state.isLoggedIn ? 
              [ 
                (this.state.userExist && this.state.newDems) 
                ? <Redirect to="/region" /> 
                : <DemoForm 
                  userId={this.state.userId} 
                  userName={this.state.userName}
                  userExist={this.state.userExist}
                  getUser={this.getUser} /> 
              ] : <Welcome />
            }
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/region" component={Region} />
          <Route exact path="/bills" component={Bills} />
          <Route exact path="/demoform" 
            render={(props) => (
              <DemoForm 
                userId={this.state.userId} 
                userExist={this.state.userExist} 
                {...props} />
              )} 
          />
          <Route path="/billdetail/:bill_id" 
            render={(props) => (
              <BillDetail 
                userId={this.state.userId} 
                isLoggedIn={this.state.isLoggedIn}
                {...props} />
              )} 
          />
          <Route path="/stats/:bill_id" component={Stats} />

          <Footer/>

        </div>
      </Router>
    )
  }
}


export default App;
