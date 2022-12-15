import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {

  empcode =""
  empdetails:any=[]
  id=""

  constructor(private api : ApiServiceService)
  {}

  search=()=>
  {
    let data:any={"empcode":this.empcode}
    console.log(data)
    this.api.searchEmployee(data).subscribe(

     (response:any)=>
     {
       this.empdetails=response
       
     }



    )

  }
  
  deleButtonClick=(id:any)=>
  {
    let data1:any={"id":id}
    this.api.deleteEmployee(data1).subscribe(
     
      (response:any)=>
      {
        console.log(response)
        if(response.status == "success")
        {
          alert(" deleted")
          window.location.reload()
        }
        else
        {
          alert("not deleted")
        }
      }

    )
  }

}
