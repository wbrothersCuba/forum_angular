import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserGuard } from "../services/user.guard";

//components
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { CanActivate } from "@angular/router/src/utils/preactivation";

const panelRoutes = [
    {
        path: 'panel',
        component: MainComponent,
        canActivate: [UserGuard],
        children: [
            { path: '', component: ListComponent },
            { path: 'listado', component: ListComponent },
            { path: 'crear', component: AddComponent },
            { path: 'editar/:id', component: EditComponent },
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(panelRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PanelRoutingModule{}