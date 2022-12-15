import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-visitor-log-entry',
  templateUrl: './visitor-log-entry.component.html',
  styleUrls: ['./visitor-log-entry.component.css']
})
export class VisitorLogEntryComponent {

  name =""
  purpose=""
  whom_to_meet=""
  entry_time=""
  exit_time=""
  date=""

  constructor(private api : ApiServiceService)
  {

  }

  readValues=()=>
    {
          let data :any ={"name":this.name,"purpose":this.purpose,"whom_to_meet":this.whom_to_meet,"entry_time":this.entry_time,"exit_time":this.exit_time,
        "date":this.date}
        console.log(data)

        this.api.visitorLogEntry(data).subscribe(

         (response:any)=>
         {
          console.log(response)
          if(response.status=="success")
          {
            alert("data saved")
          }
          else{
            alert("data not saved")
          }
         }



        )
    }



}
