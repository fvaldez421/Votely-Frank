import React, { Component } from 'react'
//import axios from 'axios'
import API from "../../utils/API.js"
//import Bills from "../pages/Bills/"
// import bills

//access the bills component and change it .bills to the result of this search bills function. Change bills variable
// from this component


class SearchBar extends Component {
    state = {
        query: '',
        bills: []
    }

    getSearch = () => {
        
        // access the this.state.query

        // make Api.getSearch call and pass the query parameter
        API.searchBills(this.state.query)
            .then(res => {

                const bills = res.data.results[0].bills;
                this.setState(
                    { bills }
                );

                // Log all bills in DB
                for (let i = 0; i < bills.length; i++) {
                    let currentBill = bills[i];
                    // debugger;
                    API.logBills({
                        name: currentBill.title,
                        key: currentBill.bill_id,
                        sponsor_name: currentBill.sponsor_name,
                        sponsor_state: currentBill.sponsor_state,
                        sponsor_party: currentBill.sponsor_party,
                        sponsor_title: currentBill.sponsor_title,
                        sponsor_url: currentBill.sponsor_url,
                        congressdotgov_url: currentBill.congressdotgov_url,
                        govtrack_url: currentBill.govtrack_url,
                        summary_short: currentBill.summary_short,
                        summary: currentBill.summary,
                        active: currentBill.active,
                        introduced_date: currentBill.introduced_date,
                        latest_major_action: currentBill.latest_major_action,
                        latest_major_action_date: currentBill.latest_major_action_date
                    })
                        .then(res => {
                            console.log(res);

                        })
                        .catch(err => console.log(err))
                }

            })
            .catch(err => console.log(err));
        // set bills = result
    }  
    

    handleInputChange = () => {


        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                this.getSearch();
            }
        })
    }

    render() {
        return (
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                {/* <p>{this.state.query}</p> */}
            </form>
        )
    }
}

export default SearchBar