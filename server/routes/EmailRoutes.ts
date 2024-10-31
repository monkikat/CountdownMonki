import { Router } from "express";
import * as express from 'express';

const router: Router = express.Router();
const {
    storeEmailController
} = require('../controllers/EmailControllers');

router.route('/store-email').post(storeEmailController);

module.exports = router;