import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : HttpClient) { }

  fetchEmployee=()=>
  {
    return this.http.get("http://localhost:8080/viewallemployee")
  }
  
  addEmployee = (datatosend:any)=>
  {
  return this.http.post("http://localhost:8080/addemp",datatosend)
  }

  searchEmployee=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/searchemp",datatosend)
  }

  
deleteEmployee=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/employeedelete",datatosend)
}
fetchSecurity=()=>
{
  return this.http.get("http://localhost:8080/viewallSecurity")
}

addSecurity=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/addsecurity",datatosend)
}
searchSecurity=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/searchsecurity",datatosend)
}
deleteSecurity=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/securitydelete",datatosend)
}

}
