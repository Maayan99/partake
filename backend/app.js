import express from "express";
import cookieParser from 'cookie-parser';
import cors from 'cors';


// Create a new Express application
const app = express();

// Middleware to parse request body as JSON
app.use(express.json());

app.use(cookieParser()); // Add cookie-parser as middleware

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

// Use CORS
//TODO: Understand cors
app.use(cors(corsOptions));

// Start the server on port 4000
const port = 4000;
app.listen(port, () => {
    console.log(`Partake is running on port ${port}`);
});

