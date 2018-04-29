import React, { Component } from 'react';
import './Stats.css';
import API from "../../../utils/API.js";
import Chart from '../../Chart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkCount: 0,
      stateUpdated: false,

      bill_id: this.props.match.params.bill_id,
      yesVoters: [0,0,0,0,0,0,0],
      noVoters: [0,0,0,0,0,0,0],
      undeVoters: [0,0,0,0,0,0,0],

      chartDataAge:{},
      ageYes: [],
      ageNo: [],
      ageUnde: [],

      chartDataIncome:{},
      incYes: [],
      incNo: [],
      incUnde: [],

      chartDataGender:{},
      genYes: [],
      genNo: [],
      genUnde: [],
      
      chartDataEducation:{},
      eduYes: [],
      eduNo: [],
      eduUnde: [],

      chartDataRace:{},
      raYes: [],
      raNo: [],
      raUnde: [],

      chartDataRegion:{},
      regYes: [],
      regNo: [],
      regUnde: []
    }
  }

  componentWillMount() {
    this.getBill();
  }

  getBill() {
    API.checkBill(this.state.bill_id)
      .then(res => {
        this.setState({ 
          yesVoters: res.data[0].votes_yes,
          noVoters: res.data[0].votes_no,
          undeVoters: res.data[0].votes_undecided
        });
        // console.log(res.data[0]);
        // console.log(this.state.yesVoters);
        // console.log(this.state.noVoters);
        // console.log(this.state.undeVoters);
        if (this.state.yesVoters.length > 0) {
          this.getYesVoters();
        }else {
          let checkCount = ((this.state.checkCount) + 1);
          this.setState({ checkCount });
          // console.log(this.state.checkCount);
          this.checkCountStatus();
        }

        if (this.state.noVoters.length > 0) {
          this.getNoVoters();
        }else {
          let checkCount = ((this.state.checkCount) + 1);
          this.setState({ checkCount });
          // console.log("No Switch");
          // console.log(this.state.checkCount);
          this.checkCountStatus();
        }

        if (this.state.undeVoters.length > 0) {
          this.getUndeVoters();
        }else {
          let checkCount = ((this.state.checkCount) + 1);
            this.setState({ checkCount });
          // console.log("Unde Switch");
            // console.log(this.state.checkCount);
            this.checkCountStatus();
        }
      })
  }

  getYesVoters() {
    // console.log("getting yessers");
    let yesAge = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      Five: [],
      Six: [],
      pns: []
    };
    let yesInc = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      Five: [],
      Six: [],
      Seven: [],
      pns: []
    };
    let yesGen = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      pns: []
    };
    let yesEdu = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      Five: [],
      Six: [],
      Seven: [],
      pns: []
    };
    let yesRa = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      Five: [],
      Six: [],
      Seven: [],
      pns: []
    };
    let yesReg = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      Five: [],
      pns: []
    };

    for (let i = 0; i < this.state.yesVoters.length; i++) {
      // console.log("calling API");
      API.getUser(this.state.yesVoters[i])
        .then(res => {
          let user = res.data[0];
          // console.log(this.state.yesVoters);
          // console.log(i);
          // console.log(res);
          if (res.data[0]) {
            // console.log(res.data[0]);
  // _____________________ AGE ___________________________
            switch(user.age) {
              case "one":
              yesAge.One.push(user.userId);
              break;

              case "two":
              yesAge.Two.push(user.userId);
              break;

              case "three":
              yesAge.Three.push(user.userId);
              break;

              case "four":
              yesAge.Four.push(user.userId);
              break;

              case "five":
              yesAge.Five.push(user.userId);
              break;

              case "six":
              yesAge.Six.push(user.userId);
              break;

              case "pns" || "":
              yesAge.pns.push(user.userId);
              break;

              default: 
              yesAge.pns.push(user.userId);
            };
  // _____________________ INCOME ________________________
            switch(user.income) {
              case "one":
              yesInc.One.push(user.userId);
              break;

              case "two":
              yesInc.Two.push(user.userId);
              break;

              case "three":
              yesInc.Three.push(user.userId);
              break;

              case "four":
              yesInc.Four.push(user.userId);
              break;

              case "five":
              yesInc.Five.push(user.userId);
              break;

              case "six":
              yesInc.Six.push(user.userId);
              break;

              case "seven":
              yesInc.Seven.push(user.userId);
              break;

              case "pns" || "":
              yesInc.pns.push(user.userId);
              break;

              default: 
              yesInc.pns.push(user.userId);
            };
  // _____________________ GENDER ________________________
            switch(user.gender) {
              case "one":
              yesGen.One.push(user.userId);
              break;

              case "two":
              yesGen.Two.push(user.userId);
              break;

              case "three":
              yesGen.Three.push(user.userId);
              break;

              case "four":
              yesGen.Four.push(user.userId);
              break;

              case "pns" || "":
              yesGen.pns.push(user.userId);
              break;

              default: 
              yesGen.pns.push(user.userId);
            };
  // _____________________ EDUCATION _____________________
            switch(user.education) {
              case "one":
              yesEdu.One.push(user.userId);
              break;

              case "two":
              yesEdu.Two.push(user.userId);
              break;

              case "three":
              yesEdu.Three.push(user.userId);
              break;

              case "four":
              yesEdu.Four.push(user.userId);
              break;

              case "five":
              yesEdu.Five.push(user.userId);
              break;

              case "six":
              yesEdu.Six.push(user.userId);
              break;

              case "seven":
              yesEdu.Seven.push(user.userId);
              break;

              case "pns" || "":
              yesEdu.pns.push(user.userId);
              break;

              default: 
              yesEdu.pns.push(user.userId);
            };
  // _____________________ RACE __________________________
            switch(user.race) {
              case "one":
              yesRa.One.push(user.userId);
              break;

              case "two":
              yesRa.Two.push(user.userId);
              break;

              case "three":
              yesRa.Three.push(user.userId);
              break;

              case "four":
              yesRa.Four.push(user.userId);
              break;

              case "five":
              yesRa.Five.push(user.userId);
              break;

              case "six":
              yesRa.Six.push(user.userId);
              break;

              case "seven":
              yesRa.Seven.push(user.userId);
              break;

              case "pns" || "":
              yesRa.pns.push(user.userId);
              break;

              default: 
              yesRa.pns.push(user.userId);
            };
  // _____________________ REGION ________________________
            switch(user.region) {
              case "one":
              yesReg.One.push(user.userId);
              break;

              case "two":
              yesReg.Two.push(user.userId);
              break;

              case "three":
              yesReg.Three.push(user.userId);
              break;

              case "four":
              yesReg.Four.push(user.userId);
              break;

              case "five":
              yesReg.Five.push(user.userId);
              break;

              case "pns" || "":
              yesReg.pns.push(user.userId);
              break;

              default: 
              yesReg.pns.push(user.userId);
            };
          
            // console.log("setState for ageYes array.");
            this.setState({ 
              ageYes: [ 
                yesAge.One.length, 
                yesAge.Two.length, 
                yesAge.Three.length,
                yesAge.Four.length,
                yesAge.Five.length,
                yesAge.Six.length,
                yesAge.pns.length
              ],
              incYes: [ 
                yesInc.One.length, 
                yesInc.Two.length, 
                yesInc.Three.length,
                yesInc.Four.length,
                yesInc.Five.length,
                yesInc.Six.length,
                yesInc.Seven.length,
                yesInc.pns.length
              ],
              genYes: [ 
                yesGen.One.length, 
                yesGen.Two.length, 
                yesGen.Three.length,
                yesGen.Four.length,
                yesGen.pns.length
              ],
              eduYes: [ 
                yesEdu.One.length, 
                yesEdu.Two.length, 
                yesEdu.Three.length,
                yesEdu.Four.length,
                yesEdu.Five.length,
                yesEdu.Six.length,
                yesEdu.Seven.length,
                yesEdu.pns.length
              ],
              raYes: [ 
                yesRa.One.length, 
                yesRa.Two.length, 
                yesRa.Three.length,
                yesRa.Four.length,
                yesRa.Five.length,
                yesRa.Six.length,
                yesRa.Seven.length,
                yesRa.pns.length
              ],
              regYes: [ 
                yesReg.One.length, 
                yesReg.Two.length, 
                yesReg.Three.length,
                yesReg.Four.length,
                yesReg.Five.length,
                yesReg.pns.length
              ]
            })
            // console.log(yesAge.One);
            // console.log(yesAge.One.length);
            // console.log(this.state.ageYes);
            if (i === (this.state.yesVoters.length) - 1) {
              let checkCount = ((this.state.checkCount) + 1);
              this.setState({ checkCount });
              // console.log("Loop Done");
              // console.log(checkCount);
              // console.log(this.state.checkCount);
              this.checkCountStatus();
            };
          }else {
            if (i === (this.state.undeVoters.length) - 1) {
              let checkCount = ((this.state.checkCount) + 1);
              this.setState({ checkCount });
              // console.log("No user found");
              // console.log(checkCount);
              // console.log(this.state.checkCount);
              this.checkCountStatus();
            }
          }
        })
    }
  // _____________________ TESTS _________________________
    // console.log("age");
    // console.log(yesAge);
    // console.log("income");
    // console.log(yesInc);
    // console.log("gender");
    // console.log(yesGen);
    // console.log("education");
    // console.log(yesEdu);
    // console.log("race");
    // console.log(yesRa);
    // console.log("region");
    // console.log(yesReg);
  };

  getNoVoters() {
    // console.log("getting noers");
    let noAge = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      Five: [],
      Six: [],
      pns: []
    };
    let noInc = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      Five: [],
      Six: [],
      Seven: [],
      pns: []
    };
    let noGen = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      pns: []
    };
    let noEdu = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      Five: [],
      Six: [],
      Seven: [],
      pns: []
    };
    let noRa = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      Five: [],
      Six: [],
      Seven: [],
      pns: []
    };
    let noReg = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      Five: [],
      pns: []
    };

    for (let i = 0; i < this.state.noVoters.length; i++) {
      // console.log("calling API");
      // console.log(this.state.noVoters[i]);
      API.getUser(this.state.noVoters[i])
        .then(res => {
          let user = res.data[0];
          // console.log(res);
          if (res.data[0]) {
            // console.log(res.data[0])
  // _____________________ AGE ___________________________
            switch(user.age) {
              case "one":
              noAge.One.push(user.userId);
              break;

              case "two":
              noAge.Two.push(user.userId);
              break;

              case "three":
              noAge.Three.push(user.userId);
              break;

              case "four":
              noAge.Four.push(user.userId);
              break;

              case "five":
              noAge.Five.push(user.userId);
              break;

              case "six":
              noAge.Six.push(user.userId);
              break;

              case "pns" || "":
              noAge.pns.push(user.userId);
              break;

              default: 
              noAge.pns.push(user.userId);
            };
  // _____________________ INCOME ________________________
            switch(user.income) {
              case "one":
              noInc.One.push(user.userId);
              break;

              case "two":
              noInc.Two.push(user.userId);
              break;

              case "three":
              noInc.Three.push(user.userId);
              break;

              case "four":
              noInc.Four.push(user.userId);
              break;

              case "five":
              noInc.Five.push(user.userId);
              break;

              case "six":
              noInc.Six.push(user.userId);
              break;

              case "seven":
              noInc.Seven.push(user.userId);
              break;

              case "pns" || "":
              noInc.pns.push(user.userId);
              break;

              default: 
              noInc.pns.push(user.userId);
            };
  // _____________________ GENDER ________________________
            switch(user.gender) {
              case "one":
              noGen.One.push(user.userId);
              break;

              case "two":
              noGen.Two.push(user.userId);
              break;

              case "three":
              noGen.Three.push(user.userId);
              break;

              case "four":
              noGen.Four.push(user.userId);
              break;

              case "pns" || "":
              noGen.pns.push(user.userId);
              break;

              default: 
              noGen.pns.push(user.userId);
            };
  // _____________________ EDUCATION _____________________
            switch(user.education) {
              case "one":
              noEdu.One.push(user.userId);
              break;

              case "two":
              noEdu.Two.push(user.userId);
              break;

              case "three":
              noEdu.Three.push(user.userId);
              break;

              case "four":
              noEdu.Four.push(user.userId);
              break;

              case "five":
              noEdu.Five.push(user.userId);
              break;

              case "six":
              noEdu.Six.push(user.userId);
              break;

              case "seven":
              noEdu.Seven.push(user.userId);
              break;

              case "pns" || "":
              noEdu.pns.push(user.userId);
              break;

              default: 
              noEdu.pns.push(user.userId);
            };
  // _____________________ RACE __________________________
            switch(user.race) {
              case "one":
              noRa.One.push(user.userId);
              break;

              case "two":
              noRa.Two.push(user.userId);
              break;

              case "three":
              noRa.Three.push(user.userId);
              break;

              case "four":
              noRa.Four.push(user.userId);
              break;

              case "five":
              noRa.Five.push(user.userId);
              break;

              case "six":
              noRa.Six.push(user.userId);
              break;

              case "seven":
              noRa.Seven.push(user.userId);
              break;

              case "pns" || "":
              noRa.pns.push(user.userId);
              break;

              default: 
              noRa.pns.push(user.userId);
            };
  // _____________________ REGION ________________________
            switch(user.region) {
              case "one":
              noReg.One.push(user.userId);
              break;

              case "two":
              noReg.Two.push(user.userId);
              break;

              case "three":
              noReg.Three.push(user.userId);
              break;

              case "four":
              noReg.Four.push(user.userId);
              break;

              case "five":
              noReg.Five.push(user.userId);
              break;

              case "pns" || "":
              noReg.pns.push(user.userId);
              break;

              default: 
              noReg.pns.push(user.userId);
            };
            // console.log("setState for ageNo array.")
            this.setState({ 
              ageNo: [ 
                noAge.One.length, 
                noAge.Two.length, 
                noAge.Three.length,
                noAge.Four.length,
                noAge.Five.length,
                noAge.Six.length,
                noAge.pns.length
              ],
              incNo: [ 
                noInc.One.length, 
                noInc.Two.length, 
                noInc.Three.length,
                noInc.Four.length,
                noInc.Five.length,
                noInc.Six.length,
                noInc.Seven.length,
                noInc.pns.length
              ],
              genNo: [ 
                noGen.One.length, 
                noGen.Two.length, 
                noGen.Three.length,
                noGen.Four.length,
                noGen.pns.length
              ],
              eduNo: [ 
                noEdu.One.length, 
                noEdu.Two.length, 
                noEdu.Three.length,
                noEdu.Four.length,
                noEdu.Five.length,
                noEdu.Six.length,
                noEdu.Seven.length,
                noEdu.pns.length
              ],
              raNo: [ 
                noRa.One.length, 
                noRa.Two.length, 
                noRa.Three.length,
                noRa.Four.length,
                noRa.Five.length,
                noRa.Six.length,
                noRa.Seven.length,
                noRa.pns.length
              ],
              regNo: [ 
                noReg.One.length, 
                noReg.Two.length, 
                noReg.Three.length,
                noReg.Four.length,
                noReg.Five.length,
                noReg.pns.length
              ]
            })
            // console.log(noAge.One);
            // console.log(noAge.One.length);
            // console.log(this.state.ageNo);
            if (i === (this.state.noVoters.length) - 1) {
              let checkCount = ((this.state.checkCount) + 1);
              this.setState({ checkCount });
              // console.log("Loop Done");
              // console.log(checkCount);
              // console.log(this.state.checkCount);
              this.checkCountStatus();
            }
          }else {
            if (i === (this.state.undeVoters.length) - 1) {
              let checkCount = ((this.state.checkCount) + 1);
              this.setState({ checkCount });
              // console.log("No user found");
              // console.log(checkCount);
              // console.log(this.state.checkCount);
              this.checkCountStatus();
            }
          }
        })
    }
  // _____________________ TESTS _________________________
    // console.log("age");
    // console.log(noAge);
    // console.log("income");
    // console.log(noInc);
    // console.log("gender");
    // console.log(noGen);
    // console.log("education");
    // console.log(noEdu);
    // console.log("race");
    // console.log(noRa);
    // console.log("region");
    // console.log(noReg)
  };

  getUndeVoters() {
    // console.log("getting undeVoters");
    let undeAge = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      Five: [],
      Six: [],
      pns: []
    };
    let undeInc = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      Five: [],
      Six: [],
      Seven: [],
      pns: []
    };
    let undeGen = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      pns: []
    };
    let undeEdu = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      Five: [],
      Six: [],
      Seven: [],
      pns: []
    };
    let undeRa = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      Five: [],
      Six: [],
      Seven: [],
      pns: []
    };
    let undeReg = {
      One: [],
      Two: [],
      Three: [],
      Four: [],
      Five: [],
      pns: []
    };

    for (let i = 0; i < this.state.undeVoters.length; i++) {
      // console.log("calling API");
      API.getUser(this.state.undeVoters[i])
        .then(res => {
          let user = res.data[0];
          // console.log(res);
          if (res.data[0]) {
            // console.log(res.data[0])
  // _____________________ AGE ___________________________
            switch(user.age) {
              case "one":
              undeAge.One.push(user.userId);
              break;

              case "two":
              undeAge.Two.push(user.userId);
              break;

              case "three":
              undeAge.Three.push(user.userId);
              break;

              case "four":
              undeAge.Four.push(user.userId);
              break;

              case "five":
              undeAge.Five.push(user.userId);
              break;

              case "six":
              undeAge.Six.push(user.userId);
              break;

              case "pns" || "":
              undeAge.pns.push(user.userId);
              break;

              default: 
              undeAge.pns.push(user.userId);
            };
  // _____________________ INCOME ________________________
            switch(user.income) {
              case "one":
              undeInc.One.push(user.userId);
              break;

              case "two":
              undeInc.Two.push(user.userId);
              break;

              case "three":
              undeInc.Three.push(user.userId);
              break;

              case "four":
              undeInc.Four.push(user.userId);
              break;

              case "five":
              undeInc.Five.push(user.userId);
              break;

              case "six":
              undeInc.Six.push(user.userId);
              break;

              case "seven":
              undeInc.Seven.push(user.userId);
              break;

              case "pns" || "":
              undeInc.pns.push(user.userId);
              break;

              default: 
              undeInc.pns.push(user.userId);
            };
  // _____________________ GENDER ________________________
            switch(user.gender) {
              case "one":
              undeGen.One.push(user.userId);
              break;

              case "two":
              undeGen.Two.push(user.userId);
              break;

              case "three":
              undeGen.Three.push(user.userId);
              break;

              case "four":
              undeGen.Four.push(user.userId);
              break;

              case "pns" || "":
              undeGen.pns.push(user.userId);
              break;

              default: 
              undeGen.pns.push(user.userId);
            };
  // _____________________ EDUCATION _____________________
            switch(user.education) {
              case "one":
              undeEdu.One.push(user.userId);
              break;

              case "two":
              undeEdu.Two.push(user.userId);
              break;

              case "three":
              undeEdu.Three.push(user.userId);
              break;

              case "four":
              undeEdu.Four.push(user.userId);
              break;

              case "five":
              undeEdu.Five.push(user.userId);
              break;

              case "six":
              undeEdu.Six.push(user.userId);
              break;

              case "seven":
              undeEdu.Seven.push(user.userId);
              break;

              case "pns" || "":
              undeEdu.pns.push(user.userId);
              break;

              default: 
              undeEdu.pns.push(user.userId);
            };
  // _____________________ RACE __________________________
            switch(user.race) {
              case "one":
              undeRa.One.push(user.userId);
              break;

              case "two":
              undeRa.Two.push(user.userId);
              break;

              case "three":
              undeRa.Three.push(user.userId);
              break;

              case "four":
              undeRa.Four.push(user.userId);
              break;

              case "five":
              undeRa.Five.push(user.userId);
              break;

              case "six":
              undeRa.Six.push(user.userId);
              break;

              case "seven":
              undeRa.Seven.push(user.userId);
              break;

              case "pns" || "":
              undeRa.pns.push(user.userId);
              break;

              default: 
              undeRa.pns.push(user.userId);
            };
  // _____________________ REGION ________________________
            switch(user.region) {
              case "one":
              undeReg.One.push(user.userId);
              break;

              case "two":
              undeReg.Two.push(user.userId);
              break;

              case "three":
              undeReg.Three.push(user.userId);
              break;

              case "four":
              undeReg.Four.push(user.userId);
              break;

              case "five":
              undeReg.Five.push(user.userId);
              break;

              case "pns" || "":
              undeReg.pns.push(user.userId);
              break;

              default: 
              undeReg.pns.push(user.userId);
            };

            // console.log("setState for ageUnde array.")
            this.setState({ 
              ageUnde: [ 
                undeAge.One.length, 
                undeAge.Two.length, 
                undeAge.Three.length,
                undeAge.Four.length,
                undeAge.Five.length,
                undeAge.Six.length,
                undeAge.pns.length
              ],
              incUnde: [ 
                undeInc.One.length, 
                undeInc.Two.length, 
                undeInc.Three.length,
                undeInc.Four.length,
                undeInc.Five.length,
                undeInc.Six.length,
                undeInc.Seven.length,
                undeInc.pns.length
              ],
              genUnde: [ 
                undeGen.One.length, 
                undeGen.Two.length, 
                undeGen.Three.length,
                undeGen.Four.length,
                undeGen.pns.length
              ],
              eduUnde: [ 
                undeEdu.One.length, 
                undeEdu.Two.length, 
                undeEdu.Three.length,
                undeEdu.Four.length,
                undeEdu.Five.length,
                undeEdu.Six.length,
                undeEdu.Seven.length,
                undeEdu.pns.length
              ],
              raUnde: [ 
                undeRa.One.length, 
                undeRa.Two.length, 
                undeRa.Three.length,
                undeRa.Four.length,
                undeRa.Five.length,
                undeRa.Six.length,
                undeRa.Seven.length,
                undeRa.pns.length
              ],
              regUnde: [ 
                undeReg.One.length, 
                undeReg.Two.length, 
                undeReg.Three.length,
                undeReg.Four.length,
                undeReg.Five.length,
                undeReg.pns.length
              ]
            })
            // console.log(undeAge.One);
            // console.log(undeAge.One.length);
            // console.log(this.state.ageUnde);
            if (i === (this.state.undeVoters.length) - 1) {
              let checkCount = ((this.state.checkCount) + 1);
              this.setState({ checkCount });
              // console.log("Loop Done");
              // console.log(checkCount);
              // console.log(this.state.checkCount);
              this.checkCountStatus();
            }
          }else {
            if (i === (this.state.undeVoters.length) - 1) {
              let checkCount = ((this.state.checkCount) + 1);
              this.setState({ checkCount });
              // console.log("No user found");
              // console.log(checkCount);
              // console.log(this.state.checkCount);
              this.checkCountStatus();
            }
          }
        })
    }
  // _____________________ TESTS _________________________
    // console.log("age");
    // console.log(undeAge);
    // console.log("income");
    // console.log(undeInc);
    // console.log("gender");
    // console.log(undeGen);
    // console.log("education");
    // console.log(undeEdu);
    // console.log("race");
    // console.log(undeRa);
    // console.log("region");
    // console.log(undeReg);
  }

  checkCountStatus() {
    // console.log(this.state.checkCount);
    if (this.state.checkCount === 3){
      // console.log("Check count at 3");
      this.dotThenFuncs();
    }
  }

  dotThenFuncs() {
    this.getChartDataAge();
    this.getChartDataIncome();
    this.getChartDataGender();
    this.getChartDataEducation();
    this.getChartDataRace();
    this.getChartDataRegion();
  }

  getChartDataAge() {
    this.setState({
      chartDataAge:{
        labels: [
          '16-22', 
          '22-34', 
          '35-44', 
          '45-54', 
          '55-64', 
          '65+', 
          'No Answer'
          ],
        datasets:[
          {
            label:'Yes',
            data: this.state.ageYes,

           
            backgroundColor:[
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)'
            ]
          },

          {
            label:'No',
            data: this.state.ageNo,
            backgroundColor:[
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)'
            ]
          },

           {
            label:'Undecided',
            data: this.state.ageUnde,
            backgroundColor:[
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)'
            ]
          }
        ]
      }
    });
    // console.log("1");
  }

  getChartDataIncome() {
    this.setState({
      chartDataIncome:{
        labels: [
          '<$9,525', 
          '<$38,699', 
          '<$82,499', 
          '<$157,499', 
          '<$199,999', 
          '<$499,999', 
          '$500,000+',
          'No Answer' 
          ],
        datasets:[
          {
            label:'Yes',
            data: this.state.incYes,
            backgroundColor:[
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)'
            ]
          },

          {
            label:'No',
            data: this.state.incNo,
            backgroundColor:[
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)'
            ]
          },

           {
            label:'Undecided',
            data: this.state.incUnde,
            backgroundColor:[
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)'
            ]
          }
        ]
      }
    });
    // console.log("2");
  }

  getChartDataGender() {
    this.setState({
      chartDataGender:{
        labels: [
          'Male', 
          'Female', 
          'Trans', 
          'Other', 
          'No Answer' 
          ],
        datasets:[
          {
            label:'Yes',
            data: this.state.genYes,
            backgroundColor:[
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)'
            ]
          },

          {
            label:'No',
            data: this.state.genNo,
            backgroundColor:[
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)'
            ]
          },

           {
            label:'Undecided',
            data: this.state.genUnde,
            backgroundColor:[
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)'
            ]
          }
        ]
      }
    });
    // console.log("3");
  }

  getChartDataEducation() {
    this.setState({
      chartDataEducation:{
        labels: [
          'Some HS', 
          'HS Dip/Equiv', 
          'Voc/Trade', 
          'Some Coll', 
          'Undergrad', 
          'Grad', 
          'Postgrad',
          'No Answer' 
          ],
        datasets:[
          {
            label:'Yes',
            data: this.state.eduYes,
            backgroundColor:[
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)'
            ]
          },

          {
            label:'No',
            data: this.state.eduNo,
            backgroundColor:[
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)'
            ]
          },

           {
            label:'Undecided',
            data: this.state.eduUnde,
            backgroundColor:[
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)'
            ]
          }
        ]
      }
    });
    // console.log("4");
  }

  getChartDataRace() {
    this.setState({
      chartDataRace:{
        labels: [
          'Am. In./AK Nat', 
          'Asian', 
          'Blk/Af Am.',
          'His/Lat', 
          'White', 
          'Mixed', 
          'Pac Isl', 
          'No Answer' 
          ],
        datasets:[
          {
            label:'Yes',
            data: this.state.raYes,
            backgroundColor:[
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)'
            ]
          },

          {
            label:'No',
            data: this.state.raNo,
            backgroundColor:[
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)'
            ]
          },

           {
            label:'Undecided',
            data: this.state.raUnde,
            backgroundColor:[
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)'
            ]
          }
        ]
      }
    });
    // console.log("5");
  }

  getChartDataRegion() {
    this.setState({
      chartDataRegion:{
        labels: [
          'Western', 
          'Mid-West', 
          'South-West', 
          'North-East', 
          'South-East', 
          'No Answer' 
          ],
        datasets:[
          {
            label:'Yes',
            data: this.state.regYes,
            backgroundColor:[
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)',
              'rgba(0, 123, 255, 1)'
            ]
          },

          {
            label:'No',
            data: this.state.regNo,
            backgroundColor:[
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(251, 34, 89, 1)'
            ]
          },

           {
            label:'Undecided',
            data: this.state.regUnde,
            backgroundColor:[
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)',
              'rgba(255, 240, 200, 1)'
            ]
          }
        ]
      }
    });
    this.setState({ stateUpdated: true });
    // console.log("done");
    // console.log(this.state.stateUpdated);
  }


  render() {
    return (
      <div className="App container">
              <div className="App container">
                <div className="row">
                  <div className="col-md-12">
                  {
                    (this.state.stateUpdated) ?
                      (
                        <div>
                        <div className="row">
                          <div className="AgeChart col-6">
                            <Chart chartData={this.state.chartDataAge} location="Age" legendPosition="bottom"/>
                          </div>

                          <div className="IncomeChart col-6">
                            <Chart chartData={this.state.chartDataIncome} location="Income" legendPosition="bottom"/>
                          </div>
                        </div>

                        <div className="row">
                          <div className="GenderChart col-6">
                              <Chart chartData={this.state.chartDataGender} location="Gender" legendPosition="bottom"/>
                          </div>

                          <div className="RegionChart col-6">
                            <Chart chartData={this.state.chartDataRegion} location="Region" legendPosition="bottom"/>
                          </div>
                        </div>
                        
                        <div className="row">
                          <div className="EducationChart col-6">
                            <Chart chartData={this.state.chartDataEducation} location="Education" legendPosition="bottom"/>
                          </div>
                    
                          <div className="RaceChart col-6">
                            <Chart chartData={this.state.chartDataRace} location="Race" legendPosition="bottom"/>
                          </div>
                        </div>
                        </div>
                    )
                    :
                    (<h4>Loading...</h4>)
                  }
                  </div>
                </div>
              </div>

    </div>
    );
  }
}

export default App;