const express = require('express');
const server = express();
const actionsRouter = require('./actions/actions-router');
const projectsRouter = require('./projects/projects-router');

// Complete your server here!
// Do NOT `server.listen()` inside this file!

server.use(express.json());

server.use('/api/actions', actionsRouter);
server.use('/api/projects', projectsRouter);

server.get('/', (_, res) => {
	res.send(`
        <h2>U4S1 Sprint API</h2>
    `);
});

module.exports = server;
