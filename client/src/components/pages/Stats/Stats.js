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
        // console.log(this.state.yesVoters)
        // console.log(this.state.noVoters)
        // console.log(this.state.undeVoters)
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
          // console.log(this.state.checkCount);
          this.checkCountStatus();
        }

        if (this.state.undeVoters.length > 0) {
          this.getUndeVoters();
        }else {
          let checkCount = ((this.state.checkCount) + 1);
            this.setState({ checkCount });
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
          // console.log(res);
          if (res.data[0]) {
            // console.log(res.data[0]);
  // _____________________ AGE ___________________________
            switch(user.age) {
              case "1":
              yesAge.One.push(user.userId);
              break;

              case "2":
              yesAge.Two.push(user.userId);
              break;

              case "3":
              yesAge.Three.push(user.userId);
              break;

              case "4":
              yesAge.Four.push(user.userId);
              break;

              case "5":
              yesAge.Five.push(user.userId);
              break;

              case "6":
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
              case "1":
              yesInc.One.push(user.userId);
              break;

              case "2":
              yesInc.Two.push(user.userId);
              break;

              case "3":
              yesInc.Three.push(user.userId);
              break;

              case "4":
              yesInc.Four.push(user.userId);
              break;

              case "5":
              yesInc.Five.push(user.userId);
              break;

              case "6":
              yesInc.Six.push(user.userId);
              break;

              case "pns" || "":
              yesInc.pns.push(user.userId);
              break;

              default: 
              yesInc.pns.push(user.userId);
            };
  // _____________________ GENDER ________________________
            switch(user.gender) {
              case "1":
              yesGen.One.push(user.userId);
              break;

              case "2":
              yesGen.Two.push(user.userId);
              break;

              case "3":
              yesGen.Three.push(user.userId);
              break;

              case "4":
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
              case "1":
              yesEdu.One.push(user.userId);
              break;

              case "2":
              yesEdu.Two.push(user.userId);
              break;

              case "3":
              yesEdu.Three.push(user.userId);
              break;

              case "4":
              yesEdu.Four.push(user.userId);
              break;

              case "5":
              yesEdu.Five.push(user.userId);
              break;

              case "6":
              yesEdu.Six.push(user.userId);
              break;

              case "7":
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
              case "1":
              yesRa.One.push(user.userId);
              break;

              case "2":
              yesRa.Two.push(user.userId);
              break;

              case "3":
              yesRa.Three.push(user.userId);
              break;

              case "4":
              yesRa.Four.push(user.userId);
              break;

              case "5":
              yesRa.Five.push(user.userId);
              break;

              case "6":
              yesRa.Six.push(user.userId);
              break;

              case "7":
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
              case "1":
              yesReg.One.push(user.userId);
              break;

              case "2":
              yesReg.Two.push(user.userId);
              break;

              case "3":
              yesReg.Three.push(user.userId);
              break;

              case "4":
              yesReg.Four.push(user.userId);
              break;

              case "5":
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
          };
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
  // _____________________ AGE ___________________________
            switch(user.age) {
              case "1":
              noAge.One.push(user.userId);
              break;

              case "2":
              noAge.Two.push(user.userId);
              break;

              case "3":
              noAge.Three.push(user.userId);
              break;

              case "4":
              noAge.Four.push(user.userId);
              break;

              case "5":
              noAge.Five.push(user.userId);
              break;

              case "6":
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
              case "1":
              noInc.One.push(user.userId);
              break;

              case "2":
              noInc.Two.push(user.userId);
              break;

              case "3":
              noInc.Three.push(user.userId);
              break;

              case "4":
              noInc.Four.push(user.userId);
              break;

              case "5":
              noInc.Five.push(user.userId);
              break;

              case "6":
              noInc.Six.push(user.userId);
              break;

              case "pns" || "":
              noInc.pns.push(user.userId);
              break;

              default: 
              noInc.pns.push(user.userId);
            };
  // _____________________ GENDER ________________________
            switch(user.gender) {
              case "1":
              noGen.One.push(user.userId);
              break;

              case "2":
              noGen.Two.push(user.userId);
              break;

              case "3":
              noGen.Three.push(user.userId);
              break;

              case "4":
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
              case "1":
              noEdu.One.push(user.userId);
              break;

              case "2":
              noEdu.Two.push(user.userId);
              break;

              case "3":
              noEdu.Three.push(user.userId);
              break;

              case "4":
              noEdu.Four.push(user.userId);
              break;

              case "5":
              noEdu.Five.push(user.userId);
              break;

              case "6":
              noEdu.Six.push(user.userId);
              break;

              case "7":
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
              case "1":
              noRa.One.push(user.userId);
              break;

              case "2":
              noRa.Two.push(user.userId);
              break;

              case "3":
              noRa.Three.push(user.userId);
              break;

              case "4":
              noRa.Four.push(user.userId);
              break;

              case "5":
              noRa.Five.push(user.userId);
              break;

              case "6":
              noRa.Six.push(user.userId);
              break;

              case "7":
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
              case "1":
              noReg.One.push(user.userId);
              break;

              case "2":
              noReg.Two.push(user.userId);
              break;

              case "3":
              noReg.Three.push(user.userId);
              break;

              case "4":
              noReg.Four.push(user.userId);
              break;

              case "5":
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
          };
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
  // _____________________ AGE ___________________________
            switch(user.age) {
              case "1":
              undeAge.One.push(user.userId);
              break;

              case "2":
              undeAge.Two.push(user.userId);
              break;

              case "3":
              undeAge.Three.push(user.userId);
              break;

              case "4":
              undeAge.Four.push(user.userId);
              break;

              case "5":
              undeAge.Five.push(user.userId);
              break;

              case "6":
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
              case "1":
              undeInc.One.push(user.userId);
              break;

              case "2":
              undeInc.Two.push(user.userId);
              break;

              case "3":
              undeInc.Three.push(user.userId);
              break;

              case "4":
              undeInc.Four.push(user.userId);
              break;

              case "5":
              undeInc.Five.push(user.userId);
              break;

              case "6":
              undeInc.Six.push(user.userId);
              break;

              case "pns" || "":
              undeInc.pns.push(user.userId);
              break;

              default: 
              undeInc.pns.push(user.userId);
            };
  // _____________________ GENDER ________________________
            switch(user.gender) {
              case "1":
              undeGen.One.push(user.userId);
              break;

              case "2":
              undeGen.Two.push(user.userId);
              break;

              case "3":
              undeGen.Three.push(user.userId);
              break;

              case "4":
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
              case "1":
              undeEdu.One.push(user.userId);
              break;

              case "2":
              undeEdu.Two.push(user.userId);
              break;

              case "3":
              undeEdu.Three.push(user.userId);
              break;

              case "4":
              undeEdu.Four.push(user.userId);
              break;

              case "5":
              undeEdu.Five.push(user.userId);
              break;

              case "6":
              undeEdu.Six.push(user.userId);
              break;

              case "7":
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
              case "1":
              undeRa.One.push(user.userId);
              break;

              case "2":
              undeRa.Two.push(user.userId);
              break;

              case "3":
              undeRa.Three.push(user.userId);
              break;

              case "4":
              undeRa.Four.push(user.userId);
              break;

              case "5":
              undeRa.Five.push(user.userId);
              break;

              case "6":
              undeRa.Six.push(user.userId);
              break;

              case "7":
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
              case "1":
              undeReg.One.push(user.userId);
              break;

              case "2":
              undeReg.Two.push(user.userId);
              break;

              case "3":
              undeReg.Three.push(user.userId);
              break;

              case "4":
              undeReg.Four.push(user.userId);
              break;

              case "5":
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
          };
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
          'Under 18yrs', 
          '18-34yrs', 
          '35-50yrs', 
          '51-69yrs', 
          '70-87yrs', 
          '88+yrs', 
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
          '<$9,524', 
          '<$38,699', 
          '<$82,499', 
          '<$157,499', 
          '<$199,999', 
          '<$499,999', 
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