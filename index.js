const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const { AUTH_URL, VERSION } = require('./Utils/Urls.js');

//------------> Routes import
const authRoutes = require('./Routes/auth.route.js');
const userRoutes = require('./Routes/user.route.js');
const clientRoutes = require('./Routes/client.route.js');
const meetingRoutes = require('./Routes/meeting.route.js');
const campaignRoutes = require('./Routes/campaign.route.js');
const serviceRoutes = require('./Routes/service.route.js');

const PORT = process.env.PORT || 5000;
const app = express();

const corsFonfig = {
    origin: true,
    credentials: true,
}

app.use(cors(corsFonfig));
app.options('*', cors(corsFonfig));
app.use(bodyParser.json());

//Database connection
mongoose.connect(process.env.DATABASE_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Database connected successfully"))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//---------------> Routes connection
app.get("/", (req, res) => {
    res.send("<h2>CMS server is running</h2>");
})
app.use(AUTH_URL, authRoutes);
app.use(VERSION, userRoutes);
app.use(VERSION, clientRoutes);
app.use(VERSION, meetingRoutes);
app.use(VERSION, campaignRoutes);
app.use(VERSION, serviceRoutes);

//All
app.all("*", (req, res) => {
    res.status(404).json({ message: "Route not found" });
})

process.on('uncaughtException', err => {
    console.log(err);
    app.close(() => {
        process.exit(1);
    })
})