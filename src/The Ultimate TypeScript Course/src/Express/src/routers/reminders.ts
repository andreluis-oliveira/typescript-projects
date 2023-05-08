import { Router } from 'express'

import CreateReminderDto from '../dtos/create-reminder'
import Reminder from '../models/reminder'

const router = Router()

const reminders: Reminder[] = []

router.get('/', (req, res) => {
  res.json(reminders)
})

router.post('/', (req, res) => {
  const { title } = req.body as CreateReminderDto
  const reminder = new Reminder(title)
  reminders.push(reminder)
  res.status(201).json(reminder)
})

// Update
router.put('/:id', (req, res) => {
  const reminder = reminders.find((reminder) => reminder.id === +req.params.id)

  if (reminder === undefined) {
    return res.status(404).json({ success: false, error: 'Resource not found' })
  }

  reminder.title = req.body.title || reminder.title

  res.json({ success: true, data: reminder })
})

// Delete
router.delete('/:id', (req, res) => {
  const reminder = reminders.find((reminder) => reminder.id === +req.params.id)

  if (reminder === undefined) {
    return res.status(404).json({ success: false, error: 'Resource not found' })
  }

  const index = reminders.indexOf(reminder)

  reminders.splice(index, 1)

  res.json({ success: true, data: {} })
})

export default router
