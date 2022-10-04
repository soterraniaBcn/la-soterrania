import Router from 'express'
import eventController from '../controllers/eventController'
import jwt from '../middlewares/jwt'
import admin from '../middlewares/admin'

const router = Router()

router.get('/events', jwt.validateToken, eventController.getAllEvents)
router.get('/events/:id', jwt.validateToken, eventController.getOneEvent)
router.post(
  '/events',
  jwt.validateToken,
  admin.checkRol,
  eventController.saveEvent,
)
router.put(
  '/events/:id',
  jwt.validateToken,
  admin.checkRol,
  eventController.modifyEvent,
)
router.delete(
  '/events/:id',
  jwt.validateToken,
  admin.checkRol,
  eventController.deleteEvent,
)

export default router
