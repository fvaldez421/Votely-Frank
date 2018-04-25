const path = require("path");
const router = require("express").Router();
const billsRoutes = require("./api/bills.js");
const userRoutes = require("./api/user.js");


// API Routes
router.use("/api", billsRoutes);
router.use("/api", userRoutes);



//If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
