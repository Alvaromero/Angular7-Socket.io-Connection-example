import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectComponent} from './project.component';
import {ProjectRoutingModule} from './project-routing.module';
import {MaterialModule} from "../shared/material/material.module";
import {NgxSocketIoService} from "../shared/services/ngx-socket-io.service";
import {SocketIoClientService} from "../shared/services/socket.io-client.service";
import {NgxSocketIoComponent} from "./ngx-socket-io/ngx-socket-io.component";
import {SocketIoClientComponent} from "./socket.io-Client/socket.io-Client.component";


@NgModule({
    declarations: [
        ProjectComponent,
        NgxSocketIoComponent,
        SocketIoClientComponent
    ],
    imports: [
        CommonModule,
        ProjectRoutingModule,
        MaterialModule
    ],
    providers: [SocketIoClientService, NgxSocketIoService]
})
export class ProjectModule {}
