const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router
	.get("/", controllers.product.findAll)
	.post("/comment/list", controllers.product.findComments)
	.get("/:id/comment", controllers.product.findProductComments)
	.post("/:id/comment", controllers.product.newComment)
	.post("/:idProduct/comment/:idComment/response", controllers.product.commentResponse)
	.get("/tags", controllers.product.findTags)
	.get("/:id", controllers.product.findById)

module.exports = router;
