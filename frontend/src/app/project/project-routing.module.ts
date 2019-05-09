import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectComponent} from "./project.component";

const routes: Routes = [
    {
        path : '',
        component: ProjectComponent,
        // children: [
        //     {
        //         path : 'item/:id',                // изменяемый параметр
        //         component: TodoDetailedComponent  // что нам покажет когда сработает
        //     },
        //     { path: '**',  redirectTo: '', } // роут на который перекинет обработку ну или перенаправим
        // ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule {}
