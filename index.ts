import express from 'express';

const app = express();
const PORT = 8888;


app.get('/', (req, res) => {
    res.send('Hello Workd!!')
});

app.listen(PORT, () => {
    console.log('サーバーが起動！')
})
