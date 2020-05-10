import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './user/list/list.component';
import { AuthGuard } from '../../services/auth.guard';

const routes: Routes = [
    { path: "dashboard", component: DashboardComponent, canActivate: [ AuthGuard ] },
    { path: "user", component: ListComponent, canActivate: [ AuthGuard ] }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class UserRoutingModule {}