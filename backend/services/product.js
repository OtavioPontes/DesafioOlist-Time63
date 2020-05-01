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

async function findAllComments(productId) {
  let product = await findById(productId)
  
  return product.comments
}

async function newComment(data, productId) {
  if (!data.customer_name || !data.description) throw new Error("Missing data")

  let {customer_name, description} = data
  let comments = await findAllComments(productId)
  let id = comments.length + 1
  let comment = {
    id,
    customer_name,
    description,
    status: "created"
  }

  return db.get('products')
    .find({ id: parseInt(productId) })
    .get('comments')
    .push(comment)
    .write()
}

module.exports = {
  findAll,
  findById,
  findAllComments,
  newComment
}