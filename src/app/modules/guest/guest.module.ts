import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GuestRoutingModule } from './guest-routing.module';
import { LoginComponent } from './login/login.component';

import { DatePipe } from '@angular/common';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        GuestRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        DatePipe
    ]
})
export class GuestModule {}