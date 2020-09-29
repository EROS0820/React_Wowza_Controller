/**
 * Auth model file
 *
 * @package   backend/src/models
 * @author    Taras Hryts <streaming9663@gmail.com>
 * @copyright 2020 Say Digital Company/
 */

var message = require('../constants/message')
var bcrypt = require('bcrypt-nodejs')
var table = require('../constants/table')
var jwt = require('jsonwebtoken')
var key = require('../config/key-config')
var randtoken = require('rand-token');
var timeHelper = require('../helper/timeHelper')
const dotenv = require('dotenv')
dotenv.config()
var authModel = {
    login: login,
    logout: logout,
}


/**
 * Check user login status with email and password
 *
 * @author  Taras Hryts <streaming9663@gmail.com>
 * @param   object authData
 * @return  object If success returns object else returns message
 */
function login(authData) {
    return new Promise((resolve, reject) => {
        if (authData.email === process.env.ADMIN_EMAIL && authData.password === process.env.ADMIN_PASSWORD)
            resolve("ok")
        else
            reject({message: message.INVALID_PASSWORD})
    })
}

function logout() {
    return new Promise((resolve, reject) => {
        resolve()
    })
}

module.exports = authModel
