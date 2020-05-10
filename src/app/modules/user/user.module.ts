import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { MatModuleModule } from '../../mat-module.module';
import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './user/list/list.component';
import { DetailComponent } from './user/detail/detail.component';
import { AddComponent } from './user/add/add.component';
import { EditComponent } from './user/edit/edit.component';
import { PopupComponent } from './common/popup/popup.component';

@NgModule({
    declarations: [
        DashboardComponent,
        HeaderComponent,
        SidebarComponent,
        ListComponent,
        DetailComponent,
        AddComponent,
        EditComponent,
        PopupComponent
    ],
    imports: [
        CommonModule,
        MatModuleModule,
        MatDialogModule,
        UserRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        DatePipe,
        MatDialog
    ]
})
export class UserModule {}