import {Component, OnInit} from '@angular/core';
import {NgxSocketIoService} from "../../shared/services/ngx-socket-io.service";
import {Message} from "../../shared/model/message";

@Component({
    selector: 'app-ngx-socket-io',
    templateUrl: './ngx-socket-io.component.html',
    styleUrls: ['./ngx-socket-io.component.styl']
})
export class NgxSocketIoComponent implements OnInit {
    messages: Message[] = [];
    msg = 'NgxSocketIo: Send First Protocol';

    constructor(private NGX: NgxSocketIoService) {
        console.log( 'START Component = ngx-socket-io ' );
    }

    ngOnInit() {
        this.sendMsg(this.msg);
        this.getMsg();

        this.NGX
            .onEvent('connect')
            .subscribe(() => {
                console.log('CONNECTED - ngx-socket-io');
            });

        this.NGX
            .onEvent('connect_error')
            .subscribe((connect_error) => {
                console.log('CONNECT_ERROR - ngx-socket-io => ', connect_error);
            });

        this.NGX
            .onEvent('error')
            .subscribe((error) => {
                console.log('ERROR - ngx-socket-io => ', error);
            });

        this.NGX
            .onEvent('status')
            .subscribe((status) => {
                console.log('STATUS - ngx-socket-io', status);
            });

        this.NGX
            .onEvent('disconnect')
            .subscribe(() => {
                console.log('DISCONNECTED - ngx-socket-io');
            });

    }


    public sendMsg(msg): void  {
        this.NGX.sendMessage(msg);
    }
    public getMsg(): void  {
        this.NGX.getMessage()
            .subscribe((message: Message) => {
                console.log('NGX msg =', message);

                if (message.content == 'finished') {
                    this.NGX.disconnect();
                }

                this.messages.push(message);
            });
    }
    public Disconnect(): void  {
        console.log( 'BTN disconnect - ngx-socket-io' );
        this.NGX.disconnect();
    }
    public Connect(): void  {
        console.log( 'BTN Connect - ngx-socket-io' );
        this.NGX.connect();
    }
}
