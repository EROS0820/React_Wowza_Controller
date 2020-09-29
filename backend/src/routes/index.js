/**
 * Index router file
 *
 * @package   backend/src/routes
 * @author    Taras Hryts <streaming9663@gmail.com>

 */

const express = require('express')
const router = express.Router()

const apiAuthRouter = require('./auth')
const webRouter = require('./web')

/**
 * Authentication page API router
 */
router.use('/auth', apiAuthRouter)

/**
 * Web API router
 */
router.use('/web', webRouter)


module.exports = router
