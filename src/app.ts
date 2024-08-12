import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import onboarding from "./api/onboarding";
import tradeBots from "./api/tradeBots";
import PnlChart from "./api/pnlChart";
import deposit from "./api/deposit";
import dashboard from "./api/dashboard";
import remove from "./api/remove";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const dbConnectionString = process.env.DB_CONNECTION_STRING as string;

mongoose.connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database connected'))
    .catch((error) => console.error('Database connection error:', error));

app.use(onboarding);
app.use(tradeBots);
app.use(PnlChart);
app.use(deposit);
app.use(remove);
app.use(dashboard);
export default app;