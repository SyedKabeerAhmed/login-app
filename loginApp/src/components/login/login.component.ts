import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { RestapiService } from 'src/services/restapi.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  username: string;
  password: string;
  message: any

  constructor(public service: RestapiService,private router:Router) { }

  ngOnInit() {
 
   
  }
  loginResponse;

  doLogin() {
   
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => { this.message = data;
this.loginResponse == data;
      if(data != null){
        alert("You have loged in Successfully");
        this.router.navigate(["/home"])
      }else if(data == null){
        alert("Please input valid Credentials");
      }else{
        alert("Please input valid Credentials");
      }
        
         
      
      
  
 
    }
    
    );

    

  }

}
