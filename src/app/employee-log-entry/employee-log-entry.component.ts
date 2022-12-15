import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-employee-log-entry',
  templateUrl: './employee-log-entry.component.html',
  styleUrls: ['./employee-log-entry.component.css']
})
export class EmployeeLogEntryComponent {

  empcode=""
  entry_time=""
  exit_time=""
  date=""

  constructor(private api : ApiServiceService)
  {

  }

  readValues=()=>
    {
          let data :any ={"empcode":this.empcode,"entry_time":this.entry_time,"exit_time":this.exit_time,
        "date":this.date}
        console.log(data)
       

        this.api.employeeLogEntry(data).subscribe(
         
          (response:any)=>
          {
             console.log(response)
             if(response.status == "success")
             {
              alert("Data Saved")
             }
             else{
              alert("Data not saved")
             }
          }


        )

    }

}
