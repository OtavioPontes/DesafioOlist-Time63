const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router
	.get("/", controllers.product.findAll)
	.get("/:id", controllers.product.findById)
	.get("/:id/comment", controllers.product.findComments)
	.post("/:id/comment", controllers.product.newComment)
	.post("/:idProduct/comment/:idComment/response", controllers.product.commentResponse)

module.exports = router;
