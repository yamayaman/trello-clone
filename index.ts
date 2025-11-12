import express from 'express';
import { AppDataSource } from './datasource';

const app = express();
const PORT = 8888;


app.get('/', (req, res) => {
    res.send('Hello Workd!!')
});

AppDataSource.initialize().then(() => {
    console.log('データベースと接続が環境しました。')
    app.listen(PORT, () => {
        console.log(`サーバーがポート${PORT}起動！`)
    })
});