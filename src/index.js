import express from 'express'
// importamos una funcion de nodejs para crear una ruta obsulta
// creado el servidor 
//crear la carpeta  donde esta views
//direcion obsulta
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import indexRoutes from './routes/index.js'

const app = express()
const _dirname = dirname(fileURLToPath(import.meta.url))
app.set('views', join(_dirname, 'views'))
app.set('view engine', 'ejs')
app.use(indexRoutes)
// para renderizar las paginas 
//en rutados


app.listen(3000)
console.log('serve is listening on port', 3000);