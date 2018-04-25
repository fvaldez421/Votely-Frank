const router = require("express").Router();
const billsController = require("../../controllers/billsController");

// Matches with "/api/bills"
router.route("/bills")
  .get(billsController.findAll)
  .post(billsController.create);

// Matches with "/api/bills/:id"
router.route("/bills/:id")
  .get(billsController.findById)
  .put(billsController.update)
  .delete(billsController.remove);

router.route("/bills/yes/:id")
  .put(billsController.update)

router.route("/bills/no/:id")
  .put(billsController.update)

router.route("/bills/unde/:id")
  .put(billsController.update)


module.exports = router;