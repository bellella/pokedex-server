import express from 'express';
import router from './routes/index.js';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';
import {config as dbConfig} from './config/db.js';
import {config as passportConfig} from'./config/passport.js';

dotenv.config();

dbConfig();
passportConfig();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

