import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: "appareils",
    canActivate: [AuthGuard],
    component: AppareilViewComponent
  },
  {
    path: "auth",
    component: AuthComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: AppareilViewComponent
  },
  {
    path: 'appareils/:id',
    canActivate: [AuthGuard],
    component: SingleAppareilComponent
  },

  {
    path: 'not-found',
    component: FourOhFourComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },


]

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
