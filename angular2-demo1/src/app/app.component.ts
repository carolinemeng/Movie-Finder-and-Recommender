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
  activetest:boolean;
  test:boolean;
  
  constructor(private auth: AuthService) {
     this.profile = JSON.parse(localStorage.getItem('profile'));
     console.log(this.activetest);
     this.file = [];
  };
  
}