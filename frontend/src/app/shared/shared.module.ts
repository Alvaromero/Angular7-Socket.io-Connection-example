import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "./material/material.module";
import {ApiService} from "./services/_api.service";
import {EventService} from "./services/_event.service";
import {LocalStorageService} from "./services/_localStorage.service";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        MaterialModule
    ],
    providers: [
        ApiService,
        EventService,
        LocalStorageService,
    ],
})
export class SharedModule {
}
