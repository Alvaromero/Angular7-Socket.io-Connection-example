import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Message } from '../model/message';

import { Observable } from 'rxjs';


/**
 * socket.io-client - A standalone build of socket.io-client is exposed automatically
 * by the socket.io server as /socket.io/socket.io.js.
 * @Info: https://www.npmjs.com/package/socket.io-client
 */
@Injectable()
export class SocketIoClientService {
    private socket;
    private SERVER_URL = 'http://localhost:3000';

    constructor( ) {
        console.log( 'START Service = socket.io-Client ' );
    }

    public initSocket(): void {
        this.socket = socketIo(this.SERVER_URL); // сразу тут настраивается а другой настраивать нужно в app.module.ts
    }

    /**
     * Снова подключится
     * @constructor
     */
    public connect(): void {
        this.socket.connect();
    }

    /**
     * Отключится
     * @constructor
     */
    public disconnect(): void {
        this.socket.disconnect();
    }

    /**
     * Отправить текст
     * @param {string} msg
     */
    public sendMessage(msg: Message): void {
        this.socket.emit('send message', msg);
    }

    /**
     * Получить текст
     */
    public getMessageEvent(): Observable<Message> {
        return new Observable<Message>(observer => {
            this.socket.on("new Message", (data:Message) => observer.next(data));
        });
    }

    /**
     * Повесить обработчик
     * @param {string} event
     * @returns {Observable<any | Message>}
     */
    public onEvent(event: string): Observable<any> {
        return new Observable<string>(observer => {
            this.socket.on(event, (data) => observer.next(data));
        });
    }



}
