import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        DashboardComponent,
        HeaderComponent,
        SidebarComponent
    ],
    imports: [
        UserRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: []
})
export class UserModule {}