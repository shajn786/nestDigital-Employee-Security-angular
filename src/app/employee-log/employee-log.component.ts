import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-employee-log',
  templateUrl: './employee-log.component.html',
  styleUrls: ['./employee-log.component.css']
})
export class EmployeeLogComponent {

  employeeLog:any =[]

  constructor(private api : ApiServiceService)
  {
    this.api.employeeLog().subscribe(

      (response:any)=>
      {
        this.employeeLog = response
      }



    )
  }

}
