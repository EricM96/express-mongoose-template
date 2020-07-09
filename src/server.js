import express from 'express';

const app = express();

require('./routes/routes.index.js')(app);

app.listen(8000, () => {});
