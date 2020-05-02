const service = require("../services");

function findAll(req, res) {
    service.product
        .findAll()
        .then((products) => res.status(200).send(products))
        .catch((err) => errorHandler(res, err, 500));
}

function findById(req, res) {
    service.product
        .findById(req.params.id)
        .then((product) => res.status(200).send(product))
        .catch((err) => errorHandler(res, err, 500));
}

function findAllComments(req, res) {
    service.product
        .findAllComments(req.params.id)
        .then((comments) => res.status(200).send(comments))
        .catch((err) => errorHandler(res, err, 500));
}

function newComment(req, res) {
    let data = req.body;
    let productId = req.params.id;
    service.product
        .newComment(data, productId)
        .then((list) => res.status(201).send(list))
        .catch((err) => errorHandler(res, err, 500));
}

function commentResponse(req, res) {
    let productId = req.params.idProduct;
    let commentId = req.params.idComment;
    let answer = req.body.response;
    service.product
        .commentResponse(productId, commentId, answer)
        .then((answer) => res.status(201).send(answer))
        .catch((err) => errorHandler(res, err, 500));
}

function errorHandler(res, err, status) {
    let message = "";
    if (err.message) message = err.message;
    else message = err;

    if (status) {
        res.status(status).send({ status: "error", message: message });
    } else {
        res.send({ status: "error", message: message });
    }
}

module.exports = {
    findAll,
    findById,
    findAllComments,
    newComment,
    commentResponse,
};
