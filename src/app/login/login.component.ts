import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data={
    
    username :'',
    password:''
  }


  constructor(private router: Router, private dataService: DataService) {}

  goToRegister() {
    this.router.navigate(['/register']);
  }

  loginHere(){
    console.log(this.data)
    this.dataService.login(this.data).subscribe(
      response => {
        console.log('Post successful:');
        console.log(response,"response")

        if(response.message=="Done"){
          this.router.navigate(['/admin']);
        }
        else{
          alert("Invalid credentials")
          console.log("Invalid")
        }
        // Handle response as needed
      }
      
    );
    
    
    
  }
}
