import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserblockComponent } from "./user/userblock/userblock.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ListComponent } from "./user/list/list.component";
import { DetailComponent } from "./user/detail/detail.component";
import { EditComponent } from "./user/edit/edit.component";
import { AddComponent } from "./user/add/add.component";
import { AdminOuterBlockComponent } from './admin/admin-outer-block/admin-outer-block.component';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { AdminDetailComponent } from './admin/admin-detail/admin-detail.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AuthGuard } from "../../services/auth.guard";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "user",
    component: UserblockComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: ListComponent },
      { path: "edit/:userId", component: EditComponent },
      { path: "add", component: AddComponent },
      { path: ":userId", component: DetailComponent }
    ]
  },
  {
    path: "sub-admin",
    component: AdminOuterBlockComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: AdminListComponent },
      { path: "edit/:userId", component: AdminEditComponent },
      { path: "add", component: AdminAddComponent },
      { path: ":userId", component: AdminDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
