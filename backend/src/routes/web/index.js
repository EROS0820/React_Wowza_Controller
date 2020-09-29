/**
 * Index router file
 *
 * @package   backend/src/routes
 * @author    Taras Hryts <streaming9663@gmail.com>

 */

const express = require('express')
const router = express.Router()
const apiAdminRouter = require('./admin')

/**
 * admin API router
 */
router.use('/admin', apiAdminRouter)



module.exports = router
