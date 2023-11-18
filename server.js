import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import UserRoute from './routes/UserRoute.js';
import DeviceRoute from './routes/DeviceRoute.js';
dotenv.config()

const app = express();
const port = 3000;

app.use(cors({
    credentials: false,
    origin: ['http://localhost:5173', 'https://smarthome-indonesia.vercel.app']
}))
app.use(express.json())
app.use(UserRoute)
app.use(DeviceRoute)

app.get('/', (req, res) => {
  res.status(200).json(`hello I'm maulana :` + port);
});

app.listen (process.env.PORT || 3000 , ()=>{
  console.log('listening on port ' + process.env.PORT);
});