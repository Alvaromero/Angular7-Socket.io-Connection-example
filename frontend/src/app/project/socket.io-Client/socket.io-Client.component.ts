import { Component, OnInit } from '@angular/core';
import {SocketIoClientService} from "../../shared/services/socket.io-client.service";
import {Message} from "../../shared/model/message";

@Component({
  selector: 'app-socket-io-client',
  templateUrl: './socket.io-Client.component.html',
  styleUrls: ['./socket.io-Client.component.styl']
})
export class SocketIoClientComponent implements OnInit {
    messages: Message[] = [];
    msg = 'SocketIoClient: Send First Protocol';

    constructor(private io: SocketIoClientService) {
        console.log( 'START Component = socket.io-Client ' );
    }

    ngOnInit() {
        this.io.initSocket();

        this.sendMsg(this.msg);
        this.getMsg();

        this.io
            .onEvent('connect')
            .subscribe(() => {
                console.log('CONNECTED - socket.io-client');
            });

        this.io
            .onEvent('connect_error')
            .subscribe((connect_error) => {
                console.log('CONNECT_ERROR - socket.io-client => ', connect_error);
            });

        this.io
            .onEvent('error')
            .subscribe((error) => {
                console.log('ERROR - socket.io-client => ', error);
            });

        this.io
            .onEvent('status')
            .subscribe((status) => {
                console.log('STATUS - socket.io-client', status);
            });

        this.io
            .onEvent('disconnect')
            .subscribe(() => {
                console.log('DISCONNECTED - socket.io-client');
            });

    }


    public sendMsg(msg): void  {
        this.io.sendMessage(msg);
    }
    public getMsg(): void  {
        this.io.getMessageEvent()
            .subscribe((message: Message) => {
                console.log('IO msg =', message);

                if (message.content == 'finished') {
                    this.io.disconnect();
                }

                this.messages.push(message);
            });
    }
    public Disconnect(): void  {
        console.log( 'BTN disconnect - socket.io-client' );
        this.io.disconnect();
    }
    public Connect(): void  {
        console.log( 'BTN Connect - socket.io-client' );
        this.io.connect();
    }

}
