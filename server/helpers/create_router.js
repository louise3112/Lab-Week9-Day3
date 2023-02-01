const { response } = require('express')
const express = require('express')
const { request } = require('http')
const ObjectId = require('mongodb').ObjectId

const createRouter = function(collection) {
    
    const router = express.Router()

    router.get('/', (request, response) => {
        collection.find().toArray()
            .then((documents) => response.json(documents))
            .catch(error => {
                console.error(error)
                response.status(500)
                response.json({status:500, error:error})
            })
    })
}