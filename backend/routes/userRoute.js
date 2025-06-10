import express from 'express'
import { loginUser,registerUser,adminLogin, getUserProfile, forgotPassword, resetPassword } from '../controllers/userController.js'
import auth from '../middleware/auth.js'
const userRouter = express.Router();
userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)
userRouter.get('/profile', auth, getUserProfile) // <-- Add this line
userRouter.post('/forgot-password', forgotPassword);
userRouter.post('/reset-password', resetPassword);

export default userRouter;
