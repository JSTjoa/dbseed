import express from 'express';
import cors from 'cors';

const corsConfig = {
    credentials: true,
    origin: true,
};

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors(corsConfig)) // config cors so that front-end can use
app.options('*', cors())

const router = express.Router()

router.get('/home', (_, res) => res.send('Hello World from services'))
//router.post('/login', loginUser)
//router.post('/logout', logoutUser)

app.listen(8000, () => console.log('services listening on port 8000'));
