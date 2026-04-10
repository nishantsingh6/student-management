const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const student = require('./routes/studentRoute');
const task = require('./routes/taskRoute');

require('dotenv').config();

const port = process.env.PORT || 5000;;
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://student-management-gamma-drab.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

connectDB();


app.use("/api/auth", authRoutes);
app.use('/api', student);
app.use('/api', task);

app.listen(port, () => {
    console.log(`Server is running on this ${port} number`);
})

app.get('/', (req, res) => {
    res.send("Server is running fine");
});

