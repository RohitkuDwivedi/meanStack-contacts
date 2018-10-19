import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
const appRoutes: Routes = [
  {path: 'registration', component : RegistrationPageComponent},
  {path: 'login', component : LoginComponent},
  {path: 'ViewContact', component : ViewContactComponent},
  {path: 'ContactsDetails', component : ContactsDetailsComponent},
  {path: '', component : BlankPageComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationPageComponent,
    BlankPageComponent,
    ViewContactComponent,
    ContactsDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
