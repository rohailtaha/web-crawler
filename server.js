import express from 'express';
import { crawlUrl } from './crawl';
const app = express();
const PORT = 3000;

// Middleware to parse JSON in request body
app.use(express.json());

app.get('/', (req, res) => {
  const url = req.body.url;
  let urls = crawlUrl(url);
  return res.json({ data: urls });
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
