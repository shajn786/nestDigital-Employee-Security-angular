import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  email=""
  password=""
  id:any=[]
  constructor(private api : ApiServiceService, private route : Router)
  {

  }

  readValues=()=>
  {
    let data:any = {"email":this.email,"password":this.password}
    console.log(data)
    this.api.employeeAuth(data).subscribe(

      (response:any)=>
      {
       if(response.status == "success")
       {
         console.log(response)
         this.id = response.empid
         localStorage.setItem("id",this.id)
 
         this.route.navigate(["/emprofile"])
       }
       else{
         alert("invalid credential")
       }
      }
 
     )

    
  }

}
