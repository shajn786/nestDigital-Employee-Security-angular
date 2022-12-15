import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-security-viewall',
  templateUrl: './security-viewall.component.html',
  styleUrls: ['./security-viewall.component.css']
})
export class SecurityViewallComponent {
  securitydata:any=[]

  constructor(private api : ApiServiceService)
  {
    this.api.fetchSecurity().subscribe(

      (response:any)=>
      {
         this.securitydata=response
      }

    )
  }

}
