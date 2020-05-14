import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

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
import { UserblockComponent } from './user/userblock/userblock.component';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { AdminDetailComponent } from './admin/admin-detail/admin-detail.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminOuterBlockComponent } from './admin/admin-outer-block/admin-outer-block.component';
import { MessageOuterBlockComponent } from './message/message-outer-block/message-outer-block.component';
import { MessageWallComponent } from './message/message-wall/message-wall.component';
import { MessageListComponent } from './message/message-list/message-list.component';
import { MessageWallCardComponent } from './message/message-wall/message-wall-card/message-wall-card.component';

@NgModule({
    declarations: [
        DashboardComponent,
        HeaderComponent,
        SidebarComponent,
        ListComponent,
        DetailComponent,
        AddComponent,
        EditComponent,
        PopupComponent,
        UserblockComponent,
        AdminAddComponent,
        AdminDetailComponent,
        AdminEditComponent,
        AdminListComponent,
        AdminOuterBlockComponent,
        MessageOuterBlockComponent,
        MessageWallComponent,
        MessageListComponent,
        MessageWallCardComponent
    ],
    imports: [
        CommonModule,
        MatModuleModule,
        MatDialogModule,
        UserRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatGridListModule
    ],
    providers: [
        DatePipe,
        MatDialog
    ]
})
export class UserModule {}