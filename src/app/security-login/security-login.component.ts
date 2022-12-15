import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent {

  username=""
  password=""
  id:any=[]

  constructor(private api : ApiServiceService, private route : Router){}

  readValues=()=>
  {
    let data:any = {"username":this.username,"password":this.password}
    console.log(data)
    this.api.securityAuth(data).subscribe(

    (response:any)=>
    {
      console.log(response)
      if(response.status == "success")
      {
        alert("logged in")
        this.id = response.sid
        console.log(this.id)
        localStorage.setItem("id",this.id)
       this.route.navigate(["/securityprofile"])
       
      }
      else
      {
        alert("invalid credentail")
      }
    }


    )
  }

}
