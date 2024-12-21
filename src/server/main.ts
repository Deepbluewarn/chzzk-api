import express from "express";
import ViteExpress from "vite-express";
import { morganMiddleware } from "./logger/morganMiddleware.js";
import cors from 'cors';
import chzzkBadgeList from "./chzzk.js";
import soopBadgeList from "./soop.js";

const app = express();
const allowedOrigin = [
    'https://badgecollector.dev',
    /^chrome-extension:\/\/.*/
]
app.use(cors({origin: allowedOrigin}))
app.use(express.json());
app.use(morganMiddleware);

app.post('/badges', (req, res) => {
  res.json(chzzkBadgeList);
});

app.get('/chzzk/badges', (req, res) => {
  res.json(chzzkBadgeList);
});

app.get('/soop/badges', (req, res) => {
  res.json(soopBadgeList);
});

ViteExpress.listen(app, 3033, () =>
  console.log("Server is listening on port 3033..."),
);
