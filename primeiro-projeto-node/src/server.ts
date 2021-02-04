import express from 'express';
// src/server.ts

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Get ta funcionando MESTRE DO GIT' });
});

app.listen(3333, () => {
    // eslint-disable-next-line no-console
    console.log('🚀 Server started on port 3333!');
});
