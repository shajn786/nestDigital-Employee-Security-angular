import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-security-search',
  templateUrl: './security-search.component.html',
  styleUrls: ['./security-search.component.css']
})
export class SecuritySearchComponent {
  scode =""
  securitydetails:any=[]

  constructor(private api : ApiServiceService)
  {}

  search=()=>
  {
    let data:any={"scode":this.scode}
    console.log(data)
    this.api.searchSecurity(data).subscribe(

     (response:any)=>
     {
       this.securitydetails=response
     }



    )

  }

  deleButtonClick=(id:any)=>
  {
    let data1:any={"id":id}
    this.api.deleteSecurity(data1).subscribe(
     
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
