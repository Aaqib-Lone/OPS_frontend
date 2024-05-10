import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user:any={

  name:'',
  id: '',
  email: '',
  contact: '',
  password: '',
  cpassword:'',
  };

  constructor(private router: Router, private dataService: DataService) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  register(){
    console.log(this.user)
    
    if(this.user.password==this.user.cpassword){
      this.dataService.getUserData(this.user).subscribe(
        response => {
          console.log('Post successful:');
          // Handle response as needed
        }
        
      );
      this.router.navigate(['/admin']);
    }
    else{
      alert("Password is not matching")
    }
    
    
  }
}
