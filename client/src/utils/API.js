import axios from "axios";

export default {
  
  //Ads Bills to DB
  logBills: function(bill) {
    return axios.post("/api/bills", bill)
    .then(function(response){
    })
  },
  // Get Bills from DB
  pullBills: function(bills) {
    return axios.get("/api/bills")
    .then(function(response){
      return response;
    })
  },
  // Check DB if Bill already exists
  checkBill: function(id) {
    return axios.get("/api/bills/" + id)
    .then(function(response){
      return response;
    })
  },
  // Delete a Bill
  deleteBill: function(id) {
    return axios.delete("/api/bills/" + id);
  },
  // Get Bills from ProPublica API
  getBills: function() {
    return (axios.get("https://api.propublica.org/congress/v1/115/house/bills/active.json", {headers: {"X-API-Key": "7BoKxES5grHLDPrdYNsMrvhgNQuN5aZL0Jdr0ZDU"}})
    .then(function(bills) {
      return bills
    }))
  },
  // searchBills: function(keyword) {
  //   return (axios.get("https://api.propublica.org/congress/v1/bills/search.json?query="+ keyword, { headers: { "X-API-Key": "7BoKxES5grHLDPrdYNsMrvhgNQuN5aZL0Jdr0ZDU" }})
  //     .then(function (bills) {
  //       return bills
  //     }))
  // },
  
  voteYes: function(id, bill) {
    return axios.put("/api/bills/yes/" + id, bill)
  },

  voteNo: function(id, bill) {
    return axios.put("/api/bills/no/" + id, bill)
  },

  voteUnde: function(id, bill) {
    return axios.put("/api/bills/unde/" + id, bill)
  },

  saveUser: function(user) {
    return axios.post("/api/user", user)
      .then(function(response){
     })
  },

  getUser: function(id) {
    return axios.get("/api/user/" + id)
    .then(function(response){
      return response;
    })
  },

  updateUser: function(id, changes) {
    return axios.put("/api/user/" + id, changes)
      .then(function(response){
        return response;
    })
  }
}
  // }

  // }

  // searchBills: function(keyword) {
  //   return (axios.get("https://api.propublica.org/congress/v1/bills/search.json?query="+ keyword, { headers: { "X-API-Key": "7BoKxES5grHLDPrdYNsMrvhgNQuN5aZL0Jdr0ZDU" }})
  //     .then(function (bills) {
  //       return bills
  //     }))
    

