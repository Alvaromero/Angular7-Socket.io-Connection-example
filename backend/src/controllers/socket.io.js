const socketIO = require('socket.io');
const log = require('../helpers/log.js')(module);

/**
 * Получение и Отправка СМС без регистрации
 * @Info https://socket.io/
 * @Info https://socket.io/docs/server-api/
 * @param server
 */
module.exports = function(server) {
    const io = new socketIO(server);

    // socketClient.on();   // .on()  - слушаем события которые приходят на сервер
    // socketClient.emit(); // .emit() - создаем новое событие от сервера
    io.on('connection', (socketClient) => {

        log.info('Connected new Client.');

        /**
         * Отправляем
         */
        socketClient.emit('status', {status: 'ONLINE'} );

        /**
         * Отправляем
         */
        let interval = setInterval(() =>{
            socketClient.emit('new Message', generateMessage());
        }, 1000);

        /**
         * Получаем
         */
        socketClient.on('send message', (message) => {
            console.log('get message from user = ', message)
        } );

        /**
         * Слушаем
         */
        socketClient.on('error',(error)=> {
            console.log( 'socketClient error _ ', error );
        });

        /**
         * Слушаем
         */
        socketClient.on('connect_error',(connectError)=> {
            console.log( 'socketClient connectError _ ', connectError );
        });

        /**
         * Слушаем
         */
        socketClient.on('disconnect',()=> {
            clearInterval(interval);
            socketClient.emit('status', {status: 'DISCONNECT'} );
            console.log( 'socketClient _ User Disconnected' );
        });
    });
};



/**
 * Рандомные сообщения от сервера
 */
function generateMessage() {
    const WORDS = [
        'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
        'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut', 'finished'
    ];

    function getRandomContent() {
        const position = Math.floor(Math.random() * WORDS.length);
        return WORDS[position];
    }

    return {
        date: new Date().toISOString(),
        from: 'server',
        content: getRandomContent()
    };
}