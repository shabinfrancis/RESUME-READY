const express = require('express');
const app = express();
const cors = require('cors');
const pdf = require('html-pdf');
const sample = require('./sample')
const port = 8080;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("../frontend/build"))

app.post('/create-pdf', (req, res) => {
    pdf.create(sample(req.body), {}).toFile('sample.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
            console.log(err);
        }
        res.send(Promise.resolve());
        console.log("Success");
    }) 
})

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/sample.pdf`);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})