import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GuestRoutingModule } from './guest-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        GuestRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: []
})
export class GuestModule {}