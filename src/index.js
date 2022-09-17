import express, { response } from 'express'
import { request } from 'http'

const express = require ('express')

const app = express()

app.listen(3333)

app.get('/projects', request, response) => {
    return response.send('Hello Word')
}