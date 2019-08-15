const express = require('express');
const controller = require('./controller')

const app = express();
app.use(express.json());

app.get('/api/products', controller.getProducts)

const PORT = 4050;
app.listen(PORT, () => console.log(`Connected to server on port ${PORT}`))