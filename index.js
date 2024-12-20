import { Server } from 'ws';


const wss = new Server({ port: 8080 });


wss.on('connection', function connection(ws) {

    console.log('Client connected');


    ws.on('message', function incoming(message) {

        console.log('Received: %s', message);

        ws.send(`${message}`);
    });

    ws.on('close', function () {
        console.log('Client disconnected');
    });
});