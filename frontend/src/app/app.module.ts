import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

    /** ngx-socket-io
     * @Info: https://socket.io/
     * @Info: https://www.npmjs.com/package/ngx-socket-io
     * @Info: http://qaru.site/questions/16375398/how-to-use-socketio-in-angular-with-nodejs
     */
    import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';                 //  ngx-socket-io
    const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };   //  ngx-socket-io

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,

        SocketIoModule.forRoot(config) // ngx-socket-io
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
