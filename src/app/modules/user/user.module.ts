import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        UserRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: []
})
export class UserModule {}