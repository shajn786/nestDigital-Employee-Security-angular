import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-employee-viewall',
  templateUrl: './employee-viewall.component.html',
  styleUrls: ['./employee-viewall.component.css']
})
export class EmployeeViewallComponent {

  empdetails:any = []

constructor(private api : ApiServiceService){

  this.api.fetchEmployee().subscribe(

    (response :any)=>
    {
      this.empdetails=response
    }


  )

}

}
