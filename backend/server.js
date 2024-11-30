import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import covidCasesRoutes from './routes/covidCaseRoutes.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/api', covidCasesRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Covid-19 API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
