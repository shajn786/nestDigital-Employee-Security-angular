import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})
export class LeaveApplicationComponent {
  leaveType=""
  start_date=""
  end_date=""
  reason=""
  status=""
  empid:any=""

  constructor(private api : ApiServiceService)
  {
  this.empid =  localStorage.getItem("id")
  }

  readValues=()=>
  {
    let data:any = {"empid":this.empid,"leaveType":this.leaveType,"start_date":this.start_date,"end_date":this.end_date,"reason":this.reason,"status":0}
    console.log(data)
    this.api.leaveApplication(data).subscribe(
      
      (response:any)=>
      {
        console.log(response)
        if(response.status=="success")
        {
          alert("applied")
        }
        else{
          alert("not applied")
        }
      }


    )
    
  }

}
