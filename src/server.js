const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const products = require('./data/products')

app.get('/', (req, res) => {
    res.send('API is running');
})

app.get('/api/products', (req, res) => {
    res.json(products);
})

app.get('/api/product/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product);
})

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
})
