const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const path = require("path");
const bot = require("../bot");

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

async function findComments(productId, filters) {
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
  let comments = await findComments(productId);
  let id = comments.length + 1;
  let comment = {
    id,
    customer_name,
    description,
    status: "created",
    type: "",
    response: ""
  };

  await _getProduct(productId).get("comments").push(comment).write();

  let response = bot.handleMessage(description, await findById(productId));
  if (response) {
    _getProductComment(productId, id) 
      .assign({ response, status: "closed", type: "simple" })
      .write();
  } else {
    _getProductComment(productId, id) 
      .assign({ type: "complex" })
      .write();
  }
  return response;
}

async function commentResponse(productId, commentId, answer) {
  if (!answer) throw new Error("Answer is empty");

  return _getProductComment(productId, commentId) 
    .assign({ response: answer, status: "closed" })
    .write();

}

function _getProduct(id) {
  return db.get("products").find({ id: parseInt(id) });
}

function _getProductComment(productId, commentId) {
  return _getProduct(productId).get("comments").find({ id: parseInt(commentId) });
}

module.exports = {
  findAll,
  findById,
  findComments,
  newComment,
  commentResponse,
};
