import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

roles:any;
dep:any;
constructor(private http: HttpClient)
{

}
ngOnInit()
{
  let response= this.http.get("http://localhost:8080/api/v1/findAllRole");
response.subscribe((data)=>this.roles=data);

let dep=this.http.get("localhost:8080/api/v1/findAllDepartment");
dep.subscribe((data)=>this.dep=data



}

}
