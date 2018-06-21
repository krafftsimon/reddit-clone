import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello Worldasdas!'));

app.listen(3000, () => console.log('Reddit clone app listening on port 3000.'));