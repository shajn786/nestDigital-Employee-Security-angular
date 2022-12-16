import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-visitor-log',
  templateUrl: './visitor-log.component.html',
  styleUrls: ['./visitor-log.component.css']
})
export class VisitorLogComponent {

  visitorLogData:any =[]

  constructor(private api : ApiServiceService)
  {
    this.api.visitorLog().subscribe(

     (response:any)=>
     {
         this.visitorLogData=response
     }


    )
  }

}
