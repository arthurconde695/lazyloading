const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

app.use(express.json());

const uri = 'mongodb+srv://<arthur>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/message', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('<dbname>');
        const collection = database.collection('messages');

        const message = req.body;
        const result = await collection.insertOne(message);

        res.status(200).json({ success: true, insertedId: result.insertedId });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});