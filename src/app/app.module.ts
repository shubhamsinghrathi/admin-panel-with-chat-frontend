import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { simpleReducer } from './data-managers/simple.reducer';
import { usersReducer } from './data-managers/users.reducer';
import { adminsReducer } from './data-managers/admins.reducer';
import { wallReducer } from './data-managers/msgwall.reduce';
import { messageReducer } from './data-managers/messages.reduce';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './services/auth.interceptor';

import { ToastrModule } from 'ngx-toastr';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 1500,
      preventDuplicates: true,
    }),
    LightboxModule,
    StoreModule.forRoot({
      message: simpleReducer,
      users: usersReducer,
      admins: adminsReducer,
      msgsWall: wallReducer,
      messages: messageReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
