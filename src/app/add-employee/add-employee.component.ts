import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  empcode=""
  empname=""
  address=""
  email=""
  mobno=""
  username=""
  password=""
  
  
  constructor(private api : ApiServiceService)
  {

  }

  readValues=()=>
  {
    let data:any = {"empcode":this.empcode,"empname":this.empname,"address":this.address,"email":this.email,"mobno":this.mobno,"username":this.username,"password":this.password}
    console.log(data)
    this.api.addEmployee(data).subscribe(

      (response:any)=>
      {
        console.log(response)
        if(data == 0)
        {
          alert("not added")
        }
        else{
          alert("added successfully")
        }
      }
  
      )
  }

}
