import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-admin-leave-requests-view',
  templateUrl: './admin-leave-requests-view.component.html',
  styleUrls: ['./admin-leave-requests-view.component.css']
})
export class AdminLeaveRequestsViewComponent {

  applyingdate=""
  updated=""
  leaveData:any =[]
  

  constructor(private api : ApiServiceService)
  {

  }

  search=()=>
  {
    let data:any={"applyingdate":this.applyingdate}
    console.log(data)
    this.api.viewLeaveRequestAdmin(data).subscribe(
     

      (response:any)=>
      {
        console.log(response)
        this.leaveData=response
      }


    )
  }

  approve=(id:any)=>
  {
     let data:any = {"id":id,"status":1,"updated":1}
     this.api.approveLeave(data).subscribe(
      

      (response:any)=>
      {
        console.log(response)
        if(response.status == "success")
        {
          alert("approved")
        }
        else
        {
          alert("some problem")
        }
      }


     )
  }

  rejected=(id:any)=>
  {
     let data:any = {"id":id,"status":-1,"updated":1}
     this.api.approveLeave(data).subscribe(
      

      (response:any)=>
      {
        console.log(response)
        if(response.status == "success")
        {
          alert("Rejected")
        }
        else
        {
          alert("some problem")
        }
      }


     )
  }

}
