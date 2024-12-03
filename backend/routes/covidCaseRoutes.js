import express from 'express';

import { getCasesByRequest } from '../controllers/covidCaseController.js';

const router = express.Router();

router.post('/query', getCasesByRequest);

export default router;