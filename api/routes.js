const { Router } = require('express')
const AnaliseController = require('./src/Controllers/AnaliseController')

const routes = Router()
routes.post('/analise', AnaliseController.post)

module.exports = routes