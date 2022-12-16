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
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { EmpLeaveStatusComponent } from './emp-leave-status/emp-leave-status.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { SecurityProfileComponent } from './security-profile/security-profile.component';
import { VisitorLogEntryComponent } from './visitor-log-entry/visitor-log-entry.component';
import { SecurityNavbarComponent } from './security-navbar/security-navbar.component';
import { EmployeeLogEntryComponent } from './employee-log-entry/employee-log-entry.component';
import { AdminLeaveRequestsViewComponent } from './admin-leave-requests-view/admin-leave-requests-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VisitorLogComponent } from './visitor-log/visitor-log.component';
import { AdmindashboardNavbarComponent } from './admindashboard-navbar/admindashboard-navbar.component';
import { EmployeeLogComponent } from './employee-log/employee-log.component';

const myRoutes : Routes =[

  {
     path:"",component:HomePageComponent
  },

{
  path:"adminlogin",component:AdminLoginComponent
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
},
{
  path:"employeelogin",component:EmployeeLoginComponent
},
{
  path:"emprofile",component:EmployeeProfileComponent
},
{
  path:"leaveapplication",component:LeaveApplicationComponent
},
{
  path:"leavestatus",component:EmpLeaveStatusComponent
},
{
  path:"securitylogin",component:SecurityLoginComponent
},
{
  path:"securityprofile",component:SecurityProfileComponent
},
{
  path:"visitorlogentry",component:VisitorLogEntryComponent
},
{
  path:"employeelogentry",component:EmployeeLogEntryComponent
},
{
  path:"leaverequestview",component:AdminLeaveRequestsViewComponent
},
{
  path:"visitorlog",component:VisitorLogComponent
},
{
  path:"employeelog",component:EmployeeLogComponent
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
    SecuritySearchComponent,
    EmployeeLoginComponent,
    EmployeeProfileComponent,
    EmployeeNavbarComponent,
    LeaveApplicationComponent,
    EmpLeaveStatusComponent,
    SecurityLoginComponent,
    SecurityProfileComponent,
    VisitorLogEntryComponent,
    SecurityNavbarComponent,
    EmployeeLogEntryComponent,
    AdminLeaveRequestsViewComponent,
    HomePageComponent,
    VisitorLogComponent,
    AdmindashboardNavbarComponent,
    EmployeeLogComponent
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
