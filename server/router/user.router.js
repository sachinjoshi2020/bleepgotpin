import { Router } from 'express'
const router = Router()
import { body } from 'express-validator'
import {
  userRegister,
  loginUser,
  userProfile
} from '../controllers/user.controller.js'
import { userAuth } from '../middleware/user.authmiddleware.js'
router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password to be short'),
    body('fullname.firstname')
      .isLength({ min: 3 })
      .withMessage('firstname to be short'),

    body('fullname.lastname').optional()
  ],
  userRegister
)

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('invalid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password at least 6 charactars long')
  ],
  loginUser
)

router.get('/profile', userAuth, userProfile)

export default router
