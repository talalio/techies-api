import express from 'express'
import UserController from './user.controller.js'

const router = express.Router()

router.get('/', UserController.apiGetUsers)

router.post('/add', UserController.apiAddUser)


export default router
