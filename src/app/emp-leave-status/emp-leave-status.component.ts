import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-emp-leave-status',
  templateUrl: './emp-leave-status.component.html',
  styleUrls: ['./emp-leave-status.component.css']
})
export class EmpLeaveStatusComponent {

  empid:any =""
  leaveData:any =[]
  color:any =""
 

  constructor(private api : ApiServiceService)
  {
    this.empid = localStorage.getItem("id")
    let data :any ={"empid":this.empid}
      this.api.leaveStataus(data).subscribe(

      (response:any)=>
      {
        console.log(response)
        this.leaveData=response  
      }

      )
  }

}
