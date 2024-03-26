import express from 'express'
import Controller from './controller.js'
const router = express.Router()

router.get('/user', Controller.index)
router.get('/users', Controller.getAllUsers)
router.get('/users/:id', Controller.getUserByID)
router.post('/users', Controller.createUser)
router.put('/users/:id', Controller.editUserByID)
router.delete('/users/:id', Controller.deleteUserByID)

export default router