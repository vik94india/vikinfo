import { Component } from '@angular/core';
import { Router } from '@angular/router';


declare const show:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  onClick(){
    show();
  }

  title = 'vik';

  constructor(private router:Router){}
  side(){
this.router.navigate(['/footer-bar']);
  }
  
}
