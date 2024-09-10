import express from "express";
import ViteExpress from "vite-express";
import { morganMiddleware } from "./logger/morganMiddleware.js";
import cors from 'cors';

const app = express();
const allowedOrigin = [
    'https://badgecollector.dev',
    /^chrome-extension:\/\/.*/
]
app.use(cors({origin: allowedOrigin}))
app.use(express.json());
app.use(morganMiddleware);

app.post('/badges', (req, res) => {

  res.json([
    {
      id: 'streamer',
      name: '스트리머',
      image: 'https://ssl.pstatic.net/static/nng/glive/icon/streamer.png',
    },
    {
      id: 'manager',
      name: '매니저',
      image: 'https://ssl.pstatic.net/static/nng/glive/icon/manager.png',
    },
    {
      id: 'verified',
      name: '인증 마크',
      image: 'https://ssl.pstatic.net/static/nng/glive/resource/p/static/media/icon_official.a53d1555f8f4796d7862.png',
    },
    {
      id: 'fan_1',
      name: '후원 팬',
      image: 'https://ssl.pstatic.net/static/nng/glive/icon/fan.png',
    },
    {
      id: 'fan_2',
      name: 'Gold',
      image: 'https://ssl.pstatic.net/static/nng/glive/icon/gold.png',
    },
    {
      id: 'fan_3',
      name: 'Silver',
      image: 'https://ssl.pstatic.net/static/nng/glive/icon/silver.png',
    },
    {
      id: 'fan_4',
      name: 'Bronze',
      image: 'https://ssl.pstatic.net/static/nng/glive/icon/bronze.png',
    },
    {
      id: 'cheese_1',
      name: '치즈 1',
      image: 'https://ssl.pstatic.net/static/nng/glive/icon/cheese01.png',
    },
    {
      id: 'cheese_2',
      name: '치즈 2',
      image: 'https://ssl.pstatic.net/static/nng/glive/icon/cheese02.png',
    },
    {
      id: 'cheese_3',
      name: '치즈 3',
      image: 'https://ssl.pstatic.net/static/nng/glive/icon/cheese03.png',
    },
    {
      id: 'cheese_4',
      name: '치즈 4',
      image: 'https://ssl.pstatic.net/static/nng/glive/icon/cheese04.png',
    },
  ])
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
