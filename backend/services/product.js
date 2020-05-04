const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const path = require("path");
const bot = require("../bot");
const userImg = "https://drive.google.com/uc?export=download&id=1zptf5GN2cpjkS25q8LFlxG6v07SkCtFM";
const _ = require("lodash");

const adapter = new FileSync(path.join(__dirname, "..", "db/db.json"));
const db = low(adapter);

async function findAll() {
	let products = await db.get("products").value();
	products = JSON.parse(JSON.stringify(products));
	products.forEach((product) => delete product.comments);

	return products;
}

async function findById(productId) {
	let product = await _getProduct(productId).value();

	return product;
}

async function findComments(filters) {
	let receivedFilters = {};
	let comments = [];
	let products = await db.get("products").value();
	products.forEach((product) => {
		product.comments.forEach((comment) => {
			comments.push(comment);
		});
	});

	if (filters && Object.keys(filters).length > 0) {
		Object.keys(filters).forEach((item) => {
			if (item) {
				receivedFilters[item] = filters[item];
			}
		});

		let commentsFiltered = _.filter(comments, receivedFilters);

		return commentsFiltered
	}

	return comments;
}

async function findProductComments(productId, filters) {
	let receivedFilters = {};
	if (filters && Object.keys(filters).length > 0) {
		Object.keys(filters).forEach((item) => {
			if (item) {
				receivedFilters[item] = filters[item];
			}
		});
		return _getProduct(productId)
			.get("comments")
			.filter(receivedFilters)
			.value();
	}
	let product = await findById(productId);

	return product.comments;
}

async function newComment(data, productId) {
	if (!data.customer_name || !data.description) throw new Error("Missing data");

	let { customer_name, description } = data;
	let product = await _getProduct(productId).value()
	let comments = product.comments;
	let customer_image = userImg;
	let id = comments.length + 1;
	let comment = {
		id,
		customer_name,
		customer_image,
		description,
		status: "created",
		status_tag: "Pendente",
		product_id: product.id,
		product_name: product.nome,
		tag: "",
		type: "",
		tag: "",
		response: "",
	};

	await _getProduct(productId).get("comments").push(comment).write();

	let [prop, response] = bot.handleMessage(description, await findById(productId));

	if (response) {
		_getProductComment(productId, id)
			.assign({ response, status: "closed", type: "simple", tag: prop })
			.write();
	} else {
		_getProductComment(productId, id).assign({ type: "complex" }).write();
	}
	return response;
}

async function commentResponse(productId, commentId, answer) {
	if (!answer) throw new Error("Answer is empty");

	return _getProductComment(productId, commentId)
		.assign({ response: answer, status: "closed" })
		.write();
}

async function findTags() {
	return bot.findTags();
}

function _getProduct(id) {
	return db.get("products").find({ id: parseInt(id) });
}

function _getProductComment(productId, commentId) {
	return _getProduct(productId)
		.get("comments")
		.find({ id: parseInt(commentId) });
}

module.exports = {
	findAll,
	findById,
	findComments,
	findProductComments,
	newComment,
	commentResponse,
	findTags,
};
