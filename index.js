const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// define a simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my REST API!' });
});

// define a route to get a list of items
app.get('/items', (req, res) => {
    const items = ['item1', 'item2', 'item3'];
    res.json(items);
});

// define a route to create a new item
app.post('/items', (req, res) => {
    const newItem = req.body.item;
    console.log(`Adding new item: ${newItem}`);
    res.json({ message: `Added new item: ${newItem}` });
});

// define a route to update an existing item
app.put('/items/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body.item;
    console.log(`Updating item ${itemId} to ${updatedItem}`);
    res.json({ message: `Updated item ${itemId} to ${updatedItem}` });
});

// define a route to delete an item
app.delete('/items/:id', (req, res) => {
    const itemId = req.params.id;
    console.log(`Deleting item ${itemId}`);
    res.json({ message: `Deleted item ${itemId}` });
});

// start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
