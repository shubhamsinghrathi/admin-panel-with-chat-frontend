import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserblockComponent } from "./user/userblock/userblock.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ListComponent } from "./user/list/list.component";
import { DetailComponent } from "./user/detail/detail.component";
import { EditComponent } from "./user/edit/edit.component";
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
      { path: ":userId", component: DetailComponent },
      { path: "edit/:userId", component: EditComponent }
    ]
  },
  {
    path: "user/1",
    component: DetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
