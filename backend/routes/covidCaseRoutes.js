import express from 'express';

import { getCasesByRequest } from '../controllers/covidCaseController.js';

const router = express.Router();

router.get('/query', getCasesByRequest);

export default router;