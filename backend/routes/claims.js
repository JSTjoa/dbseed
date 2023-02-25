import express from 'express';
import {} from "../controller/claims.js";

const router = express.Router();

router.put('/:requestedId', updateEntireClaim);

export default router;