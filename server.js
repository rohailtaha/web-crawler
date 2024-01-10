import express from 'express';
const app = express();
const PORT = 3000;

// Middleware to parse JSON in request body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
