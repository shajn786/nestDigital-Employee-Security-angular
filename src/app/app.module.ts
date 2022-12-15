import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminOptionsComponent } from './admin-options/admin-options.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminEmployeeNavbarComponent } from './admin-employee-navbar/admin-employee-navbar.component';
import { EmployeeViewallComponent } from './employee-viewall/employee-viewall.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { SecurityViewallComponent } from './security-viewall/security-viewall.component';
import { AdminSecurityNavbarComponent } from './admin-security-navbar/admin-security-navbar.component';
import { SecuritySearchComponent } from './security-search/security-search.component';

const myRoutes : Routes =[

{
  path:"",component:AdminLoginComponent
},
{
  path:"adminoptions",component:AdminOptionsComponent
},
{
  path:"addemployee",component:AddEmployeeComponent
},
{
  path:"viewallemployee",component:EmployeeViewallComponent
},
{
  path:"searchemployee",component:EmployeeSearchComponent
},
{
  path:"addsecurity",component:AddSecurityComponent
},
{
  path:"viewallsecurity",component:SecurityViewallComponent
},
{
  path:"searchsecurity",component:SecuritySearchComponent
}

]


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminOptionsComponent,
    AddEmployeeComponent,
    AdminEmployeeNavbarComponent,
    EmployeeViewallComponent,
    EmployeeSearchComponent,
    AddSecurityComponent,
    SecurityViewallComponent,
    AdminSecurityNavbarComponent,
    SecuritySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
