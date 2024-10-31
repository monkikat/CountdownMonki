import * as express from 'express';
import { PORT } from './utils/config';
import cors = require('cors');
import { connectDB } from './database/db';

connectDB();

const app = express();
app.use(express.json());

app.use(cors());

app.use('/api', require('./routes/EmailRoutes'));

app.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});