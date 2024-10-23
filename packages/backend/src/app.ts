// src/app.ts
import express, { Request, Response } from 'express';

const app = express();
const port = 3125;

// Simple route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
