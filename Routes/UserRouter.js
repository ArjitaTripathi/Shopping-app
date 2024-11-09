import { getUser } from '../Controllers/UserController.js'
import express from 'express'

const router = express.Router()

router.get('/:id', getUser)

export default router