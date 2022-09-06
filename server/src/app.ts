import express from 'express';
import {/*experienciaRoute, userRoute, */loginRoute} from './routes'
import cors from 'cors'
import connection from './services/database.service'

async function conectingDb() {
    await connection.connect()
}

conectingDb()

const app = express();
app.use(cors())
app.use (express.json())
app.use(loginRoute)
/*
app.use(experienciaRoute)
app.use(userRoute);

*/
export default app;