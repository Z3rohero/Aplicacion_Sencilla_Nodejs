instalamos un servidor
npm i express
instalamos reconocer de rutas  cuando cmabiar paginas
npm i morgan
instalamos un creador html 
npm i ejs

instalar el modo desarrollo
seria asi

npm i nodemon


en la parte de packge.json
 "scripts": {
   "dev": "nodemon src/index.js"
  },

en la parte creamos un type para export import de packe.json

 "type": "module",


creamos el servidor

import express  from 'express'
// creado el servidor 
const app= express()
app.set('view engine', 'ejs')
// para renderizar el res.render('index')
app.get('/',(req, res) => res.render ('index'))
app.listen(3000)
console.log('serve is listening on port',3000);

direccion absoluta nodejs 
import { diname } from 'path'
import { fileURLToPath } from 'url'


//en rutados
app.get('/', (req, res) => res.render('index'))

app.get('/', (req, res) => res.render('index'))

app.get('/', (req, res) => res.render('index'))


// crea un archivado llamado de rutasl
//le agregamos

import { Router } from 'express'

const router = Router();

router.get('/', (req, res) => res.render('index'))

router.get('/about', (req, res) => res.render('about'))

router.get('/contact', (req, res) => res.render('contact'))

export default router

//agregamos al index principal 

app.use(indexRoutes)

// Podemos agragar variables en la carpeta de ROUTES

asi 

router.get('/about', (req, res) => res.render('about', {title: ' xDDDDDDDD'}))

en la pagina o views
la llamamos la variable asi

<h2><%= title %></h2>

para añadir mi css a express debod unino o llamalo

app.use(express.static(join(_dirname,'public')))

recuerda para agregar una parte de tu html por 
fragemento seria asi, pero primero 
una carpeta con nombre (partial)
despues  un archivo head.ejs (ahi se colocar html)

<%- include ('partials/head') %>
