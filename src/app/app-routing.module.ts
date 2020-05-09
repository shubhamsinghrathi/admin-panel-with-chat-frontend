import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: "",
        loadChildren: () => import("./modules/guest/guest.module").then(mod => mod.GuestModule)
    },
    {
        path: "home",
        loadChildren: () => import("./modules/user/user.module").then(mod => mod.UserModule)
    },
    { path: "", redirectTo: "/login", pathMatch: "full" }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}