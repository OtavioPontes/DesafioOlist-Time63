const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')

const adapter = new FileSync(path.join(__dirname, '..', 'db/db.json'))
const db = low(adapter)

function findAll() {
  let products = db.getState().products
  products = JSON.parse(JSON.stringify(products))
  products.forEach(product => delete product.comments)

  return Promise.resolve(products)
}

function findById(productId) {
  let product = db.get('products').find({ id: parseInt(productId) }).value()

  return Promise.resolve(product)
}

function findAllComments(productId) {
  let comments = db.get('products').find({ id: parseInt(productId) }).value().comments

  return Promise.resolve(comments)
}

function newComment(data, productId) {

}

module.exports = {
  findAll,
  findById,
  findAllComments,
  newComment
}