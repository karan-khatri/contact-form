import { Router } from 'express';
import { sendMail } from '../controller/mail.js';

const Routes = Router();

Routes.route('/').post(sendMail);

export default Routes;
