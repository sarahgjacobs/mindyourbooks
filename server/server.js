const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
}) 

app.listen(3001, () => (console.log("Server started")))






app.get("/*", function (req, res) {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
 })