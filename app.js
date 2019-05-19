const express = require('express');
const app = express();
const port = 3001;

app.use(express.static(__dirname));

app.get('/', (request, response) => {
    response.sendFile('index.html');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
