import { Component } from '@angular/core';
import { AuthService } from './auth.service';


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  profile:any;
  file: Array<Object>;

  constructor(private auth: AuthService) {
     this.profile = JSON.parse(localStorage.getItem('profile'));

     console.log("profile:"+ this.profile.email_verified);
     this.file = [];
     console.log("test:"+this.isVerified());
  };
  
  isVerified(){
    if (this.profile.email_verified == true){
      return true;
    } else {
      return false;
    }
  };
  
}