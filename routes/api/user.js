const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Match with "api/user"
router.route("/user")
	.get(usersController.findAll)
	.post(usersController.create);

// Match with user id
router.route("/user/:id")
	.get(usersController.findById)
	.put(usersController.update)
	.delete(usersController.remove);

module.exports = router;