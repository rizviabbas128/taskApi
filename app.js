const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const router = require('./routes/task');
const port = 5050 || process.env.port;

const url = `mongodb+srv://taskapi:taskapi@cluster0.3dwzckp.mongodb.net/?retryWrites=true&w=majority`;

//middleware
app.use(express.json());
app.use(cors());
app.use("/v1", router);


mongoose.connect(url).then(() => console.log(`connected to mongoDb`)).then(() => {
    app.listen(port, () => console.log(`server us up at port ${port}`));
}).catch(() => console.log(`connection failed`));