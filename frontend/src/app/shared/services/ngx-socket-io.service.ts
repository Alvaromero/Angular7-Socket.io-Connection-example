import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Message } from '../model/message';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * ngx-socket-io - Socket.IO module for Angular 7
 * @Info: https://socket.io/
 * @Info: https://www.npmjs.com/package/ngx-socket-io
 */
@Injectable()
export class NgxSocketIoService {

    constructor(private socket: Socket) {
        console.log( 'START Service = ngx-socket-io ' );
    }

    /**
     * Снова подключится
     * @constructor
     */
    public connect(): void  {
        this.socket.connect();
    }

    /**
     * Отключится
     * @constructor
     */
    public disconnect(): void  {
        this.socket.disconnect();
    }

    /**
     * Получить текст
     */
    public getMessage() {
        return this.socket
            .fromEvent("new Message")
            .pipe( map( (message:Message) => message));
        //
        // OR
        //
        // return new Observable<Message>(observer => {
        //     this.socket.on("new Message", (data:Message) => observer.next(data));
        // });
    }

    /**
     * Отправить текст
     * @param {string} msg Текст сообщения
     */
    public sendMessage(msg: string): void {
        this.socket.emit("send message", msg);
    }

    /**
     * Повесить обработчик
     * @param {string} event Название события
     * @returns {Observable<any>}
     */
    public onEvent(event: string): Observable<any> {
        return new Observable<string>(observer => {
            this.socket.on(event, (data) => observer.next(data));
        });
    }

}
