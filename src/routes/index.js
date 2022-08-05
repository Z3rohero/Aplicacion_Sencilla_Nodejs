import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.render('index'))

router.get('/about', (req, res) => res.render('about', { title: ' xDDDDDDDD' }))

router.get('/contact', (req, res) => res.render('contact', { title: 'Contacto ' }))

export default router