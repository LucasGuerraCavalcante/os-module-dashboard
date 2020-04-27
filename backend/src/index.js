const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const router = require('./routes')

const app = express()
const port = 3333

const options = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: 'http://localhost:3000',
    preflightContinue: false
}

app.use(cors(options))
router.options("*", cors(options))

app.use(express.json())
app.use(router)

app.set('port', process.env.port || port)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(port, (err) => {
    if (err)  throw err;

    console.log(`Server running on port: ${port}`);
});