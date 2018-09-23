const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
// create the express app
const app = express()

var apiRouter = express.Router()

apiRouter.get('/postmaster/:name/:email/:message', (req, res, next) => {
    var apiKey = 'key-2d38923f671398e1c7b4dcecdf9b9785-0e6e8cad-65420a29'
    var domain = 'sandbox39f0910079cf49c6bf7c6ac661cf175f.mailgun.org'
    var mailgun = require('mailgun-js')({apiKey: apiKey, domain: domain})

    var data = {
        from: 'Excited Customer <postmaster@sandbox39f0910079cf49c6bf7c6ac661cf175f.mailgun.org' +
                '>',
        to: 'cano.ajla@gmail.com',
        subject: 'from customer: ' + req.params.name + ' with email: ' + req.params.email,
        text: req.params.message
    }

    mailgun
        .messages()
        .send(data, function (error, body) {
            if (error) {
                console.log(error)
            }
        })
    res.status(200);
    res.send('Gj m8');
})

// Add API api-router.
app.use('/api', apiRouter)

// create middleware to handle the serving the app
app.use("/", serveStatic(path.join(__dirname, '/dist')))
// Catch all routes and redirect to the index file
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})
// Create default port to serve the app on
const port = process.env.PORT || 5000
app.listen(port)
// Log to feedback that this is actually running
console.log('Server started on port ' + port)