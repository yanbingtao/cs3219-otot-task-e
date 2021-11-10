const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`server is alive on http://localhost:${PORT}`)
)

app.get('/test', (req, res) => {
    res.status(200).send({
        body: "data1",
        body2: "data2"
    })
});