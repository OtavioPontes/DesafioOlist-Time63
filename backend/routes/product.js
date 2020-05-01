const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router
  .get('/', controllers.product.findAll)
  .get('/:id', controllers.product.findById)
  .get('/:id/comments', controllers.product.findAllComments)
  .post('/:id/comments', controllers.product.newComment)

module.exports = router
