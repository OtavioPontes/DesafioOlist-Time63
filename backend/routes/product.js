const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router
  .get('/', controllers.product.findAll)
  .get('/:id', controllers.product.findById)
  .get('/:id/comment', controllers.product.findAllComments)
  .post('/:id/comment', controllers.product.newComment)

module.exports = router
